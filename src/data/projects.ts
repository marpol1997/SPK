import { Project } from '../types/project';

export const projects: Project[] = [
	{
		id: 1,
		title: 'Музеынй комплекс Херсонес',
		category: 'Строительство',
		description: 'В рамках федеральной программы наша компания внесла вклад в создание нового музейного комплекса. Мы помогли построить пространство, где античная история встречается с технологиями будущего.',
		manager: 'Соснин Евгений Викторович',
		managerRole: 'Главный инженер проекта',
		images: [
			'https://cdnn1.img.crimea.ria.ru/img/07e7/0c/0a/1133435316_0:0:1280:720_2072x0_60_0_0_58afc86430b81ebc2d2cd72fd5e787bf.jpg',
			'https://primechaniya.ru/storage/images/U06duLtJpZSLsSe0dKh0qHVYveyxER2B56stxCq5.jpeg',
			'https://sev.gov.ru/files/iblock/483/UGnmTWV_rpI.jpg',
			'https://crimea24tv.ru/wp-content/uploads/2024/02/photo_2024-02-05_16-04-25.jpg'
		],
		year: 2021,
		location: 'город-герой Севастополь',
		area: '22.4 га',
		status: 'completed',
		features: ['Проектирование', 'Строительство', 'Монтаж оборудования', 'Ввод в эксплуатацию']
	},
	{
		id: 2,
		title: 'Славяносербский водовод',
		category: 'Реконструкция',
		description: 'Выполнены все этапы: от проектирования трассы и земляных работ до прокладки труб, монтажа насосной станции и ввода в эксплуатацию. Применены современные материалы и технологии для гарантии долговечности и эффективности системы.',
		manager: 'Соснин Евгений Викторович ',
		managerRole: 'Руководитель проекта',
		images: [
			'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F02223b07-8ef2-411f-9d76-62aaffdf4245.png',
			'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F275242e9-17c5-4ec4-a90e-cc9dfa06a8fe.png',
			'https://avatars.mds.yandex.net/i?id=5372eea0cbd16ac022f1e5cc79061823_l-4904452-images-thumbs&n=13'
		],
		year: 2025,
		location: 'Ленинградская область',
		area: '22 км',
		status: 'in-progress',
		features: ['Реконструкция', 'Модернизация', 'Технадзор']
	},
	{
		id: 3,
		title: 'Насосная станция',
		category: 'Замена оборудования, ремонт помещения',
		description: 'Наша команда специалистов провела комплексный ремонт насосной станции населённого пункта Острая могила.Была произведена замена устаревшего оборудования на автоматизированные системы.Произведён ремонт внутреннего помещения станции с учётом пожеланий заказчика.',
		manager: 'Корюкин Сергей Александрович',
		managerRole: 'Главный инженер',
		images: [
			'https://www.chkz.ru/images/razdely/nasosnye-stancii/sostav-cnp.jpg',
			'https://remgvard.ru/wp-content/uploads/2024/08/d2e3d5bf-d794-4be8-a97d-1658102cb8ea.jpg'
		],
		year: 2025,
		location: 'ЛНР, г. Острая Могила',
		area: '200 м²',
		status: 'completed',
		features: ['Проектирование', 'Строительство', 'Автоматизация']
	},
	
];


