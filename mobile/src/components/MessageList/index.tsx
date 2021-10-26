import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import { api } from '../../services/api';
import { Message, MessageProps } from '../Message';

import { Container } from './styles';

let messagesQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', newMessage => {
	messagesQueue.push(newMessage as MessageProps);
});

export const MessageList: React.FC = () => {
	const [currentMessages, setCurrentsMessages] = useState<MessageProps[]>([]);

	useEffect(() => {
		async function fetchMessages() {
			const messagesResponse = await api.get<MessageProps[]>('/messages/last3');
			setCurrentsMessages(messagesResponse.data);
		}

		fetchMessages();
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			if (messagesQueue.length > 0) {
				setCurrentsMessages(oldstate => [
					messagesQueue[0],
					oldstate[0],
					oldstate[1],
				]);

				messagesQueue.shift();
			}
		}, 3000);

		return () => clearInterval(timer);
	}, []);

	return (
		<Container keyboardShouldPersistTaps='never'>
			{currentMessages.map(message => (
				<Message key={message.created_at} data={message} />
			))}
		</Container>
	);
};
