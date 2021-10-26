import React from 'react';

import LogoSvg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { UserPhoto } from '../UserPhoto';

import { Container, UserContainer, LogOutText, LogOutButton } from './styles';

export const Header: React.FC = () => {
	const { user, signOut } = useAuth();

	return (
		<Container>
			<LogoSvg />

			<UserContainer>
				{user && (
					<LogOutButton>
						<LogOutText onPress={signOut}>Sair</LogOutText>
					</LogOutButton>
				)}

				<UserPhoto imageUri={user?.avatar_url} />
			</UserContainer>
		</Container>
	);
};
