import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {
	useCoursesQuery,
	useCourseQuery,
	useCurrentUserQuery,
} from './store/guruAPI';

//styles
import './App.css';

import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import MyDashboard from './pages/dashboard/MyDashboard';

function App() {
	const { data: courses } = useCoursesQuery();
	const { data: course } = useCourseQuery(1);
	const { data: currentUser } = useCurrentUserQuery();

	console.log(courses, course, currentUser);

	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					<Navbar />
					<Switch>
						<Route path='/lessons'>
							{!currentUser && <Redirect to='/login' />}
							{currentUser && <Dashboard />}
						</Route>
						<Route path='/my-lessons'>{currentUser && <MyDashboard />}</Route>
						<Route path='/login'>
							{!currentUser && <Login />}
							{currentUser && <Redirect to='/lessons' />}
						</Route>
						<Route path='/signup'>
							{!currentUser && <Signup />}
							{currentUser && <Redirect to='/lessons' />}
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
