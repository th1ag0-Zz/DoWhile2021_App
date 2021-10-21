import React from 'react';

import { UserPhoto } from '../UserPhoto';

import { Container, MessageText, Footer, UserName } from './styles';

export const Message: React.FC = () => {
	return (
		<Container>
			<MessageText>
				Não vejo a hora de começar esse evento, com certeza vai ser o melhor de
				todos os tempos, vamooo pra cima! 🔥🔥
			</MessageText>

			<Footer>
				<UserPhoto imageUri='' size='small' />
				<UserName>th1ag-Zz</UserName>
			</Footer>
		</Container>
	);
};
