import { useState } from 'react';
import { useSignupMutation } from '../../store/guruAPI';

// styles
import './Signup.css';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');
	const [signup, { error }] = useSignupMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup({ username: userName, password: password, email: email });
	};

	return (
		<div className='signup'>
			<form onSubmit={handleSubmit} className='auth-form'>
				<h2>sign up</h2>
				<label>
					<input
						required
						type='email'
						placeholder='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
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
				<label>
					<input
						required
						placeholder='username'
						type='text'
						onChange={(e) => setUserName(e.target.value)}
						value={userName}
					/>
				</label>
				<button className='btn'>SIGNUP</button>
				{error && <p className='error'>{JSON.stringify(error.data)}</p>}
			</form>
		</div>
	);
}
