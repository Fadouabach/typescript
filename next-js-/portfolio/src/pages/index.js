import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiJavascript } from 'react-icons/si';

const skills = [
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} /> },
];

export default function Home() {
  return (
    <Layout title="Khalil | Front-End Developer">
      <div className={styles.hero}>
        <div className={styles.bgImage}>
          <Image
            src="/images/bg-abstract.png"
            alt="Abstract Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.greeting}>Hello, I'm</span>
          <h1 className={`${styles.nameTitle} animate-fade-in`}>
            KHALIL
          </h1>
          <h2 className={styles.roleTitle}>
            Front-End Developer
          </h2>
          <p className={styles.subtitle}>
            Crafting digital masterpieces with modern technologies.
            Focused on building responsive, performance-driven web applications.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/projects" className="btn btn-primary">
              View Work
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <section className="section container">
        <h2 className={styles.sectionTitle}>My Tech Stack</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
