import { useEffect, useState } from 'react';
import styles from './Contact.module.css';
import { submitForm, type FormData } from '../../services/formSubmit';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
	const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', message: '' });
	const [status, setStatus] = useState<FormStatus>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		if (status === 'success') {
			const timer = setTimeout(() => {
				setStatus('idle');
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [status]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
		if (status === 'error') {
			setStatus('idle');
			setErrorMessage('');
		}
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('loading');
		setErrorMessage('');

		try {
			// Подготовка данных для отправки
			const formData: FormData = {
				name: form.name.trim(),
				phone: form.phone.trim(),
				email: form.email.trim(),
				message: form.message.trim(),
			};

			// Отправка через Telegram Bot
			const result = await submitForm(formData);

			if (result.success) {
				setStatus('success');
				setForm({ name: '', phone: '', email: '', message: '' });
			} else {
				throw new Error(result.message || 'Неизвестная ошибка');
			}
		} catch (error: any) {
			// Обработка ошибок
			console.error('Ошибка отправки заявки:', error);
			setStatus('error');
			
			let errorMsg = 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.';
			
			if (error?.message) {
				errorMsg = error.message;
			}
			
			setErrorMessage(errorMsg);
		}
	};

	return (
		<section id="contact" className={styles.section}>
			<div className="container">
				<div className={styles.grid}>
					<div>
						<h2 className={styles.title}>Связаться с нами</h2>
						<p className={styles.text}>Оставьте заявку — подготовим расчёт и предложим оптимальное решение.</p>
						<div className={styles.info}>
							<div>Тел.: +7 (978) 287-05-42</div>
							<div>E-mail: info@spk.ru</div>
							<div>Адрес: г.Москва наб. Деребеневская,д.11</div>
						</div>
					</div>
					<form onSubmit={onSubmit} className={styles.card}>
						<div className={styles.row}>
							<input 
								className={styles.input} 
								placeholder="Имя" 
								name="name" 
								value={form.name} 
								onChange={onChange} 
								required 
								disabled={status === 'loading'}
							/>
							<input 
								className={styles.input} 
								placeholder="Телефон" 
								name="phone" 
								value={form.phone} 
								onChange={onChange} 
								required 
								disabled={status === 'loading'}
							/>
							<input 
								className={styles.input} 
								type="email" 
								placeholder="E-mail" 
								name="email" 
								value={form.email} 
								onChange={onChange} 
								disabled={status === 'loading'}
							/>
							<textarea 
								className={styles.textarea} 
								placeholder="Опишите задачу" 
								name="message" 
								value={form.message} 
								onChange={onChange} 
								disabled={status === 'loading'}
							/>
						</div>
						<button 
							type="submit" 
							className={styles.submit} 
							disabled={status === 'loading'}
						>
							{status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
						</button>
						{status === 'success' && (
							<div className={styles.sent}>
								Заявка отправлена. Мы свяжемся с вами в ближайшее время.
							</div>
						)}
						{status === 'error' && (
							<div className={styles.error}>
								{errorMessage || 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.'}
							</div>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}



