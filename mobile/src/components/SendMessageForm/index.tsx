import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useTheme } from 'styled-components';

import { api } from '../../services/api';
import { Button } from '../Button';

import { Container, Input } from './styles';

export const SendMessageForm: React.FC = () => {
	const { colors } = useTheme();
	const [message, setMessage] = useState('');
	const [sendingMessage, setSendingMessage] = useState(false);

	async function handleMessageSubmit() {
		const messageFormated = message.trim();

		if (messageFormated.length > 0) {
			setSendingMessage(true);

			await api.post('/messages', { message });
			setMessage('');
			Keyboard.dismiss();

			setSendingMessage(false);
		} else {
			Alert.alert('Insira um conteúdo válido');
		}
	}

	return (
		<Container>
			<Input
				style={{ textAlignVertical: 'top' }}
				placeholder='Qual sua expectativa para o evento?'
				placeholderTextColor={colors.GRAY_PRIMARY}
				multiline
				maxLength={140}
				value={message}
				onChangeText={setMessage}
				editable={!sendingMessage}
			/>

			<Button
				title='ENVIAR MENSAGEM'
				bgColor={colors.PINK}
				color={colors.WHITE}
				onPress={handleMessageSubmit}
				isLoading={sendingMessage}
			/>
		</Container>
	);
};
