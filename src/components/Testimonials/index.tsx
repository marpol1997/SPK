import styles from './Testimonials.module.css';

const items = [
	{ name: 'Иван Петров', role: 'ГК Заказчик', text: 'Работы выполнены в срок и с высоким качеством. Команда оперативно реагировала на изменения и держала нас в курсе каждого этапа.' },
	{ name: 'Мария Смирнова', role: 'Производственная компания', text: 'Профессиональный подход на всех стадиях: от проекта до ввода. Рекомендуем СПК как надежного партнера.' },
	{ name: 'Алексей Орлов', role: 'Девелопер', text: 'Отличная коммуникация и инженерная экспертиза. Умеют работать со сложными узлами и нестандартными решениями.' }
];

export default function Testimonials() {
	return (
		<section id="testimonials" className={styles.section}>
			<div className="container">
				<h2 className={styles.title}>Отзывы</h2>
				<div className={styles.grid}>
					{items.map(t => (
						<div key={t.name} className={styles.card}>
							<p className={styles.text}>“{t.text}”</p>
							<div className={styles.author}>{t.name} • {t.role}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}



