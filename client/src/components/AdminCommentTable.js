import { useDeleteCommentMutation, useCommentsQuery } from '../store/guruAPI';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

function AdminCommentTable() {
	const [deleteComment] = useDeleteCommentMutation();
	const { data: comments } = useCommentsQuery();

	const handleDelete = async (id) => {
		await deleteComment(id);
	};

	// const commentsList = comments?.map((comment) => (
	// 	<AdminCommentTable key={comment.id} comment={comment} />
	// ));
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Course</TableCell>
						<TableCell>User</TableCell>
						<TableCell>Comment</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{comments?.map((comment) => (
						<TableRow key={comment.id}>
							<TableCell>{comment.course_id}</TableCell>
							<TableCell>{comment.user_id}</TableCell>
							<TableCell>{comment.comment}</TableCell>
							<TableCell>
								<Button size='small' variant='outlined'>
									Update
								</Button>
							</TableCell>
							<TableCell>
								<Button size='small' variant='outlined'>
									respond
								</Button>
							</TableCell>
							<TableCell>
								<Button
									size='small'
									variant='outlined'
									onClick={() => handleDelete(comment.id)}
								>
									delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default AdminCommentTable;
