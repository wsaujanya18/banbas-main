// src/app/components/ReserveNavbar.tsx
import Link from 'next/link';
import styles from './ReserveNavbar.module.css';


const ReserveNavbar = () => {
    return (
        <header>
            <nav className={styles.nav}>
                    <div className={styles.logoContainerLargeScreen}>
                        <Link href="/">
                            <img src="/logos/banbas_logo_transparent.png" alt="Background" className={styles.logo} />
                        </Link>
                    </div>
            </nav>
        </header>
    );
};

export default ReserveNavbar;
