import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface User {
	id: string;
	name: string;
	login: string;
	avatar_url: string;
}

interface AuthContextData {
	user: User | null;
	signInUrl: string;
	signOut: () => void;
}

interface AuthResponse {
	user: User;
	token: string;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	const client_id = '0bdc8583f703b0f19b52';
	const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}`;

	async function signIn(githubCode: string) {
		const response = await api.post<AuthResponse>('authenticate', {
			code: githubCode,
		});

		const { token, user } = response.data;

		localStorage.setItem('@dowhile:token', token);

		api.defaults.headers.common.authorization = `Bearer ${token}`;

		setUser(user);
	}

	async function signOut() {
		setUser(null);
		localStorage.removeItem('@dowhile:token');
	}

	useEffect(() => {
		const token = localStorage.getItem('@dowhile:token');

		if (token) {
			api.defaults.headers.common.authorization = `Bearer ${token}`;

			api.get<User>('profile').then(response => {
				setUser(response.data);
			});
		}
	}, []);

	useEffect(() => {
		const url = window.location.href;
		const hasGithubCode = url.includes('?code=');

		if (hasGithubCode) {
			const [urlWithoutCode, githubCode] = url.split('?code=');

			window.history.pushState({}, '', urlWithoutCode);

			signIn(githubCode);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ user, signInUrl, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};
