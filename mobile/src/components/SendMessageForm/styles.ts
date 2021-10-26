import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	height: 184px;
	background-color: ${({ theme }) => theme.colors.BLACK_TERTIARY};
	padding: 20px;
`;

export const Input = styled.TextInput`
	width: 100%;
	height: 94px;
	color: ${({ theme }) => theme.colors.WHITE};
`;
