// Конфигурация Telegram Bot для отправки заявок
// 
// Инструкция по настройке:
// 1. Откройте Telegram и найдите @BotFather
// 2. Отправьте команду /newbot
// 3. Следуйте инструкциям и создайте бота
// 4. Скопируйте токен бота (выглядит как: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz)
// 5. Найдите ваш Chat ID:
//    - Откройте @userinfobot в Telegram
//    - Отправьте любое сообщение
//    - Скопируйте ваш Chat ID (число, например: 123456789)
// 6. Заполните значения в .env файле (БЕЗ КАВЫЧЕК!)

// Функция для очистки значения от кавычек и пробелов
const cleanEnvValue = (value: string | undefined): string => {
	if (!value) return '';
	// Убираем кавычки (одинарные и двойные) и пробелы
	return value.trim().replace(/^["']|["']$/g, '').trim();
};

export const telegramConfig = {
	// Токен бота от @BotFather
	botToken: cleanEnvValue(import.meta.env.VITE_TELEGRAM_BOT_TOKEN) || 'YOUR_BOT_TOKEN',
	
	// Ваш Chat ID (можно получить через @userinfobot)
	chatId: cleanEnvValue(import.meta.env.VITE_TELEGRAM_CHAT_ID) || 'YOUR_CHAT_ID',
	
	// Включить отправку в Telegram
	enabled: cleanEnvValue(import.meta.env.VITE_TELEGRAM_ENABLED) === 'true',
};


