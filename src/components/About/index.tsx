import styles from './About.module.css';

export default function About() {
	return (
		<section id="about" className={styles.section}>
			<div className="container">
				<div className={styles.grid}>
					<div>
						<h2 className={styles.title}>О компании</h2>
						<p className={styles.text}>
							ООО СПК — команда инженеров, проектировщиков и производственников. Мы закрываем полный цикл: от идеи и проектной документации до производства, строительно‑монтажных работ и ввода объекта в эксплуатацию.
						</p>
						<ul className={styles.features}>
							<li className={styles.chip}>Собственное производство</li>
							<li className={styles.chip}>Контроль сроков и качества</li>
							<li className={styles.chip}>Сертифицированные материалы</li>
							<li className={styles.chip}>Опытные проектные команды</li>
						</ul>
					</div>
					<div className={styles.gallery}>
						<img src='/main.png' className={`${styles.ph} ${styles.phA}`}/>
						<img src='/main.png' className={`${styles.ph} ${styles.phA}`}/>
						<img src='/main.png' className={`${styles.ph} ${styles.phA}`}/>
						<img src='/main.png' className={`${styles.ph} ${styles.phA}`}/>
					</div>
				</div>
			</div>
		</section>
	);
}



