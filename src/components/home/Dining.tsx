// src/app/components/home/Dining.tsx
import styles from './Dining.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import CommonButton from '../common/button/CommonButton';
import { InfiniteImageSliderCustomArrows } from '../common/slider/InfiniteImageSliderCustomArrows';
import { motion } from 'framer-motion';

const IMAGES = [
    { url: "/images/home/dining/1.jpg", alt: "Banbas Dining Outside" },
    { url: "/images/home/dining/2.JPG", alt: "Banbas Dining Reception" },
    { url: "/images/home/dining/3.jpg", alt: "Banbas Dining" },
    { url: "/images/home/dining/4.JPG", alt: "Banbas Dining Outside" },
];

const Dining = () => {
    return (
        <section className={styles.section}>
            <div className={mainStyles.sectionEntireScreenContent}>
                <div className={mainStyles.contentText}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: '-200px', once: true }}>
                        <h2 className={mainStyles.sectionHeaderTextWhite}>DINE WITH US</h2>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ margin: '-200px', once: true }}
                        transition={{ duration: 0.2, delay: 0.2}}
                    >
                        <p className={mainStyles.sectionBodyTextWhite}>Savor an unforgettable dining experience with us, where every delicious meal is paired with views of the boundless expanse of the green Chitwan National Park. Our outdoor area allows you to bask in the breathtaking views of sunrise and sunset, adding a touch of magic to each bite. </p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.3, delay: 0.3}}
                >
                    <CommonButton
                        padding="16px 24px"
                        content="DISCOVER DINING"
                        url="/dining"
                        type="banbas"
                    />
                </motion.div>
            </div>
            <div className={styles.imageContainer}>
                <InfiniteImageSliderCustomArrows images={IMAGES} autoSlide={false} />
            </div>
        </section>
    );
};

export default Dining;
