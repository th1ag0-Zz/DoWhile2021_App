import styled from 'styled-components/native';
import { MotiView } from 'moti';

export const Container = styled(MotiView)`
	width: 100%;
	margin: 18px 0;
`;

export const MessageText = styled.Text`
	font-size: 15px;
	font-family: ${({ theme }) => theme.fonts.REGULAR};
	color: ${({ theme }) => theme.colors.WHITE};
	line-height: 20px;
	margin-bottom: 12px;
`;

export const Footer = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
`;

export const UserName = styled.Text`
	font-size: 15px;
	font-family: ${({ theme }) => theme.fonts.REGULAR};
	color: ${({ theme }) => theme.colors.WHITE};
	margin-left: 16px;
`;
