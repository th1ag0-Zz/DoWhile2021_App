import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

interface SizeProps {
	containerSize: number;
	avatarSize: number;
}

export const Gradient = styled(LinearGradient)<SizeProps>`
	width: ${({ containerSize }) => containerSize}px;
	height: ${({ containerSize }) => containerSize}px;
	border-radius: ${({ containerSize }) => containerSize / 2}px;
	align-items: center;
	justify-content: center;
`;

export const Container = styled.Image<SizeProps>`
	width: ${({ avatarSize }) => avatarSize}px;
	height: ${({ avatarSize }) => avatarSize}px;
	border-width: 4px;
	border-color: ${({ theme }) => theme.colors.BLACK_SECONDARY};
	border-radius: ${({ avatarSize }) => avatarSize / 2}px;
`;
