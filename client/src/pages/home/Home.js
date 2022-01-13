import './Home.css';
import BssnGuru from '../../assets/BssnGuru.png';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className='home'>
			<div className='bg'>
				<h1 className='hero-test'>
					Helping Beginner Bassoonists find their Zen.
				</h1>
				<img src={BssnGuru} alt='logo' className='hero-logo' />
			</div>
			<div className='entry-btns'>
				<Link to='/login'>
					<button className='btn-pink'>Login</button>
				</Link>
				<Link to='/signup'>
					<button className='btn-prpl'>Signup</button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
