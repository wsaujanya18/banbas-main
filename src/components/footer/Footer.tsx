// src/app/components/footer/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footerContainer}>
        <div className={styles.logoContainer}>
            <Link href="/">
                <img src="/logos/banbas_logo_original.jpg" alt="Banbas Logo" className={styles.logo} />
            </Link>
        </div>
        <div className={styles.socialMediaLinks}>
            <a href="https://www.facebook.com/SiddharthaVilasaBanbas/" target="_blank" rel="noopener noreferrer">
                <img src="/logos/facebook.svg" alt="Facebook Logo" className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com/siddharthavilasa_banbas/" target="_blank" rel="noopener noreferrer">
                <img src="/logos/instagram.svg" alt="Instagram Logo" className={styles.socialIcon} />
            </a>
            <a href="https://www.youtube.com/@BanbasJungleResort" target="_blank" rel="noopener noreferrer">
                <img src="/logos/youtube.svg" alt="YouTube Logo" className={styles.socialIcon} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=9855019932" target="_blank" rel="noopener noreferrer">
                <img src="/logos/whatsapp.svg" alt="WhatsApp Logo" className={styles.socialIcon} />
            </a>
            <a href="https://web.wechat.com" target="_blank" rel="noopener noreferrer">
                <img src="/logos/wechat.svg" alt="WeChat Logo" className={styles.socialIcon} />
            </a>
        </div>
        <div className={styles.termsAndPrivacy}>
            <a href="/terms" className={styles.terms}>TERMS AND CONDITIONS</a>  <a href="/privacy">PRIVACY POLICY</a>
        </div>
        <div className={styles.copyright}>© Copyright 2024 Banbas</div>
        <div className={styles.designedAndDeveloped}>
            <p>Website designed and developed by:</p> 
            <p><a href="https://github.com/dhakalaashish" target="_blank" rel="noopener noreferrer" className={styles.aashishLink}>AASHISH DHAKAL</a></p>
        </div>
    </footer>
);

export default Footer;
