import React from 'react';

function AdminUserInlineForm({
	user,
	handleUpdateFormChange,
	handleCancelClick,
}) {
	return (
		<tr>
			<td>
				<input
					type='number'
					required='required'
					placeholder='id'
					name='id'
					value={user.id}
					onChange={handleUpdateFormChange}
				></input>
			</td>
			<td>
				<input
					type='text'
					required='required'
					placeholder='User Name'
					name='username'
					value={user.username}
					onChange={handleUpdateFormChange}
				></input>
			</td>
			<td>
				<input
					type='email'
					required='required'
					placeholder='User Email'
					name='email'
					value={user.email}
					onChange={handleUpdateFormChange}
				></input>
			</td>
			<td>
				<select
					name='admin'
					required='required'
					onChange={handleUpdateFormChange}
				>
					<option defaultValue={user.admin}>Select an Option</option>
					<option value={true}>True</option>
					<option value={false}>False</option>
				</select>
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

export default AdminUserInlineForm;
