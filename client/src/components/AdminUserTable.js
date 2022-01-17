import { useState } from 'react';
import { useUsersQuery } from '../store/guruAPI';

function AdminUserTable() {
	const [open, setOpen] = useState(false);

	const handleClickOpen = (user) => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const { data: users } = useUsersQuery();
	return (
		<div>
			<table>
				<thead>
					<tr>
						<td>ID</td>
						<td>Username</td>
						<td>Admin</td>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.username}</td>
							<td>{user.admin ? 'True' : 'False'}</td>
							<td>
								<button
									size='small'
									variant='outlined'
									onClick={handleClickOpen}
								>
									Update
								</button>
							</td>
							<td>
								<button size='small' variant='outlined'>
									delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default AdminUserTable;
