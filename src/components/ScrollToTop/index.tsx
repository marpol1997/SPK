import { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setVisible(window.scrollY > 300);
		};
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (!visible) return null;

	return (
		<button 
			onClick={scrollToTop}
			className={styles.button}
			aria-label="Наверх"
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5 15L12 8L19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</button>
	);
}

