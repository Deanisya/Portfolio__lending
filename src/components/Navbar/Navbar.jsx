import React from 'react';
import styles from './Navbar.module.scss';
import NavbarItem from '../NavbarItem/NavbarItem';

function Navbar(props) {
	return (
		<nav>
			<ul className={styles.Navbar}>
				{props.arr.map(item => (
					<NavbarItem key={item.id} menuItem={item} />
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
