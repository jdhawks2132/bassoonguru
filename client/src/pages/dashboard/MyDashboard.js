import CourseList from '../../components/CourseList';
import { useCurrentUserQuery } from '../../store/guruAPI';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/BssnGuruGradient.png';
// styles
import './Dashboard.css';

export default function MyDashboard() {
	const { data, error, isLoading, isFetching, isSuccess } =
		useCurrentUserQuery();

	const history = useHistory();

	const enrollmentCheck = data?.courses.length > 0;

	return (
		<div>
			<h2 className='page-title'>My Lessons</h2>
			{isLoading && <h2>...Loading</h2>}
			{isFetching && <h2>Fetching</h2>}
			{error && <h2>Error</h2>}
			{isSuccess && enrollmentCheck && <CourseList courses={data.courses} />}
			{!enrollmentCheck && (
				<div className='enrollment-check'>
					<img src={Logo} alt='logo' />
					<h1>Please Enroll in a Lesson</h1>
					<button className='btn' onClick={() => history.push('/lessons')}>
						Click for Lessons List
					</button>
				</div>
			)}
		</div>
	);
}
