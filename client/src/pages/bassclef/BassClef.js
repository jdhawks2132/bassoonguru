import React, { useState, useEffect } from 'react';

function BassClef() {
	const [cards, setCards] = useState(null);
	const [choice, setChoice] = useState(null);
	const [turns, setTurns] = useState(0);
	const [disabled, setDisabled] = useState(false);

	const cardImages = [
		{ id: 1, name: 'G', src: '/client/public/img/lowG.png', matched: false },
		{ id: 2, name: 'A', src: '/client/public/img/B.png', matched: false },
		{ id: 3, name: 'B', src: '/client/public/img/B.png', matched: false },
		{ id: 4, name: 'C', src: '/client/public/img/C.png', matched: false },
		{ id: 5, name: 'D', src: '/client/public/img/D.png', matched: false },
		{ id: 6, name: 'E', src: '/client/public/img/E.png', matched: false },
		{ id: 7, name: 'F', src: '/client/public/img/F.png', matched: false },
		{ id: 8, name: 'G', src: '/client/public/img/highG.png', matched: false },
		{ id: 9, name: 'A', src: '/client/public/img/highA.png', matched: false },
	];

	const shuffleCards = () => {
		const shuffledCards = cardImages.sort(() => Math.random() - 0.5);

		setChoice(null);
		setCards(shuffledCards);
		setTurns(0);
	};

	useEffect(() => {
		shuffleCards();
	}, []);

	console.log(cards);
	return (
		<div>
			<div className='game-header'>
				<h1>Bass Clef Game</h1>
				<p>Number of Turns: {turns}</p>
			</div>

			<div className='game-board'>
				<button>Reset</button>
			</div>
			<div>
				<button value='A'>A</button>
				<button value='B'>B</button>
				<button value='C'>C</button>
				<button value='D'>D</button>
				<button value='E'>E</button>
				<button value='F'>F</button>
				<button value='G'>G</button>
			</div>
		</div>
	);
}

export default BassClef;
