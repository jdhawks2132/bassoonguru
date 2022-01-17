import React from 'react';

function AdminCommentReadOnly({ comment, handleDelete, handleUpdateClick }) {
	return (
		<tr key={comment.id}>
			<td>{comment.course_id}</td>
			<td>{comment.user_id}</td>
			<td>{comment.comment}</td>
			<td>
				<button
					className='btn-mini-blue'
					onClick={(e) => handleUpdateClick(e, comment)}
				>
					UPDATE
				</button>
			</td>
			{/* <td>
				<button size='small' variant='outlined'>
					respond
				</button>
			</td> */}
			<td>
				<button
					className='btn-mini-pink'
					onClick={() => handleDelete(comment.id)}
				>
					DELETE
				</button>
			</td>
		</tr>
	);
}

export default AdminCommentReadOnly;
