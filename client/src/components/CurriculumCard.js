import React from 'react';
import './CurriculumCard.css';

function CurriculumCard({ course }) {
	return (
		<div className='curriculum-card'>
			<h2>{course.name}</h2>
		</div>
	);
}

export default CurriculumCard;
