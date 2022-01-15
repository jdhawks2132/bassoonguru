import AdminCourseTable from '../../components/AdminCourseTable';
import AdminCommentTable from '../../components/AdminCommentTable';
import { useCommentsQuery } from '../../store/guruAPI';

import './Admin.css';

function Admin() {
	const { data: comments } = useCommentsQuery();

	console.log(comments);
	return (
		<div className='admin'>
			<div className='course-form'>
				<AdminCourseTable />
			</div>
			<div className='user-table'>User Table</div>
			<div className='comment-table'>
				<table>
					<tr>
						<th>Course</th>
						<th>User</th>
						<th>Comment</th>
					</tr>
					{comments?.map((comment) => (
					<AdminCommentTable key={comment.id} comment={comment} />
				))}
				</table>

			</div>
		</div>
	);
}

export default Admin;
