import React from 'react';

function AdminCommentReadOnly({ comment, handleDelete, handleUpdateClick }) {
	return (
		<tr key={comment.id}>
			<td>{comment.course_id}</td>
			<td>{comment.user_id}</td>
			<td>{comment.comment}</td>
			<td>
				<button
					size='small'
					variant='outlined'
					onClick={(e) => handleUpdateClick(e, comment)}
				>
					Update
				</button>
			</td>
			<td>
				<button size='small' variant='outlined'>
					respond
				</button>
			</td>
			<td>
				<button
					size='small'
					variant='outlined'
					onClick={() => handleDelete(comment.id)}
				>
					delete
				</button>
			</td>
		</tr>
	);
}

export default AdminCommentReadOnly;
