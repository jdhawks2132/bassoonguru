import { Link } from 'react-router-dom';

// styles
import './CourseList.css';

export default function CourseList({ courses }) {
	return (
		<div className='course-list'>
			{courses.map((course) => (
				<Link to={`/courses/${course.id}`} key={course.id}>
					<h2>{course.name}</h2>
					<h3>{course.desc}</h3>
				</Link>
			
			))}
		</div>
	);
}
