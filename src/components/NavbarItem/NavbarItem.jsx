import React from 'react';
import styles from './NavbarItem.module.scss';

function NavbarItem(props) {
	return (
		<li className={styles.NavbarItem}>
			<a href={props.menuItem.href}>{props.menuItem.title}</a>
		</li>
	);
}

export default NavbarItem;
