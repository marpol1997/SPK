import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './ProjectsModal.module.css';
import { Project } from '../../types/project';

type ProjectsModalProps = {
	project: Project | null;
	onClose: () => void;
};

export default function ProjectsModal({ project, onClose }: ProjectsModalProps) {
	const [swiper, setSwiper] = useState<SwiperType | null>(null);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
		if (!project) return;
		if (direction === 'prev') {
			setLightboxIndex(prev => (prev > 0 ? prev - 1 : project.images.length - 1));
		} else {
			setLightboxIndex(prev => (prev < project.images.length - 1 ? prev + 1 : 0));
		}
	}, [project]);

	useEffect(() => {
		if (project) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [project]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				if (lightboxOpen) {
					setLightboxOpen(false);
				} else if (project) {
					onClose();
				}
			}
			if (lightboxOpen && project) {
				if (e.key === 'ArrowLeft') {
					navigateLightbox('prev');
				} else if (e.key === 'ArrowRight') {
					navigateLightbox('next');
				}
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [project, lightboxOpen, onClose, navigateLightbox]);

	if (!project) return null;

	const openLightbox = (index: number) => {
		setLightboxIndex(index);
		setLightboxOpen(true);
	};

	const getStatusText = () => {
		switch (project.status) {
			case 'completed': return 'Завершен';
			case 'in-progress': return 'В работе';
			case 'planned': return 'Запланирован';
			default: return '';
		}
	};

	const getStatusClass = () => {
		switch (project.status) {
			case 'completed': return styles.statusCompleted;
			case 'in-progress': return styles.statusInProgress;
			case 'planned': return styles.statusPlanned;
			default: return '';
		}
	};

	return (
		<>
			<AnimatePresence>
				{project && (
					<motion.div
						className={styles.overlay}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={(e) => {
							if (e.target === e.currentTarget) onClose();
						}}
					>
						<motion.div
							className={styles.modal}
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={(e) => e.stopPropagation()}
						>
							<button
								className={styles.closeButton}
								onClick={onClose}
								aria-label="Закрыть"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</button>

							<div className={styles.content}>
								<div className={styles.gallerySection}>
									<div className={styles.galleryWrapper}>
										<Swiper
											modules={[Navigation, Pagination, Keyboard]}
											spaceBetween={0}
											slidesPerView={1}
											navigation={{
												prevEl: '.swiper-button-prev-custom',
												nextEl: '.swiper-button-next-custom',
											}}
											pagination={{
												clickable: true,
												bulletClass: styles.paginationBullet,
												bulletActiveClass: styles.paginationBulletActive,
											}}
											keyboard={{ enabled: true }}
											touchEventsTarget="container"
											touchRatio={1}
											onSwiper={setSwiper}
											className={styles.swiper}
										>
											{project.images.map((image, index) => (
												<SwiperSlide key={index}>
													<img
														src={image}
														alt={`${project.title} - фото ${index + 1}`}
														className={styles.image}
														onClick={() => openLightbox(index)}
														loading="lazy"
													/>
												</SwiperSlide>
											))}
										</Swiper>
									</div>

									{project.images.length > 1 && (
										<div className={styles.navigation}>
											<button
												className={`${styles.navButton} swiper-button-prev-custom`}
												aria-label="Предыдущее"
											>
												<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</button>
											<button
												className={`${styles.navButton} swiper-button-next-custom`}
												aria-label="Следующее"
											>
												<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</button>
										</div>
									)}
								</div>

								<div className={styles.infoSection}>
									<div className={styles.header}>
										<div className={styles.category}>{project.category}</div>
										<h3 className={styles.title}>{project.title}</h3>
									</div>

									<p className={styles.description}>{project.description}</p>

									<div className={styles.details}>
										{project.manager && (
											<div className={styles.detailRow}>
												<svg className={styles.detailIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
												<div className={styles.detailContent}>
													<div className={styles.detailLabel}>Руководитель проекта</div>
													<div className={styles.detailValue}>
														{project.manager}
														{project.managerRole && <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 'normal', marginTop: '0.25rem' }}>{project.managerRole}</span>}
													</div>
												</div>
											</div>
										)}

										{project.year && (
											<div className={styles.detailRow}>
												<svg className={styles.detailIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
												<div className={styles.detailContent}>
													<div className={styles.detailLabel}>Год</div>
													<div className={styles.detailValue}>{project.year}</div>
												</div>
											</div>
										)}

										{project.location && (
											<div className={styles.detailRow}>
												<svg className={styles.detailIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
												<div className={styles.detailContent}>
													<div className={styles.detailLabel}>Местоположение</div>
													<div className={styles.detailValue}>{project.location}</div>
												</div>
											</div>
										)}

										{project.area && (
											<div className={styles.detailRow}>
												<svg className={styles.detailIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
												<div className={styles.detailContent}>
													<div className={styles.detailLabel}>Площадь</div>
													<div className={styles.detailValue}>{project.area}</div>
												</div>
											</div>
										)}

										{project.status && (
											<div className={styles.detailRow}>
												<svg className={styles.detailIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
												<div className={styles.detailContent}>
													<div className={styles.detailLabel}>Статус</div>
													<div className={`${styles.status} ${getStatusClass()}`}>
														{getStatusText()}
													</div>
												</div>
											</div>
										)}
									</div>

									{project.features && project.features.length > 0 && (
										<div>
											<div className={styles.detailLabel} style={{ marginBottom: '0.75rem' }}>Особенности проекта</div>
											<div className={styles.features}>
												{project.features.map((feature, index) => (
													<span key={index} className={styles.featureTag}>{feature}</span>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Lightbox для полноэкранного просмотра */}
			<AnimatePresence>
				{lightboxOpen && (
					<motion.div
						className={styles.lightbox}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={() => setLightboxOpen(false)}
					>
						<motion.img
							src={project.images[lightboxIndex]}
							alt={`${project.title} - фото ${lightboxIndex + 1}`}
							className={styles.lightboxImage}
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
						/>
						<button
							className={styles.lightboxClose}
							onClick={() => setLightboxOpen(false)}
							aria-label="Закрыть"
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
						{project.images.length > 1 && (
							<>
								<button
									className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
									onClick={(e) => {
										e.stopPropagation();
										navigateLightbox('prev');
									}}
									aria-label="Предыдущее"
								>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</button>
								<button
									className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
									onClick={(e) => {
										e.stopPropagation();
										navigateLightbox('next');
									}}
									aria-label="Следующее"
								>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</button>
							</>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

