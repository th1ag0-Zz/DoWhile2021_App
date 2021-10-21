import React from 'react';
import { Image } from 'react-native';

import { useTheme } from 'styled-components';

import avatarImg from '../../assets/avatar.png';

import { Gradient, Container } from './styles';

const sizes = {
	small: {
		containerSize: 32,
		avatarSize: 28,
	},
	normal: {
		containerSize: 48,
		avatarSize: 42,
	},
};

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

type Props = {
	imageUri: string | undefined;
	size?: 'small' | 'normal';
};

export const UserPhoto: React.FC<Props> = ({ imageUri, size = 'normal' }) => {
	const { containerSize, avatarSize } = sizes[size];
	const { colors } = useTheme();

	return (
		<Gradient
			containerSize={containerSize}
			avatarSize={avatarSize}
			start={{ x: 0, y: 0.8 }}
			end={{ x: 0.9, y: 1 }}
			colors={[colors.PINK, colors.YELLOW]}>
			<Container
				containerSize={containerSize}
				avatarSize={avatarSize}
				source={{ uri: !!imageUri ? imageUri : AVATAR_DEFAULT }}
			/>
		</Gradient>
	);
};
