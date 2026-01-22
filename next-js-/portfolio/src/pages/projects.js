import Head from 'next/head';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import styles from '@/styles/Projects.module.css';

const projectsData = [
    {
        id: 1,
        title: "Aurora Analytics",
        description: "A high-performance analytics dashboard for SaaS platforms featuring real-time data visualization.",
        image: "/images/project-1.png",
        tags: ["Next.js", "D3.js", "PostgreSQL"]
    },
    {
        id: 2,
        title: "Neon Commerce",
        description: "Futuristic online store with immersive 3D product previews and seamless checkout.",
        image: "/images/project-1.png",
        tags: ["React", "Three.js", "Stripe"]
    },
    {
        id: 3,
        title: "Zenith Tasks",
        description: "AI-powered productivity tool designed for remote teams to streamline workflows.",
        image: "/images/project-1.png",
        tags: ["TypeScript", "Firebase", "OpenAI API"]
    }
];

export default function Projects() {
    return (
        <Layout title="Projects | John Doe">
            <div className="container section">
                <h1 style={{ marginBottom: '2rem' }}>Featured Projects</h1>
                <div className={styles.grid}>
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
