function AdminCommentInlineForm({
	comment,
	handleUpdateFormChange,
	handleCancelClick,
}) {
	return (
		<tr>
			<td>
				<input
					type='text'
					required='required'
					placeholder='Course Id'
					name='course_id'
					value={comment.course_id}
					onChange={handleUpdateFormChange}
				></input>
			</td>
			<td>
				<input
					type='text'
					required='required'
					placeholder='User Id'
					name='user_id'
					value={comment.user_id}
					onChange={handleUpdateFormChange}
				></input>
			</td>
			<td>
				<input
					type='text'
					required='required'
					placeholder='comment'
					name='comment'
					value={comment.comment}
					onChange={handleUpdateFormChange}
				></input>
			</td>
			<td>
				<button className='btn-mini-blue' type='submit'>
					SAVE
				</button>
				<button className='btn-mini-pink' onClick={handleCancelClick}>
					CANCEL
				</button>
			</td>
		</tr>
	);
}

export default AdminCommentInlineForm;
