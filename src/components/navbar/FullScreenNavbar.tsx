// src/app/components/FullScreenNavbar.tsx
import Link from 'next/link';
import styles from './FullScreenNavbar.module.css';

const FullScreenNavbar = ({ toggleMenu }: { toggleMenu: () => void }) => {
    return (
        <div className={styles.fullScreenNav}>
            <div className={styles.navCloseWrapper} onClick={toggleMenu}>
                <div className={styles.navCloseSpan}></div>
                <div className={`${styles.navCloseSpan} ${styles.navCloseBot}`}></div>
            </div>
            <nav className={styles.navMenu}>
                <Link href="/adventures" className={styles.navLink} onClick={toggleMenu}>Adventures</Link>
                <Link href="/accommodations" className={styles.navLink} onClick={toggleMenu}>Accommodations</Link>
                <Link href="/dining" className={styles.navLink} onClick={toggleMenu}>Dining</Link>
                <Link href="/#location" className={styles.navLink} onClick={toggleMenu}>Location</Link>
                <Link href="/gallery" className={styles.navLink} onClick={toggleMenu}>Gallery</Link>
                <Link href="/aboutus" className={styles.navLink} onClick={toggleMenu}>About us</Link>
            </nav>
            <div className={styles.logoContainer}>
                <Link href="/">
                    <img src="/logos/banbas_logo_original.jpg" alt="Banbas Logo" className={styles.logo} />
                </Link>
            </div>
        </div>
    );
};

export default FullScreenNavbar;
