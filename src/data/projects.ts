import { Project } from '../types/project';

export const projects: Project[] = [
	{
		id: 1,
		title: 'Промышленный объект №1',
		category: 'Строительство и монтаж',
		description: 'Комплексное строительство производственного цеха с полным циклом работ: от проектирования до ввода в эксплуатацию. Объект включает административные помещения, складские зоны и производственные линии.',
		manager: 'Иванов Иван Иванович',
		managerRole: 'Главный инженер проекта',
		images: [
			'https://xn--b1agapfwapgcl.xn--p1ai/wp-content/uploads/2024/07/img_3014-jpeg.webp',
			'https://migstpr.ru/wp-content/uploads/2025/08/6afb7c68-7ae6-4e97-943d-9c8a4b36afe9-scaled.jpeg'
		],
		year: 2023,
		location: 'Московская область',
		area: '5 200 м²',
		status: 'completed',
		features: ['Проектирование', 'Строительство', 'Монтаж оборудования', 'Ввод в эксплуатацию']
	},
	{
		id: 2,
		title: 'Промышленный объект №2',
		category: 'Реконструкция',
		description: 'Масштабная реконструкция существующего производственного комплекса с модернизацией инженерных систем и обновлением технологического оборудования.',
		manager: 'Петров Петр Петрович',
		managerRole: 'Руководитель проекта',
		images: [
			'https://images.unsplash.com/photo-1504307651254-35680f088df8?w=1200',
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
			'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200'
		],
		year: 2024,
		location: 'Ленинградская область',
		area: '3 800 м²',
		status: 'in-progress',
		features: ['Реконструкция', 'Модернизация', 'Технадзор']
	},
	{
		id: 3,
		title: 'Промышленный объект №3',
		category: 'Строительство и монтаж',
		description: 'Строительство нового логистического центра с автоматизированными системами складирования и современной инфраструктурой.',
		manager: 'Сидоров Сидор Сидорович',
		managerRole: 'Главный инженер',
		images: [
			'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
			'https://images.unsplash.com/photo-1504307651254-35680f088df8?w=1200',
			'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200'
		],
		year: 2024,
		location: 'Калужская область',
		area: '8 500 м²',
		status: 'completed',
		features: ['Проектирование', 'Строительство', 'Автоматизация']
	},
	{
		id: 4,
		title: 'Промышленный объект №4',
		category: 'Производство и монтаж',
		description: 'Изготовление и монтаж металлоконструкций для производственного комплекса. Полный цикл от проектирования до установки.',
		manager: 'Кузнецов Кузьма Кузьмич',
		managerRole: 'Руководитель производства',
		images: [
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
			'https://images.unsplash.com/photo-1504307651254-35680f088df8?w=1200'
		],
		year: 2023,
		location: 'Тульская область',
		area: '2 100 м²',
		status: 'completed',
		features: ['Производство', 'Монтаж', 'Контроль качества']
	},
	{
		id: 5,
		title: 'Промышленный объект №5',
		category: 'Строительство и монтаж',
		description: 'Строительство административно-бытового корпуса с современными офисными помещениями и зонами отдыха для персонала.',
		manager: 'Смирнова Мария Ивановна',
		managerRole: 'Проектный менеджер',
		images: [
			'https://images.unsplash.com/photo-1504307651254-35680f088df8?w=1200',
			'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
			'https://images.unsplash.com/photo-1504307651254-35680f088df8?w=1200'
		],
		year: 2024,
		location: 'Московская область',
		area: '1 800 м²',
		status: 'in-progress',
		features: ['Проектирование', 'Строительство', 'Отделочные работы']
	},
	{
		id: 6,
		title: 'Промышленный объект №6',
		category: 'Технадзор и сопровождение',
		description: 'Комплексное техническое сопровождение строительства производственного объекта с контролем качества на всех этапах.',
		manager: 'Орлов Алексей Викторович',
		managerRole: 'Главный инженер технадзора',
		images: [
			'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
			'https://images.unsplash.com/photo-1504307651254-35680f088df8?w=1200'
		],
		year: 2024,
		location: 'Воронежская область',
		area: '4 500 м²',
		status: 'in-progress',
		features: ['Технадзор', 'Контроль качества', 'Сопровождение']
	}
];


