import { useState } from 'react';
import { useAddCommentMutation } from '../store/guruAPI';

import './CommentForm.css';

function CommentForm({ course, user }) {
	const [comment, setComment] = useState('');
	const [addComment, { error }] = useAddCommentMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await addComment({
			comment: comment,
			user_id: user.id,
			course_id: course.id,
		}).then(setComment(''));
	};
	return (
		<div>
			{error && <p className='error'>{JSON.stringify(error.data)}</p>}
			<form onSubmit={handleSubmit} className='auth-form-mini'>
				<h2 className='page-header'>Comments:</h2>
				<label>
					<input
						required
						placeholder='comment'
						type='text'
						onChange={(e) => setComment(e.target.value)}
						value={comment}
					/>
				</label>
				<button className='btn-mini-blue'>Add</button>
			</form>
		</div>
	);
}

export default CommentForm;
