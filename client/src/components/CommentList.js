import { useDeleteCommentMutation } from '../store/guruAPI';

function CommentList({ comment, user }) {
	const [deleteComment] = useDeleteCommentMutation();
	const handleDelete = async () => {
		await deleteComment(comment.id);
	};

	return (
		<div className='comment-list'>
			<p>{comment.comment}</p>
			{comment.user_id === user.id && (
				<>
					<button className='btn-mini-pink' onClick={handleDelete}>
						Delete
					</button>
					<button className='btn-mini-blue'>Update</button>
				</>
			)}
		</div>
	);
}

export default CommentList;
