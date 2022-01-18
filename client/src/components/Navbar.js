import { Link } from 'react-router-dom';
import { useLogoutMutation, useCurrentUserQuery } from '../store/guruAPI';
import Logo from '../assets/BssnGuruGradient.png';

// styles & images
import './Navbar.css';

export default function Navbar() {
	const [logout] = useLogoutMutation();
	const { data: currentUser } = useCurrentUserQuery();
	const handleLogout = () => logout().then(() => window.location.reload());

	return (
		<nav className='navbar'>
			<ul>
				<li className='logo'>
					<img src={Logo} alt='logo' />
					<Link to='/'>
						<h1>BassoonGuru</h1>
					</Link>
				</li>

				{!currentUser && (
					<>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/signup'>Signup</Link>
						</li>
					</>
				)}

				{currentUser && (
					<>
						<li>{currentUser.admin && <Link to='/admin'>Admin</Link>}</li>
						<li>
							<Link to='/my-lessons'>My Lessons</Link>
						</li>
						<li>
							<Link to='/lessons'>Lessons</Link>
						</li>
						<li>
							<Link to='/extras'>Resources</Link>
						</li>
						<li>
							<button className='btn' onClick={handleLogout}>
								Logout
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
