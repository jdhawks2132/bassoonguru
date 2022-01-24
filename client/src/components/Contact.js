import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'gmail',
				'template_10ax1cl',
				e.target,
				'user_YO8RauGbkIFdUOknXzHZb'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	return (
		<div>
			<form onSubmit={sendEmail} className='auth-form'>
				<h2>Contact Us:</h2>
				<label>
					<input required type='text' placeholder='name' name='name' />
				</label>
				<label>
					<input required placeholder='email' type='email' name='email' />
				</label>
				<label>
					<textarea required placeholder='message' type='text' name='message' />
				</label>
				<button className='btn'>Submit</button>
			</form>
		</div>
	);
}

export default Contact;
