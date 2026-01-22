import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
    return (
        <Layout title="Contact | John Doe">
            <div className="container section">
                <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Get In Touch</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Have a project in mind or want to say hi? I'd love to hear from you.
                </p>

                <div className={styles.contactContainer}>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input type="text" id="name" className={styles.input} placeholder="Your Name" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" id="email" className={styles.input} placeholder="your@email.com" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" className={styles.textarea} placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
