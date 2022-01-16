import AdminCourseTable from '../../components/AdminCourseTable';
import AdminCommentTable from '../../components/AdminCommentTable';
import AdminUserTable from '../../components/AdminUserTable';

import './Admin.css';

function Admin() {
	return (
		<div className='admin'>
			<div className='admin-table'>
				<AdminUserTable />
			</div>
			<div className='admin-table'>
				<AdminCommentTable />
			</div>
			<div className='admin-table'>
				<AdminCourseTable />
			</div>
		</div>
	);
}

export default Admin;
