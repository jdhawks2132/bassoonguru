import './Home.css';
import Logo from '../../assets/BssnGuru.png';
import { Link } from 'react-router-dom';
import { useCoursesQuery } from '../../store/guruAPI';
import CourseList from '../../components/CourseList';
import Contact from '../../components/Contact';

function Home() {
	const { data } = useCoursesQuery();

	return (
		<div className='home'>
			<div className='bg'>
				<h1 className='hero-test'>
					Helping Beginner Bassoonists find their Zen.
				</h1>
				<img src={Logo} alt='logo' className='hero-logo' />
			</div>
			<div className='entry-btns'>
				<Link to='/login'>
					<button className='btn-pink'>Login</button>
				</Link>
				<Link to='/signup'>
					<button className='btn-prpl'>Signup</button>
				</Link>
			</div>
			<h1 id='sample'>Sample Classes</h1>
			<div className='course-demo'>{data && <CourseList courses={data} />}</div>
			<Contact />
		</div>
	);
}

export default Home;
