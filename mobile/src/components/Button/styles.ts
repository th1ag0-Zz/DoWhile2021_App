import styled from 'styled-components/native';

interface ButtonProps {
	bgColor: string;
}

interface TextProps {
	color: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
	width: 100%;
	height: 48px;
	background-color: ${({ bgColor }) => bgColor};
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text<TextProps>`
	font-size: 14px;
	font-family: ${({ theme }) => theme.fonts.BOLD};
	color: ${({ color }) => color};
	text-transform: uppercase;
`;
