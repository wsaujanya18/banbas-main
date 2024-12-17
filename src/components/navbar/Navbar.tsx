// src/app/components/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import FullScreenNavbar from './FullScreenNavbar';
import CommonButton from '../common/button/CommonButton';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu((prevState) => !prevState);
        document.body.classList.toggle('has-open-nav', !openMenu);
    };

    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.navTop}>
                    <div className={styles.navTriggerContainer}>
                        <div className={styles.navTrigger} onClick={toggleMenu}>
                            <div className={styles.navSpan}></div>
                            <div className={`${styles.navSpan} ${styles.navMid}`}></div>
                            <div className={`${styles.navSpan} ${styles.navBot}`}></div>
                        </div>
                    </div>
                    <div className={styles.logoContainerLargeScreen}>
                        <Link href="/">
                            <img src="/logos/banbas_logo_transparent.png" alt="Background" className={styles.logo} />
                        </Link>
                    </div>
                    <div className={styles.logoContainerMobile}>
                        <Link href="/"  className={styles.logoLinkText}>
                            <h1 className={styles.banbasLogoText}>banbas</h1>
                        </Link>
                    </div>
                    <div className={styles.reserveButtonContainer}>
                        <CommonButton
                            padding="16px 24px"
                            content="RESERVE"
                            url="/reserve"
                            type="whitebg"
                        />
                    </div>
                </div>
                <div className={`${styles.navLinksContainer} ${openMenu ? styles.navOpen : ''}`}>
                    <Link href="/adventures" className={styles.navLink}>ADVENTURES</Link>
                    <Link href="/accommodations" className={styles.navLink}>ACCOMODATIONS</Link>
                    <Link href="/dining" className={styles.navLink}>DINING</Link>
                    <Link href="/#location" className={styles.navLink}>LOCATION</Link>
                    <Link href="/gallery" className={styles.navLink}>GALLERY</Link>
                    <Link href="/aboutus" className={styles.navLink}>ABOUT US</Link>
                </div>
            </nav>
            {openMenu && <FullScreenNavbar toggleMenu={toggleMenu} />}
        </header>
    );
};

export default Navbar;
