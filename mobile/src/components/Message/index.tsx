import React from 'react';


import { UserPhoto } from '../UserPhoto';

import { Container, MessageText, Footer, UserName } from './styles';

export interface MessageProps {
	id: string;
	text: string;
	user: {
		name: string;
		avatar_url: string;
	}
}

interface Props {
	data: MessageProps
}

export const Message: React.FC<Props> = ({data}) => {
	return (
		<Container
			from={{ opacity: 0, translateX: 50 }}
			animate={{opacity: 1, translateX: 0}}
			transition={{ type: 'timing',duration: 700}}
		>
			<MessageText>
				{data.text}
			</MessageText>

			<Footer>
				<UserPhoto imageUri={data.user.avatar_url} size='small' />
				<UserName>{data.user.name}</UserName>
			</Footer>
		</Container>
	);
};
