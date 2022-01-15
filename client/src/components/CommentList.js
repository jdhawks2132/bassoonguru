import { useDeleteCommentMutation } from '../store/guruAPI';

import './CommentList.css';

function CommentList({ comment, user }) {
	const [deleteComment] = useDeleteCommentMutation();
	const handleDelete = async () => {
		await deleteComment(comment.id);
	};
	const isUserComment = comment.user_id === user.id;

	return (
		<ul>
			<li>
				<div className='comment-author'>
					<p>@{isUserComment ? user.username : 'user'} :</p>
				</div>
				<div className='comment-content'>
					<p>{comment.comment}</p>
				</div>
			</li>
			{isUserComment && (
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
