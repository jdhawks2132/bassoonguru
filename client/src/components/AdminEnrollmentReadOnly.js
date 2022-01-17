import React from 'react';

function AdminEnrollmentReadOnly({ enrollment }) {
	return (
		<tr>
			<td>{enrollment.id}</td>
			<td>{enrollment.user.username}</td>
			<td>{enrollment.course.name}</td>
		</tr>
	);
}

export default AdminEnrollmentReadOnly;
