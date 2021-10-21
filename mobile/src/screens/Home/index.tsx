import React from 'react';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';

import { Container } from './styles';

export const Home: React.FC = () => {
	return (
		<Container>
			<Header />

			<MessageList />
		</Container>
	);
};
