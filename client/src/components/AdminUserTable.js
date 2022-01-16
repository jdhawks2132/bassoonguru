import { useState } from 'react';
import { useUsersQuery } from '../store/guruAPI';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

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
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Username</TableCell>
							<TableCell>Admin</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users?.map((user) => (
							<TableRow key={user.id}>
								<TableCell>{user.id}</TableCell>
								<TableCell>{user.username}</TableCell>
								<TableCell>{user.admin ? 'True' : 'False'}</TableCell>
								<TableCell>
									<Button
										size='small'
										variant='outlined'
										onClick={handleClickOpen}
									>
										Update
									</Button>
								</TableCell>
								<TableCell>
									<Button size='small' variant='outlined'>
										delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<div>
				<Dialog open={open} onClose={handleClose}>
					<DialogTitle>Subscribe</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To subscribe to this website, please enter your email address
							here. We will send updates occasionally.
						</DialogContentText>
						<TextField
							autoFocus
							margin='dense'
							id='username'
							label='user name'
							type='text'
							fullWidth
							variant='standard'
						/>
						<TextField
							autoFocus
							margin='dense'
							id='name'
							label='Email Address'
							type='email'
							fullWidth
							variant='standard'
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button onClick={handleClose}>Submit</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
}

export default AdminUserTable;
