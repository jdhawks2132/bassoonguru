import { useState } from 'react';
import { useDeleteCommentMutation } from '../store/guruAPI';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

function AdminCommentTable({ comment }) {
	const [deleteComment] = useDeleteCommentMutation();
	const [isUpdate, setIsUpdate] = useState('');

	const handleDelete = async () => {
		await deleteComment(comment.id);
	};
	return (
		<TableRow>
			<TableCell>{comment.course_id}</TableCell>
			<TableCell>{comment.user_id}</TableCell>
			<TableCell>{comment.comment}</TableCell>
			<TableCell>
				<Button
					size='small'
					variant='outlined'
					onClick={() => setIsUpdate(!isUpdate)}
				>
					Update
				</Button>
			</TableCell>
			<TableCell>
				<Button size='small' variant='outlined'>
					respond
				</Button>
			</TableCell>
			<TableCell>
				<Button size='small' variant='outlined' onClick={handleDelete}>
					delete
				</Button>
			</TableCell>
		</TableRow>
	);
}

export default AdminCommentTable;
