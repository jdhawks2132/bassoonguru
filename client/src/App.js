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
import Course from './pages/detail/Course';
import Curriculum from './pages/curriculum/Curriculum';
import Home from './pages/home/Home';

function App() {
	const { data: currentUser } = useCurrentUserQuery();

	console.log(currentUser);

	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					<Navbar />
					<Switch>
						<Route exact path='/'>
							<Home />
							{currentUser && <Redirect to='/lessons' />}
						</Route>
						<Route path='/lessons'>
							{!currentUser && <Redirect to='/login' />}
							{currentUser && <Dashboard />}
						</Route>
						<Route path='/my-lessons'>
							{currentUser && <MyDashboard />}
							{!currentUser && <Redirect to='/login' />}
						</Route>
						<Route path='/courses/:id'>
							{currentUser && <Course />}
							{!currentUser && <Redirect to='/login' />}
						</Route>
						<Route path='/curriculum/:id'>
							{currentUser && <Curriculum />}
							{!currentUser && <Redirect to='/login' />}
						</Route>
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
