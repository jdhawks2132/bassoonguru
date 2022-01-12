import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { useCourseQuery } from '../../store/guruAPI';

import './Curriculum.css';

function Curriculum() {
	const { id } = useParams();
	const { data: course } = useCourseQuery(id);

	return (
		<div className='curriculum-container'>
			<div className='course-card'>Course Card</div>
			<div className='comment-form'>Form</div>
			<div className='comments'>Comments</div>
			{course && (
				<div className='video'>
					<ReactPlayer id='embed-video' url={course.videos[0].url} />
				</div>
			)}
			<div className='video-links'>Video Links</div>
		</div>
	);
}

export default Curriculum;
