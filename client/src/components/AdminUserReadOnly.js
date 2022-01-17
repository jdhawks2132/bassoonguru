import React from 'react';

function AdminUserReadOnly({ user, handleUpdateClick, handleDelete }) {
	return (
		<tr>
			<td>{user.id}</td>
			<td>{user.username}</td>
			<td>{user.email}</td>
			<td>{user.admin ? 'True' : 'False'}</td>
			<td>
				<button
					className='btn-mini-blue'
					onClick={(e) => handleUpdateClick(e, user)}
				>
					UPDATE
				</button>
			</td>
			<td>
				<button
					className='btn-mini-pink'
					onClick={(e) => handleDelete(user.id)}
				>
					DELETE
				</button>
			</td>
		</tr>
	);
}

export default AdminUserReadOnly;
