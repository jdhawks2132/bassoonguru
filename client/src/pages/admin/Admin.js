import AdminCourseTable from '../../components/AdminCourseTable';
import AdminCommentTable from '../../components/AdminCommentTable';
import { useCommentsQuery } from '../../store/guruAPI';

import './Admin.css';

function Admin() {
	const { data: comments } = useCommentsQuery();


	const commentsList = comments?.map((comment) => (
		<AdminCommentTable key={comment.id} comment={comment} />
	));

	return (
		<div className='admin'>
			<div className='course-form'>
				<AdminCourseTable />
			</div>
			<div className='user-table'>User Table</div>
			<div className='comment-table'>
				<table>
					<thead>
						<tr>
							<th>Course</th>
							<th>User</th>
							<th>Comment</th>
						</tr>
					</thead>
					<tbody>{commentsList}</tbody>
				</table>
			</div>
		</div>
	);
}

export default Admin;
