import React from 'react';

import './VideoList.css';

function VideoList({ video, handleVideo }) {
	return (
		<div className='video-list'>
			<p>{video.title}</p>{' '}
			<button className='btn-mini-blue' onclick={handleVideo(video.url)}>
				Play
			</button>
		</div>
	);
}

export default VideoList;
