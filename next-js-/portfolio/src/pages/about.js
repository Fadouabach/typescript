import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from '@/styles/About.module.css';

export default function About() {
    return (
        <Layout title="About Me | Khalil">
            <section className={`${styles.aboutSection} container`}>
                <div className={styles.grid}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/profile.png"
                            alt="Profile Picture"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1>About Me</h1>
                        <p>I am a passionate <strong>Front-End Developer</strong> oriented towards self-learning and
                            continuous improvement. I have acquired solid foundations in web development and React JS
                            through practical training and applied projects.</p>
                        <p>Comfortable with teamwork and Agile/Scrum environments, I am serious, curious, and
                            solution-oriented. I am currently looking for an internship to apply my skills and continue to
                            progress in a professional setting.</p>
                        <a href="/contact" className="btn btn-primary">Get in Touch</a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
