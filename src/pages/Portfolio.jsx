import React from 'react';
import SectionContainer from '../components/SectionContainer/SectionContainer';
import Navbar from '../components/Navbar/Navbar';
import SectionProfile from '../components/SectionProfile/SectionProfile';
import Headings from '../components/Headings/Headings';

function Portfolio() {
	let listMenu = [
		{ title: 'Home', href: '#', id: 1 },
		{ title: 'About me', href: '#', id: 2 },
		{ title: 'Skills', href: '#', id: 3 },
		{ title: 'Portfolio', href: '#', id: 4 },
		{ title: 'Contacts', href: '#', id: 5 },
	];

	return (
		<>
			<SectionContainer>
				<Navbar arr={listMenu} />
				<SectionProfile />
			</SectionContainer>
			<Headings />
		</>
	);
}

export default Portfolio;
