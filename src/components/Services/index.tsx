import styles from './Services.module.css';

const services = [
	{ title: 'Проектирование', desc: 'АР, КР, ИОС, рабочая документация, BIM‑модели' },
	{ title: 'Строительно‑монтажные работы', desc: 'Генподряд, СМР, инженерные сети, благоустройство' },
	{ title: 'Производство', desc: 'Металлоконструкции, сэндвич‑пакеты, нестандартные узлы' },
	{ title: 'Технадзор и сопровождение', desc: 'Авторский надзор, ПНР, ввод в эксплуатацию' }
];

export default function Services() {
	return (
		<section id="services" className={styles.section}>
			<div className="container">
				<h2 className={styles.title}>Услуги</h2>
				<div className={styles.grid}>
					{services.map(s => (
						<div key={s.title} className={styles.card}>
							<div className={styles.cardTitle}>{s.title}</div>
							<div className={styles.cardDesc}>{s.desc}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}



