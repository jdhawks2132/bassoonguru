import React from 'react';
import CourseList from '../../components/CourseList';
import { useExtrasQuery } from '../../store/guruAPI';

function ResourceDashboard() {
	const { data, error, isLoading, isFetching, isSuccess } = useExtrasQuery();
	return (
		<div>
			<h2 className='page-title'>Extra Resources</h2>
			{isLoading && <h2>...Loading</h2>}
			{isFetching && <h2>Fetching</h2>}
			{error && <h2>Error</h2>}
			{isSuccess && <CourseList courses={data} />}
		</div>
	);
}

export default ResourceDashboard;
