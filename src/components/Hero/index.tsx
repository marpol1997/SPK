import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
	return (
		<section id="top" className={styles.section}>
			<div className={styles.bg}>
				<div className={styles.blobLarge} />
				<div className={styles.blobSmall} />
			</div>
			<div className="container">
				<div className={styles.grid}>
					<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className={styles.left}>
						<h1 className={styles.title}>
							Строительно Производственная Компания нового уровня
						</h1>
						<p className={styles.lead}>
							ООО СПК: проектирование, строительство, производство и монтаж. Сроки, качество и безопасность — без компромиссов.
						</p>
						<div className={styles.ctaRow}>
							<a href="#contact" className={styles.btnPrimary}>Получить предложение</a>
							<a href="#projects" className={styles.btnGhost}>Наши проекты</a>
						</div>
						<div className={styles.stats}>
							<div><div className={styles.statValue}>15+ лет</div>на рынке</div>
							<div><div className={styles.statValue}>120+ объектов</div>сданы</div>
							<div><div className={styles.statValue}>ISO</div>качество</div>
						</div>
					</motion.div>
					<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className={styles.right}>
						<div className={styles.card}>
							<img className={styles.cardFill} src="/public/main.png" alt="" />
						</div>
						<div className={styles.badge}>
							<div className={styles.badgeTitle}>Комплексные решения</div>
							<div className={styles.badgeText}>Проектирование → Производство → Монтаж</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}



