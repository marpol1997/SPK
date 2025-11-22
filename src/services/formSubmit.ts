// Сервис для отправки форм через Telegram Bot

import { telegramConfig } from '../config/telegram';

export type FormData = {
	name: string;
	phone: string;
	email: string;
	message: string;
};

type SubmitResult = {
	success: boolean;
	message: string;
};

// Отправка через Telegram Bot
export async function submitForm(data: FormData): Promise<SubmitResult> {
	// Валидация конфигурации
	if (!telegramConfig.enabled) {
		throw new Error('Telegram отключен. Установите VITE_TELEGRAM_ENABLED=true в .env');
	}

	if (!telegramConfig.botToken || telegramConfig.botToken === 'YOUR_BOT_TOKEN') {
		throw new Error('Токен бота не настроен. Проверьте VITE_TELEGRAM_BOT_TOKEN в .env (БЕЗ КАВЫЧЕК!)');
	}

	if (!telegramConfig.chatId || telegramConfig.chatId === 'YOUR_CHAT_ID') {
		throw new Error('Chat ID не настроен. Проверьте VITE_TELEGRAM_CHAT_ID в .env (БЕЗ КАВЫЧЕК!)');
	}

	const botToken = telegramConfig.botToken.trim();
	let chatId: string | number = telegramConfig.chatId.trim();

	// Дополнительная валидация формата токена
	if (!/^\d+:[A-Za-z0-9_-]+$/.test(botToken)) {
		throw new Error('Неверный формат токена бота. Токен должен быть в формате: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz');
	}

	// Конвертируем Chat ID в число, если это возможно (Telegram API принимает и число, и строку)
	// Для групп Chat ID отрицательный, поэтому проверяем на число с минусом
	const chatIdNum = Number(chatId);
	if (!isNaN(chatIdNum)) {
		chatId = chatIdNum;
	}

	// Формируем сообщение
	const message = `
🔔 <b>Новая заявка с сайта СПК</b>

👤 <b>Имя:</b> ${data.name}
📞 <b>Телефон:</b> ${data.phone}
📧 <b>Email:</b> ${data.email || 'не указан'}

💬 <b>Сообщение:</b>
${data.message || 'не указано'}
	`.trim();

	try {
		const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat_id: chatId,
				text: message,
				parse_mode: 'HTML',
			}),
		});

		const result = await response.json();

		// Логируем полный ответ для отладки
		console.log('Telegram API Response:', result);

		if (result.ok) {
			return {
				success: true,
				message: 'Заявка успешно отправлена!',
			};
		} else {
			// Детальная обработка ошибок Telegram API
			let errorMsg = 'Ошибка отправки в Telegram';
			
			// Показываем реальное описание ошибки от Telegram
			if (result.description) {
				errorMsg = `Telegram API: ${result.description}`;
				
				// Дополнительные подсказки для частых ошибок
				if (result.error_code === 401) {
					errorMsg += ' (Неверный токен бота. Проверьте VITE_TELEGRAM_BOT_TOKEN в .env)';
				} else if (result.error_code === 400) {
					// Для ошибки 400 может быть несколько причин
					if (result.description.includes('chat not found') || result.description.includes('chat_id')) {
						errorMsg += ' (Неверный Chat ID. Убедитесь, что вы отправили хотя бы одно сообщение боту, или что бот добавлен в группу)';
					} else {
						errorMsg += ' (Проверьте формат данных)';
					}
				} else if (result.error_code === 403) {
					errorMsg += ' (Бот заблокирован пользователем или не добавлен в группу)';
				}
			} else if (result.error_code === 401) {
				errorMsg = 'Неверный токен бота. Проверьте VITE_TELEGRAM_BOT_TOKEN в .env';
			} else if (result.error_code === 400) {
				errorMsg = 'Неверный Chat ID или формат данных. Проверьте VITE_TELEGRAM_CHAT_ID в .env. Убедитесь, что вы отправили хотя бы одно сообщение боту.';
			}
			
			throw new Error(errorMsg);
		}
	} catch (error: any) {
		console.error('Ошибка отправки в Telegram:', error);
		
		if (error.message) {
			throw error;
		}
		
		throw new Error(error.message || 'Не удалось отправить заявку через Telegram. Проверьте настройки в .env');
	}
}
