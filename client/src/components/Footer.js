import React from 'react';
import Logo from '../assets/HawksDesign.svg';

function Footer() {
	return (
		<div>
			<div className='hawks-logo'>
				<p>Joshua Hawks @2022</p>
				<img src={Logo} alt='logo' />
			</div>
		</div>
	);
}

export default Footer;
