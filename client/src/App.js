import {
	useCoursesQuery,
	useCourseQuery,
	useLoginMutation,
	useCurrentUserQuery,
	useLogoutMutation,
} from './store/guruAPI';

import { useEffect } from 'react';

function App() {
	const { data: courses } = useCoursesQuery();
	const { data: course } = useCourseQuery(1);
	const [login, { data: loginData }] = useLoginMutation();
	const { data: currentUser } = useCurrentUserQuery();

	useEffect(() => {
		login({
			username: 'josh',
			password: '123',
		});
	}, []);

	console.log(courses, course, loginData, currentUser);

	return (
		<div className='App'>{courses && <h1>Page Count:{courses.length}</h1>}</div>
	);
}

export default App;
