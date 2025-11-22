import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.brand}>
						<div className={styles.logo} />
						<span className={styles.brandText}>ООО СПК</span>
					</div>
					<div>© {new Date().getFullYear()} ООО «СПК». Все права защищены.</div>
				</div>
			</div>
		</footer>
	);
}



