import { useState } from 'react';
import { useLoginMutation } from '../../store/guruAPI';

// styles
import './Login.css';

export default function Login() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [login, { error }] = useLoginMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login({ username: userName, password: password });
	};

	return (
		<div className='login'>
			<form onSubmit={handleSubmit} className='auth-form'>
				<h2>login</h2>

				<label>
					<input
						required
						placeholder='username'
						type='text'
						onChange={(e) => setUserName(e.target.value)}
						value={userName}
					/>
				</label>
				<label>
					<input
						required
						placeholder='password'
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				<button className='btn'>LOGIN</button>
				{error && <p className='error'>{JSON.stringify(error.data)}</p>}
			</form>
		</div>
	);
}
