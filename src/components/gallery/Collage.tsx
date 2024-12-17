// src/components/gallery/Collage.tsx
import styles from './Collage.module.css';
import { motion } from 'framer-motion';

const IMAGES = [
    { url: "/images/home/accomodation/deluxe.jpg", alt: "Accomodation Photo" },
    { url: "/images/home/accomodation/executive_deluxe.jpg", alt: "Accomodation Photo" },
    { url: "/images/home/accomodation/suite.jpg", alt: "Accomodation Photo" },
    { url: "/images/home/accomodation/vilasa_suite.jpg", alt: "Accomodation Photo" },
    { url: "/images/home/landing/background.jpg", alt: "Banbas" },
    { url: "/images/adventures_landing.jpg", alt: "Dining in Banbas" },
    { url: "/images/accomodations-background-landing.jpg", alt: "Dining in Banbas" },
    { url: "/images/gallery_landing.jpg", alt: "Dining in Banbas" },
    { url: "/images/adventures/firedance.png", alt: "Dining in Banbas" },
    { url: "/images/home/gallery/1.jpg", alt: "Photo Description" },
    { url: "/images/home/gallery/2.jpg", alt: "Photo Description" },
    { url: "/images/home/gallery/3.jpg", alt: "Photo Description" },
    { url: "/images/home/gallery/4.jpg", alt: "Photo Description" },
    { url: "/images/home/gallery/5.jpg", alt: "Photo Description" },
    { url: "/images/home/gallery/6.jpg", alt: "Photo Description" },
    { url: "/images/home/swimming_pool.jpg", alt: "Banbas Swimming Pool" },
];

const Collage = () => {
    const getInitialAnimation = (index: number) => {
        if ([0, 5, 7, 8, 12].includes(index)) {
            return { x: -100, opacity: 0 }; // Left images
        } else if ([2, 3, 6, 10, 11, 15].includes(index)) {
            return { x: 100, opacity: 0 }; // Right images
        } else {
            return { y: 100, opacity: 0 }; // Center images
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.collageContainer}>
                <div className={styles.gridContainer}>
                    {IMAGES.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.cell} ${styles[`img${index + 1}`]}`}
                            initial={getInitialAnimation(index)}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, ease: "easeOut" }}
                            viewport={{  once: true }}
                        >
                            <img src={image.url} alt={image.alt} className={styles.image} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collage;
