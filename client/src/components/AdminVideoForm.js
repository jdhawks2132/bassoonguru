import React, { useState } from 'react';

function AdminVideoForm() {
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');
	const [courseId, setCourseId] = useState('');

	return (
		<form className='auth-form-mini'>
			<h2 className='page-header'>Add Video to Course:</h2>
			<label>
				<input
					required
					placeholder='title'
					type='text'
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</label>
			<label>
				<input
					required
					placeholder='url'
					type='text'
					onChange={(e) => setUrl(e.target.value)}
					value={url}
				/>
			</label>
			<label>
				<input
					required
					placeholder='course id'
					type='number'
					onChange={(e) => setCourseId(e.target.value)}
					value={courseId}
				/>
			</label>
			<button className='btn-mini-blue'>Add</button>
		</form>
	);
}

export default AdminVideoForm;
