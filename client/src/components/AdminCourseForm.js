import React, { useState } from 'react';
import { useAddCourseMutation } from '../store/guruAPI';

function AdminCourseForm() {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [details, setDetails] = useState('');

	const [addCourse, { error }] = useAddCourseMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await addCourse({ name: name, desc: desc, details: details });
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='auth-form-mini'>
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
			{error && <p className='error'>{JSON.stringify(error.data)}</p>}
		</div>
	);
}

export default AdminCourseForm;
