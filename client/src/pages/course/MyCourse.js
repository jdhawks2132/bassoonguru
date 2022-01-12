import CourseDetail from './CourseDetail';

import './Course.css';

const Course = ({ user }) => {
	return (
		<div className='course-details'>
			<CourseDetail user={user} />
		</div>
	);
};

export default Course;
