import { useEnrollmentsQuery } from '../store/guruAPI';
import AdminEnrollmentReadOnly from './AdminEnrollmentReadOnly';

function AdminEnrollmentTable() {
	const { data: enrollments } = useEnrollmentsQuery();

	const enrollmentsList = enrollments?.map((enrollment) => (
		<AdminEnrollmentReadOnly key={enrollment.id} enrollment={enrollment} />
	));

	return (
		<div>
			<h2>Current Enrollment</h2>
			<table>
				<thead>
					<tr>
						<td>Enrollment Id</td>
						<td>Username</td>
						<td>Lesson Name</td>
					</tr>
				</thead>
				<tbody>{enrollmentsList}</tbody>
			</table>
		</div>
	);
}

export default AdminEnrollmentTable;
