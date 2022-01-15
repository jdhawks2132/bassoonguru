import { useDeleteCommentMutation } from '../store/guruAPI';

import './CommentList.css';

function CommentList({ comment, user }) {
	const [deleteComment] = useDeleteCommentMutation();
	const handleDelete = async () => {
		await deleteComment(comment.id);
	};

	return (
		<ul>
			<li>
				<div className='comment-author'>
					<p>@{user.username} :</p>
				</div>
				<div className='comment-content'>
					<p>{comment.comment}</p>
				</div>
			</li>
			{comment.user_id === user.id && (
				<>
					<button className='btn-mini-pink' onClick={handleDelete}>
						Delete
					</button>
				</>
			)}
		</ul>
	);
}

export default CommentList;
