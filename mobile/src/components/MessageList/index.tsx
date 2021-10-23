import React from 'react';

import { Message } from '../Message';

import { Container } from './styles';

export const MessageList: React.FC = () => {
	const message = {
		id: '1',
		text: 'Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥',
		user: {
			name: 'th1ag0-Zz',
			avatar_url: 'https://github.com/th1ag0-Zz.png'
		}
	}

	return (
		<Container keyboardShouldPersistTaps='never'>
			<Message data={message} />
			<Message data={message} />
			<Message data={message} /> 
		</Container>
	);
};
