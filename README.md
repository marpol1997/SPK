## СПК — Одностраничный сайт (React + TypeScript + Vite)

### Требования
- Node.js 18+

### Установка
```bash
npm install
```

### Разработка
```bash
npm run dev
```
Откроется `http://localhost:5173`.

### Сборка
```bash
npm run build
npm run preview
```

### Стек
- React 18, TypeScript, Vite
- CSS Modules (модульная стилизация)
- Framer Motion (анимации)
- Swiper.js (карусели и галереи)
- Telegram Bot API (отправка заявок)

### Структура
- `src/components` — секции: `Header`, `Hero`, `About`, `Services`, `Projects`, `Testimonials`, `Contact`, `Footer`
- `src/styles/index.css` — Tailwind и утилитарные классы

### Настройка бренда
Цвета и шрифты — в `src/styles/index.css` (CSS переменные).

### Настройка отправки заявок

Форма обратной связи отправляет заявки через **Telegram Bot**.

#### Быстрый старт

1. Создайте бота через @BotFather в Telegram
2. Получите токен бота и ваш Chat ID
3. Создайте файл `.env` в корне проекта:
   ```env
   VITE_TELEGRAM_BOT_TOKEN=ваш_токен_бота
   VITE_TELEGRAM_CHAT_ID=ваш_chat_id
   VITE_TELEGRAM_ENABLED=true
   ```
4. Перезапустите dev-сервер

Подробные инструкции: [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md)


