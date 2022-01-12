import CourseList from '../../components/CourseList';
import { useCurrentUserQuery } from '../../store/guruAPI';
// styles
import './Dashboard.css';

export default function MyDashboard() {
	const { data, error, isLoading, isFetching, isSuccess } =
		useCurrentUserQuery();

	return (
		<div>
			<h2 className='page-title'>My Lessons</h2>
			{isLoading && <h2>...Loading</h2>}
			{isFetching && <h2>Fetching</h2>}
			{error && <h2>Error</h2>}
			{isSuccess && <CourseList courses={data.courses} />}
		</div>
	);
}
