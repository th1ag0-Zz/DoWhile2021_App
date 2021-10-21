import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import { api } from '../../services/api';

import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';

interface Message {
	id: string;
	text: string;
	user: {
		name: string;
		avatar_url: string;
	};
}

const messagesQueue: Message[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', newMessage => {
	messagesQueue.push(newMessage);
});

export const MessageList: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setInterval(() => {
			if (messagesQueue.length > 0) {
				setMessages(oldstate =>
					[messagesQueue[0], oldstate[0], oldstate[1]].filter(Boolean),
				);

				messagesQueue.shift();
			}
		}, 3000);
	}, []);

	useEffect(() => {
		async function fetchMessages() {
			const response = await api.get<Message[]>('messages/last3');

			setMessages(response.data);
			setIsLoading(false);
		}

		fetchMessages();
	}, []);

	return (
		<div className={styles.messageListWraper}>
			<img src={logoImg} alt='DoWhile2021' />

			{isLoading ? (
				<div />
			) : (
				<ul className={styles.messageList}>
					{messages.map(message => (
						<li key={message.id} className={styles.message}>
							<p className={styles.messageContent}>{message.text}</p>

							<div className={styles.messageUser}>
								<div className={styles.userImage}>
									<img src={message.user.avatar_url} alt='user' />
								</div>
								<span>{message.user.name}</span>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
