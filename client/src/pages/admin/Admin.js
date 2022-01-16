import AdminCourseTable from '../../components/AdminCourseTable';
import AdminCommentTable from '../../components/AdminCommentTable';
import { useCommentsQuery } from '../../store/guruAPI';
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import './Admin.css';

function Admin() {
	const { data: comments } = useCommentsQuery();
	const [isUpdate, setIsUpdate] = useState(true);

	const commentsList = comments?.map((comment) => (
		<AdminCommentTable key={comment.id} comment={comment} isUpdate={isUpdate} />
	));

	console.log(isUpdate);

	return (
		<div className='admin'>
			<div className='course-form'>
				<AdminCourseTable />
			</div>
			<div className='user-table'>User Table</div>
			<div className='comment-table'>
				<FormGroup>
					<FormControlLabel
						control={<Switch defaultChecked />}
						label='Update'
						onChange={(e) => setIsUpdate(!isUpdate)}
					/>
				</FormGroup>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Course</TableCell>
								<TableCell>User</TableCell>
								<TableCell>Comment</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{commentsList}</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}

export default Admin;
