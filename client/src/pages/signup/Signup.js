import { useState, useEffect } from 'react';
import { useSignupMutation } from '../../store/guruAPI';

// styles
import './Signup.css';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');
	const [signup, { data: signupData, error }] = useSignupMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup({ username: userName, password: password, email: email });
	};

	return (
		<div className='signup'>
			<form onSubmit={handleSubmit} className='auth-form'>
				<h2>sign up</h2>
				<label>
					<span>email:</span>
					<input
						required
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>password:</span>
					<input
						required
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				<label>
					<span>user name:</span>
					<input
						required
						type='text'
						onChange={(e) => setUserName(e.target.value)}
						value={userName}
					/>
				</label>
				<button className='btn'>Sign up</button>
				{error && <p className='error'>{JSON.stringify(error.data)}</p>}
			</form>
		</div>
	);
}
