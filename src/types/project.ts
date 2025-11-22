export type Project = {
	id: number;
	title: string;
	category: string;
	description: string;
	manager: string;
	managerRole?: string;
	images: string[];
	year?: number;
	location?: string;
	area?: string;
	status?: 'completed' | 'in-progress' | 'planned';
	features?: string[];
};


