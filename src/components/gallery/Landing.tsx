// src/app/components/gallery/Landing.tsx
import { useState, useEffect } from 'react';
import styles from './Landing.module.css';
import Header from '../navbar/Navbar';

const Landing = () => {
    const [showVideo, setShowVideo] = useState(true);

    useEffect(() => {
        const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
        const type = connection?.effectiveType;
        if (type) {
            if (type === '4g' || type === 'wifi') {
                setShowVideo(true);
            } else {
                setShowVideo(false);
            }
        } else {
            setShowVideo(true); // Default to showing video if the API is not supported
        }
    }, []);
    

    return (
        <section className={styles.hero}>
            <Header />
            <div className={styles.heroBackground}>
                {showVideo ? (
                    <div className={styles.heroBackgroundVideo}>
                        <video
                            id="background-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={styles.video}
                        >
                            <source src="/videos/gallery_landing.mp4" type="video/mp4" />
                        </video>
                    </div>
                ) : (
                    <div className={styles.heroBackgroundImage}></div>
                )}
            </div>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <div className={styles.flexbox}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroHeading}>EXPLORE THROUGH PICTURES</h1>
                            <p className={styles.heroEntry}>Good Vibes | Within Nature | Chitwan National Park</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
