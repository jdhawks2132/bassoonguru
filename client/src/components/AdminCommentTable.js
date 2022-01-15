import { useState } from 'react';
import { useDeleteCommentMutation } from '../store/guruAPI';

function AdminCommentTable({ comment }) {
	const [deleteComment] = useDeleteCommentMutation();
	const [isUpdate, setIsUpdate] = useState('');

	const handleDelete = async () => {
		await deleteComment(comment.id);
	};
	return (
		<tr>
			<td>{comment.course_id}</td>
			<td>{comment.user_id}</td>
			<td>{comment.comment}</td>
			<td>
				<button onClick={() => setIsUpdate(!isUpdate)}>Update</button>
			</td>
			<td>
				<button>respond</button>
			</td>
			<td>
				<button onClick={handleDelete}>delete</button>
			</td>
		</tr>
	);
}

export default AdminCommentTable;
