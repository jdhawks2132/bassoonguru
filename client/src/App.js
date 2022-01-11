import { useCoursesQuery, useCourseQuery } from './store/guruAPI';

function App() {
	const { data: courses } = useCoursesQuery();
	const { data: course } = useCourseQuery(1);

	console.log(courses, course);
	return (
		<div className='App'>
			<h1>Page Count:{courses.length}</h1>
		</div>
	);
}

export default App;
