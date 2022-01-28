import React, { useState } from 'react';
import Select from 'react-select';
import { useCoursesQuery, useAddVideoMutation } from '../store/guruAPI';

function AdminVideoForm() {
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');
	const [courseId, setCourseId] = useState('');

	const { data: courses } = useCoursesQuery();

	const [addVideo, { error }] = useAddVideoMutation();

	const courseList = courses?.map((course) => ({
		value: course.id,
		label: course.name,
	}));

	const handleSubmit = async (e) => {
		e.preventDefault();
		await addVideo({ title: title, url: url, course_id: courseId });
	};
	console.log(courseId);
	return (
		<div>
			<form onSubmit={handleSubmit} className='auth-form-mini'>
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
					<Select
						className='select'
						name='assignment_id'
						onChange={(option) => setCourseId(option.value)}
						value={courseId}
						options={courseList}
					/>
				</label>
				<button className='btn-mini-blue'>Add</button>
			</form>
			{error && <p className='error'>{JSON.stringify(error.data)}</p>}
		</div>
	);
}

export default AdminVideoForm;
