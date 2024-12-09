import React from 'react';
import styles from './SectionProfile.module.scss';
import imageProfile from '../../image/profile_img.png';

function SectionProfile() {
	return (
		<div>
			<div className={styles.title__block}>
				<h2 className={styles.title__name}>Denis Novik</h2>
				<h2 className={styles.title__work}>UX | UI designer 24 years old, Minsk</h2>
				<h2 className={styles.title__lg}>RU | ENG</h2>
			</div>
			<img className={styles.title__image} src={imageProfile} alt='prof' />
		</div>
	);
}

export default SectionProfile;
