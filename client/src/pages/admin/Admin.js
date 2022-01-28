import AdminCommentTable from '../../components/AdminCommentTable';
import AdminCourseForm from '../../components/AdminCourseForm';
import AdminEnrollmentTable from '../../components/AdminEnrollmentTable';
import AdminUserTable from '../../components/AdminUserTable';
import AdminVideoForm from '../../components/AdminVideoForm';

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
				<AdminEnrollmentTable />
			</div>
			<div>
				<AdminCourseForm />
			</div>
			<div>
				<AdminVideoForm/>
			</div>
		</div>
	);
}

export default Admin;
