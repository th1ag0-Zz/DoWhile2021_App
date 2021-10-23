import React from 'react';
import { useTheme } from 'styled-components/native';

import { Button } from '../Button';

import { Container } from './styles';

export const SignInBox: React.FC = () => {
	const { colors } = useTheme();

	return (
		<Container>
			<Button
				title='Entrar com GitHub'
				color={colors.BLACK_PRIMARY}
				bgColor={colors.YELLOW}
				icon='github'
			/>
		</Container>
	);
};
