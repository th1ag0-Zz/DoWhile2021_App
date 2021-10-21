import { FormEvent, useContext, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';

import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';

import styles from './styles.module.scss';

export const SendMessageForm: React.FC = () => {
	const { user, signOut } = useContext(AuthContext);
	const [message, setMessage] = useState('');

	async function handleSendMessage(event: FormEvent) {
		event.preventDefault();

		if (!message.trim()) {
			return;
		}

		await api.post('messages', { message });

		setMessage('');
	}

	return (
		<div className={styles.sendMessageFormWraper}>
			<button onClick={signOut} className={styles.signOutButton}>
				<VscSignOut size='32' />
			</button>

			<header className={styles.userInformation}>
				<div className={styles.userImage}>
					<img src={user?.avatar_url} alt='user' />
				</div>

				<strong className={styles.userName}>{user?.name}</strong>

				<span className={styles.userGithub}>
					<VscGithubInverted size='16' />
					{user?.login}
				</span>
			</header>

			<form className={styles.sendMessageForm} onSubmit={handleSendMessage}>
				<label htmlFor='message'>Mensagem</label>

				<textarea
					name='message'
					id='message'
					placeholder='Qual sua expectativa para o evento?'
					value={message}
					onChange={event => setMessage(event.target.value)}
				/>

				<button type='submit'>Enviar mensagem</button>
			</form>
		</div>
	);
};
