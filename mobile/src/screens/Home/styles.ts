import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.BLACK_SECONDARY};
	padding-top: ${StatusBar.currentHeight}px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.WHITE};
`;
