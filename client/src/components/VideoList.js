import React from 'react';

function VideoList({ video, setCurrentVideo }) {
	return (
		<div className='video-list'>
			<p>{video.title}</p>{' '}
			<button onclick={() => setCurrentVideo(video.url)}>Play</button>
		</div>
	);
}

export default VideoList;
