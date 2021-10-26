import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from '../theme';
import { AuthProvider } from '../hooks/auth';

export const Providers: React.FC = ({ children }) => (
	<AuthProvider>
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</AuthProvider>
);
