import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.BLACK_SECONDARY};
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.WHITE};
`;
