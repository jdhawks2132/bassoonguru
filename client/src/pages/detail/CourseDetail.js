import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCourseQuery, useCurrentUserQuery } from '../../store/guruAPI';

const CourseDetail = () => {
	const { id } = useParams();
	const [check, setCheck] = useState(false);

	const { data: course } = useCourseQuery(id);
	const { data: user } = useCurrentUserQuery();

	useEffect(() => {
		if (course && user) {
			const enrollmentIds = user.courses.map((course) => course.id);
			setCheck(enrollmentIds.includes(course.id));
		}
	}, [course, user]);

	return (
		<div className='course-detail'>
			{course && user && (
				<>
					<h2>{course.name}</h2>
					<h3>{course.desc}</h3>
					<br />
					<p>{course.details}</p>
					<br />
					{!check && <button className='btn-blue'>enroll</button>}
					{check && <button className='btn-pink'>remove</button>}
					{check && <button className='btn-prpl'>curriculum</button>}
				</>
			)}
		</div>
	);
};

export default CourseDetail;
