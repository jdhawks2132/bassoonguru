import AdminCommentReadOnly from './AdminCommentReadOnly';
import AdminCommentInlineForm from './AdminCommentInlineForm';
import {
	useDeleteCommentMutation,
	useCommentsQuery,
	useUpdateCommentMutation,
} from '../store/guruAPI';
import { useState, Fragment } from 'react';

function AdminCommentTable() {
	const [deleteComment] = useDeleteCommentMutation();
	const { data: comments } = useCommentsQuery();
	const [updateComment] = useUpdateCommentMutation();

	const [editContactId, setEditContactId] = useState(null);

	const [updateFormData, setUpdateFormData] = useState({
		id: '',
		course_id: '',
		user_id: '',
		comment: '',
	});

	const handleDelete = async (id) => {
		await deleteComment(id);
	};

	const handleUpdateClick = (e, comment) => {
		e.preventDefault();
		setEditContactId(comment.id);

		const formValues = {
			id: comment.id,
			course_id: comment.course_id,
			user_id: comment.user_id,
			comment: comment.comment,
		};

		setUpdateFormData(formValues);
	};

	const handleUpdateFormChange = (e) => {
		e.preventDefault();
		const key = e.target.name;
		const value = e.target.value;

		const newFormData = { ...updateFormData };
		newFormData[key] = value;

		setUpdateFormData(newFormData);
	};

	const handleUpdateFormSubmit = async (e) => {
		e.preventDefault();

		await updateComment(updateFormData).then(setEditContactId(null));
	};

	const handleCancelClick = () => {
		setEditContactId(null);
	};

	return (
		<div>
			<h2>Comments</h2>
			<form onSubmit={handleUpdateFormSubmit}>
				<table>
					<thead>
						<tr>
							<td>Course</td>
							<td>User</td>
							<td>Comment</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						{comments?.map((comment) => (
							<Fragment key={comment.id}>
								{editContactId === comment.id ? (
									<AdminCommentInlineForm
										comment={updateFormData}
										handleUpdateFormChange={handleUpdateFormChange}
										handleCancelClick={handleCancelClick}
									/>
								) : (
									<AdminCommentReadOnly
										comment={comment}
										handleDelete={handleDelete}
										handleUpdateClick={handleUpdateClick}
									/>
								)}
							</Fragment>
						))}
					</tbody>
				</table>
			</form>
		</div>
	);
}

export default AdminCommentTable;
