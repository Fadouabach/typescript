import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          PORTFOLIO
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${router.pathname === '/' ? styles.active : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`${styles.navLink} ${router.pathname === '/about' ? styles.active : ''}`}>
            About
          </Link>
          <Link href="/projects" className={`${styles.navLink} ${router.pathname === '/projects' ? styles.active : ''}`}>
            Projects
          </Link>
          <Link href="/contact" className={`${styles.navLink} ${router.pathname === '/contact' ? styles.active : ''}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
