import { useState } from 'react';
import styles from './Projects.module.css';
import ProjectsModal from '../ProjectsModal';
import { projects } from '../../data/projects';
import { Project } from '../../types/project';

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
		<>
			<section id="projects" className={styles.section}>
				<div className="container">
					<div className={styles.head}>
						<h2 className={styles.title}>Проекты</h2>
						<a href="#contact" className={styles.link}>Обсудить ваш проект</a>
					</div>
					<div className={styles.grid}>
						{projects.map((project) => (
							<button
								key={project.id}
								className={styles.card}
								onClick={() => setSelectedProject(project)}
							>
								<div className={styles.thumb}>
									{project.images[0] && (
										<img
											src={project.images[0]}
											alt={project.title}
											loading="lazy"
										/>
									)}
									<div className={styles.overlay} />
								</div>
								<div className={styles.meta}>{project.title}</div>
								<div className={styles.name}>{project.category}</div>
							</button>
						))}
					</div>
				</div>
			</section>
			<ProjectsModal
				project={selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</>
	);
}



