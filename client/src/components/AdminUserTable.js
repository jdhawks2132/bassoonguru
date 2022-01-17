import { useState, Fragment } from 'react';
import {
	useUsersQuery,
	useUpdateUserMutation,
	useDeleteUserMutation,
} from '../store/guruAPI';
import AdminUserReadOnly from './AdminUserReadOnly';
import AdminUserInlineForm from './AdminUserInlineForm';
function AdminUserTable() {
	const { data: users } = useUsersQuery();
	const [deleteUser] = useDeleteUserMutation();
	const [updateUser] = useUpdateUserMutation();
	const [editUserId, setEditUserId] = useState(null);
	const [updateFormData, setUpdateFormData] = useState({
		id: '',
		username: '',
		email: '',
		admin: false,
	});

	const handleDelete = async (id) => {
		await deleteUser(id);
	};

	const handleUpdateClick = (e, user) => {
		e.preventDefault();
		setEditUserId(user.id);

		const formValues = {
			id: user.id,
			username: user.username,
			email: user.email,
			admin: user.admin,
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
		await updateUser(updateFormData).then(setEditUserId(null));
	};

	const handleCancelClick = () => {
		setEditUserId(null);
	};

	console.log(updateFormData);
	return (
		<div>
			<h2>Users</h2>
			<form onSubmit={handleUpdateFormSubmit}>
				<table>
					<thead>
						<tr>
							<td>ID</td>
							<td>Username</td>
							<td>Email</td>
							<td>Admin</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						{users?.map((user) => (
							<Fragment key={user.id}>
								{editUserId === user.id ? (
									<AdminUserInlineForm
										user={updateFormData}
										handleUpdateFormChange={handleUpdateFormChange}
										handleCancelClick={handleCancelClick}
									/>
								) : (
									<AdminUserReadOnly
										user={user}
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

export default AdminUserTable;
