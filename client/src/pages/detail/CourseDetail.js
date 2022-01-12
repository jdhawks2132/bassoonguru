import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	useCourseQuery,
	useCurrentUserQuery,
	useAddEnrollmentMutation,
	useDeleteEnrollmentMutation,
} from '../../store/guruAPI';

const CourseDetail = () => {
	const { id } = useParams();
	const history = useHistory();
	const [check, setCheck] = useState(false);

	const { data: course } = useCourseQuery(id);
	const { data: user } = useCurrentUserQuery();
	const [addEnrollment] = useAddEnrollmentMutation();
	const [deleteEnrollment] = useDeleteEnrollmentMutation();

	useEffect(() => {
		if (course && user) {
			const enrollmentIds = user.courses.map((course) => course.id);
			setCheck(enrollmentIds.includes(course.id));
		}
	}, [course, user]);

	const handleEnrollment = async () => {
		await addEnrollment({ user_id: user.id, course_id: course.id }).then(
			history.push('/my-lessons')
		);
	};

	const handleDeleteEnrollment = async () => {
		const result = user.enrollments.filter(
			(enrollment) => enrollment.course_id === course.id
		);
		const resultId = result[0].id;
		await deleteEnrollment(resultId).then(history.push('/my-lessons'));
	};

	return (
		<div className='course-detail'>
			{course && user && (
				<>
					<h2>{course.name}</h2>
					<h3>{course.desc}</h3>
					<br />
					<p>{course.details}</p>
					<br />
					{!check && (
						<button onClick={handleEnrollment} className='btn-blue'>
							enroll
						</button>
					)}
					{check && (
						<button onClick={handleDeleteEnrollment} className='btn-pink'>
							remove
						</button>
					)}
					{check && <button className='btn-prpl'>curriculum</button>}
				</>
			)}
		</div>
	);
};

export default CourseDetail;
