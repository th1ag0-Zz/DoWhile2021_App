import React from 'react';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';

import { Container } from './styles';

export const Home: React.FC = () => {
	return (
		<Container>
			<Header />

			<MessageList />

			<SignInBox />
		</Container>
	);
};

// 01:37:00
