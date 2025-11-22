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
							<li className={styles.chip}>Собственная техника</li>
							<li className={styles.chip}>Контроль сроков и качества</li>
							<li className={styles.chip}>Сертифицированные материалы</li>
							<li className={styles.chip}>Опытные проектные команды</li>
						</ul>
					</div>
					<div className={styles.gallery}>
						<img src='https://i.pinimg.com/736x/4c/16/d1/4c16d1f7cb75a38d86f6566de75e8059.jpg' className={`${styles.ph} ${styles.phA}`}/>
						<img src='https://avatars.mds.yandex.net/i?id=6a54886dea525586f65e3ced020c1ba1_l-4552383-images-thumbs&n=13' className={`${styles.ph} ${styles.phA}`}/>
						<img src='https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66905e8106a4f30e4d21695d_66906024a0b532749cee5dd4/scale_1200' className={`${styles.ph} ${styles.phA}`}/>
						<img src='https://avatars.mds.yandex.net/i?id=06f54cd8259bfb163dd8dbb410b45dc462c26a21-3725524-images-thumbs&n=13' className={`${styles.ph} ${styles.phA}`}/>
					</div>
				</div>
			</div>
		</section>
	);
}



