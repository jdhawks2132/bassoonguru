import { Link } from 'react-router-dom';

// styles
import './CourseList.css';

export default function CourseList({ courses }) {
	const check = courses[0]?.extra_items === undefined;

	return (
		<div className='course-list'>
			{check &&
				courses.map((course) => (
					<Link to={`/courses/${course.id}`} key={course.id}>
						<h2>{course.name}</h2>
						<h3>{course.desc}</h3>
					</Link>
				))}
			{!check &&
				courses.map((course) => (
					<Link to={`/resources/${course.id}`} key={course.id}>
						<h2>{course.name}</h2>
						<h3>{course.desc}</h3>
					</Link>
				))}
		</div>
	);
}
