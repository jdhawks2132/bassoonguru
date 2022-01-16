import React from 'react';
import { useParams } from 'react-router-dom';
import { useExtraQuery } from '../../store/guruAPI';

function ResourceDetail() {
	const { id } = useParams();
	const { data: resource } = useExtraQuery(id);

	return (
		<div className='course-detail'>
			{resource && (
				<>
					<h2>{resource.name}</h2>
					<h3>{resource.desc}</h3>
					<br />
					<p>{resource.details}</p>
					<br />
					<h3> List of Resources:</h3>
					{resource.extra_items.map((item) => (
						<p key={item.id}>{item.detail}</p>
					))}
				</>
			)}
		</div>
	);
}

export default ResourceDetail;
