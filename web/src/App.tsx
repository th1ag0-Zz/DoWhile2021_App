import React from 'react';

import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';

import styles from './App.module.scss';

export const App: React.FC = () => {
	return (
		<main className={styles.contentWrapper}>
			<MessageList />
			<LoginBox />
		</main>
	);
};
