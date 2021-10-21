import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 17px 20px;
`;

export const UserContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const LogOutButton = styled.TouchableOpacity`
	margin-right: 20px;
`;

export const LogOutText = styled.Text`
	font-size: 15px;
	font-family: ${({ theme }) => theme.fonts.REGULAR};
	color: ${({ theme }) => theme.colors.WHITE};
`;
