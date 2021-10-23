import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
	title: string;
	color: string;
	bgColor: string;
	icon?: React.ComponentProps<typeof AntDesign>['name'];
	isLoading?: boolean;
}

export const Button: React.FC<Props> = ({
	title,
	color,
	bgColor,
	icon,
	isLoading = false,
	...rest
}) => {
	return (
		<Container
			bgColor={bgColor}
			activeOpacity={0.7}
			disabled={isLoading}
			{...rest}>
			{isLoading ? (
				<ActivityIndicator size='small' color={color} />
			) : (
				<>
					{icon && (
						<AntDesign name={icon} size={24} style={{ marginRight: 12 }} />
					)}
					<Title color={color}>{title}</Title>
				</>
			)}
		</Container>
	);
};
