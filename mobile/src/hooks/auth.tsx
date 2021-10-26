import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

const CLIENT_ID = 'b36e43a4d5f84f0dd26f';
const SCOPE = 'read:user';
const USER_STORAGE = '@dowhile:user';
const TOKEN_STORAGE = '@dowhile:token';

type AuthResponse = {
	token: string;
	user: User;
};

type AuthorizationResponse = {
	params: {
		code?: string;
		error?: string;
	};
	type?: string;
};

type User = {
	id: string;
	name: string;
	avatar_url: string;
	login: string;
};

type AuthContextData = {
	user: User | null;
	isSigningIng: boolean;
	signIn: () => Promise<void>;
	signOut: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isSigningIng, setIsSigningIn] = useState(false);

	async function signIn() {
		try {
			setIsSigningIn(true);
			const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
			const authSessionResponse = (await AuthSession.startAsync({
				authUrl,
			})) as AuthorizationResponse;

			if (
				authSessionResponse.type === 'success' &&
				authSessionResponse.params.error !== 'access_denied'
			) {
				const authResponse = await api.post<AuthResponse>('/authenticate', {
					code: authSessionResponse.params.code,
				});

				const { user, token } = authResponse.data;
				api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

				await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
				await AsyncStorage.setItem(TOKEN_STORAGE, JSON.stringify(token));

				setUser(user);
			}
		} catch (error) {
			Alert.alert('Erro');
		} finally {
			setIsSigningIn(false);
		}
	}

	async function signOut() {
		setUser(null);
		await AsyncStorage.removeItem(USER_STORAGE);
		await AsyncStorage.removeItem(TOKEN_STORAGE);
	}

	useEffect(() => {
		async function loadData() {
			setIsSigningIn(true);
			const userStorage = await AsyncStorage.getItem(USER_STORAGE);
			const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);

			if (userStorage && tokenStorage) {
				api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
					tokenStorage,
				)}`;
				setUser(JSON.parse(userStorage));
			}

			setIsSigningIn(false);
		}

		loadData();
	}, []);

	return (
		<AuthContext.Provider value={{ user, isSigningIng, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider, useAuth };
