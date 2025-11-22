import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const nav = [
	{ href: '#about', label: 'О компании' },
	{ href: '#services', label: 'Услуги' },
	{ href: '#projects', label: 'Проекты' },
	{ href: '#testimonials', label: 'Отзывы' },
	{ href: '#contact', label: 'Контакты' }
];

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
	e.preventDefault();
	
	// Для #top просто скроллим наверх
	if (href === '#top') {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		return;
	}
	
	// Функция для поиска и прокрутки
	const scrollToElement = () => {
		const element = document.querySelector(href);
		
		if (!element) {
			// Fallback: используем стандартное поведение браузера
			window.location.href = href;
			return;
		}
		
		const headerOffset = 64;
		const elementTop = element.getBoundingClientRect().top;
		const currentScroll = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
		const targetScroll = currentScroll + elementTop - headerOffset;
		
		window.scrollTo({
			top: Math.max(0, targetScroll),
			behavior: 'smooth'
		});
	};
	
	// Пробуем сразу
	scrollToElement();
	
	// Если не сработало, пробуем через небольшую задержку (на случай, если DOM еще не готов)
	setTimeout(scrollToElement, 50);
};

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		if (mobileOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => { document.body.style.overflow = ''; };
	}, [mobileOpen]);

	// Закрытие при нажатии ESC
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && mobileOpen) {
				setMobileOpen(false);
			}
		};
		window.addEventListener('keydown', handleEscape);
		return () => window.removeEventListener('keydown', handleEscape);
	}, [mobileOpen]);

	// Закрытие при клике вне меню
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (!mobileOpen) return;
			
			const target = e.target as HTMLElement;
			// Проверяем, что клик был не на меню и не на бургер
			if (navRef.current && !navRef.current.contains(target)) {
				const burgerButton = target.closest('button[aria-label="Меню"]');
				if (!burgerButton) {
					setMobileOpen(false);
				}
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [mobileOpen]);

	const closeMenu = () => setMobileOpen(false);

	return (
		<>
			<header className={`${styles.header} ${scrolled ? styles.glass : ''}`}>
				<div className="container">
					<div className={styles.inner}>
						<a href="#top" onClick={(e) => smoothScroll(e, '#top')} className={styles.brand}>
							<div className={styles.logo} />
							<span className={styles.brandText}>ООО СПК</span>
						</a>
						
						{/* Десктопная навигация */}
						<nav className={styles.desktopNav}>
							{nav.map(item => (
								<a 
									key={item.href} 
									href={item.href} 
									className={styles.desktopNavLink}
									onClick={(e) => smoothScroll(e, item.href)}
								>
									{item.label}
								</a>
							))}
							<a 
								href="#contact" 
								className={styles.desktopCta}
								onClick={(e) => smoothScroll(e, '#contact')}
							>
								Связаться
							</a>
						</nav>

						{/* Бургер-кнопка (только мобильная) */}
						<button 
							className={`${styles.burger} ${mobileOpen ? styles.burgerHidden : ''}`}
							onClick={() => setMobileOpen(!mobileOpen)}
							aria-label="Меню"
							aria-expanded={mobileOpen}
						>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</header>

			{/* Мобильное меню (вне header для правильного z-index) */}
			<AnimatePresence>
				{mobileOpen && (
					<>
						{/* Overlay с затемнением */}
						<motion.div
							key="overlay"
							className={styles.overlay}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={closeMenu}
						/>
						{/* Меню */}
						<motion.nav
							key="nav"
							ref={navRef}
							className={styles.mobileNav}
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ 
								type: 'spring', 
								damping: 25, 
								stiffness: 200,
								duration: 0.4
							}}
						>
							<button 
								className={styles.closeButton}
								onClick={closeMenu}
								aria-label="Закрыть меню"
							>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</button>
							<div className={styles.navContent}>
								{nav.map((item, index) => (
									<motion.a
										key={item.href}
										href={item.href}
										className={styles.mobileNavLink}
										onClick={(e) => { 
											smoothScroll(e, item.href); 
											closeMenu(); 
										}}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ 
											delay: index * 0.1,
											duration: 0.3,
											ease: 'easeOut'
										}}
									>
										{item.label}
									</motion.a>
								))}
								<motion.a
									href="#contact"
									className={styles.mobileCta}
									onClick={(e) => { 
										smoothScroll(e, '#contact'); 
										closeMenu(); 
									}}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ 
										delay: nav.length * 0.1,
										duration: 0.3,
										ease: 'easeOut'
									}}
								>
									Связаться
								</motion.a>
							</div>
						</motion.nav>
					</>
				)}
			</AnimatePresence>
		</>
	);
}



