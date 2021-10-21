import React from 'react';

import { Message } from '../Message';

import { Container } from './styles';

export const MessageList: React.FC = () => {
	return (
		<Container keyboardShouldPersistTaps='never'>
			<Message />
			<Message />
			<Message />
		</Container>
	);
};
