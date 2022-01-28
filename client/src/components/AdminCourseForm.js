import React, { useState } from 'react';

function AdminCourseForm() {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [details, setDetails] = useState('');

	return (
		<form className='auth-form-mini'>
			<h2 className='page-header'>Add New Course:</h2>
			<label>
				<input
					required
					placeholder='name'
					type='text'
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
			</label>
			<label>
				<input
					required
					placeholder='description'
					type='text'
					onChange={(e) => setDesc(e.target.value)}
					value={desc}
				/>
			</label>
			<label>
				<input
					required
					placeholder='details'
					type='text'
					onChange={(e) => setDetails(e.target.value)}
					value={details}
				/>
			</label>
			<button className='btn-mini-blue'>Add</button>
		</form>
	);
}

export default AdminCourseForm;
