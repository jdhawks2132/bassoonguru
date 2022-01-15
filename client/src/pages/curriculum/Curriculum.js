import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import CurriculumCard from '../../components/CurriculumCard';
import VideoList from '../../components/VideoList';
import { useCourseQuery, useCurrentUserQuery } from '../../store/guruAPI';

import './Curriculum.css';

function Curriculum() {
	const [currentVideo, setCurrentVideo] = useState(null);
	const { id } = useParams();
	const { data: course } = useCourseQuery(id);
	const { data: user } = useCurrentUserQuery();

	const handleVideo = (url) => {
		console.log(currentVideo);
		setCurrentVideo(url);
		console.log(currentVideo);
	};

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
						<div className='comment-list'>
							<ul>
								{course.comments.map((comment) => (
									<CommentList user={user} comment={comment} key={comment.id} />
								))}
							</ul>
						</div>
					</div>
					<div className='video'>
						<ReactPlayer
							id='embed-video'
							url={currentVideo ? currentVideo : course.videos[0].url}
						/>
					</div>

					<div className='video-links'>
						<h2>Video Links</h2>
						{course.videos.map((video) => (
							<VideoList
								video={video}
								key={video.id}
								handleVideo={handleVideo}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Curriculum;
