import './VideoList.css';

function VideoList({ video, handleVideo }) {
	const handleClick = (e) => {
		handleVideo(e.target.value);
	};

	return (
		<ul className='video-list'>
			<li>
				<p>{video.title}</p>
			</li>
			<li>
				<button
					className={'btn-mini-blue'}
					onClick={handleClick}
					value={video.url}
				>
					Play
				</button>
			</li>
		</ul>
	);
}

export default VideoList;
