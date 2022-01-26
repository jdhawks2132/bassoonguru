import React, { useState, useEffect } from 'react';
import SingleCard from './SingleCard';

import './BassClef.css';

function BassClef() {
	const [cards, setCards] = useState(null);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [turns, setTurns] = useState(0);
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState(null);
	const [answer, setAnswer] = useState(null);

	const cardImages = [
		{ id: 1, name: 'G', src: '/img/lowG.png', matched: false },
		{ id: 2, name: 'A', src: '/img/lowA.png', matched: false },
		{ id: 3, name: 'B', src: '/img/B.png', matched: false },
		{ id: 4, name: 'C', src: '/img/C.png', matched: false },
		{ id: 5, name: 'D', src: '/img/D.png', matched: false },
		{ id: 6, name: 'E', src: '/img/E.png', matched: false },
		{ id: 7, name: 'F', src: '/img/F.png', matched: false },
		{ id: 8, name: 'G', src: '/img/highG.png', matched: false },
		{ id: 9, name: 'A', src: '/img/highA.png', matched: false },
	];

	const shuffleCards = () => {
		const shuffledCards = cardImages.sort(() => Math.random() - 0.5);

		setChoiceOne(null);
		setChoiceTwo(null);
		setCards(shuffledCards);
		setTurns(0);
		setAnswer(null);
	};

	useEffect(() => {
		shuffleCards();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChoice = (card) => {
		setChoiceOne(card);
		setAnswer(null);
		setError(false);
	};

	const handleChoiceTwo = (e) => {
		if (choiceOne) {
			setChoiceTwo(e.target.value);
			setAnswer(null);
		} else {
			setAnswer(null);
			setError(true);
			throw new Error('Click on a Card First');
		}
	};


	const cardList = cards?.map((card) => (
		<SingleCard
			key={card.id}
			card={card}
			handleChoice={handleChoice}
			flipped={card === choiceOne || card === choiceTwo || card.matched}
			disabled={disabled}
		/>
	));
	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);

			if (choiceOne.name === choiceTwo) {
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.src === choiceOne.src) {
							setAnswer(true);
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
				resetTurn();
			} else {
				setAnswer(false);
				setTimeout(() => resetTurn(), 500);
			}
		}
	}, [choiceOne, choiceTwo]);

	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
		setDisabled(false);
	};
	return (
		<div className='game'>
			<div className='game-header'>
				<h1>Practice Bass Clef Note Naming!</h1>
				<p>click on a card and then choose the note name below:</p>
				<button className='game-btn' onClick={shuffleCards}>
					New Game
				</button>
				<p>Number of Turns: {turns}</p>
			</div>
			<div className='game-board'>{cardList}</div>
			<div>
				{answer !== null && <>{answer ? <span>✅</span> : <span>❌ </span>}</>}
				<button className='game-btn' onClick={handleChoiceTwo} value='A'>
					A
				</button>
				<button className='game-btn' onClick={handleChoiceTwo} value='B'>
					B
				</button>
				<button className='game-btn' onClick={handleChoiceTwo} value='C'>
					C
				</button>
				<button className='game-btn' onClick={handleChoiceTwo} value='D'>
					D
				</button>
				<button className='game-btn' onClick={handleChoiceTwo} value='E'>
					E
				</button>
				<button className='game-btn' onClick={handleChoiceTwo} value='F'>
					F
				</button>
				<button className='game-btn' onClick={handleChoiceTwo} value='G'>
					G
				</button>
				{error && <p>choose a card first!</p>}
			</div>
		</div>
	);
}

export default BassClef;
