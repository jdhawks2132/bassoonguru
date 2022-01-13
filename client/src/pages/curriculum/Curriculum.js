import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import CurriculumCard from '../../components/CurriculumCard';
import { useCourseQuery, useCurrentUserQuery } from '../../store/guruAPI';

import './Curriculum.css';

function Curriculum() {
	const { id } = useParams();
	const { data: course } = useCourseQuery(id);
	const { data: user } = useCurrentUserQuery();

	console.log(course);

	return (
		<div className='curriculum-container'>
			{course && user && (
				<>
					<div className='course-card'>
						<CurriculumCard course={course} />
					</div>
					<div className='comment-form'>
						<CommentForm course={course} user={user} />
					</div>
					<div className='comments'>
						{course.comments.map((comment) => (
							<CommentList user={user} comment={comment} key={comment.id} />
						))}
					</div>
					<div className='video'>
						<ReactPlayer id='embed-video' url={course.videos[0].url} />
					</div>

					<div className='video-links'>Video Links</div>
				</>
			)}
		</div>
	);
}

export default Curriculum;
