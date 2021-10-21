import React from 'react';

import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';

import { Container, UserContainer, LogOutText, LogOutButton } from './styles';

export const Header: React.FC = () => {
	return (
		<Container>
			<LogoSvg />

			<UserContainer>
				<LogOutButton>
					<LogOutText>Sair</LogOutText>
				</LogOutButton>

				<UserPhoto imageUri={'https://github.com/th1ag0-Zz.png'} />
			</UserContainer>
		</Container>
	);
};
