import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_0dxvb46',
				'template_bnzmv7j',
				form.current,
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
			<form ref={form} onSubmit={sendEmail} className='auth-form'>
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
