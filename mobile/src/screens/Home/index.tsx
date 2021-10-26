import React from 'react';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';
import { SendMessageForm } from '../../components/SendMessageForm';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

export const Home: React.FC = () => {
	const { user } = useAuth();

	return (
		<Container>
			<Header />

			<MessageList />

			{!!user ? <SendMessageForm /> : <SignInBox />}
		</Container>
	);
};
