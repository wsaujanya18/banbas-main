// src/components/dining/OrganicFood.tsx
import styles from '../../styles/diningPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css';
import { motion } from 'framer-motion';

const OrganicFood = () => {
    return (
        <section className={styles.section_banbasbg}>
            <div className={mainStyles.sectionEntireScreenContentAndImage}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >ORGANIC FOOD</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            Our dishes are thoughtfully crafted using organically grown, local ingredients, skillfully prepared by expert chefs. We source premium-quality ingredients to offer a diverse culinary experience, from timeless traditional recipes to refined gourmet creations.
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/images/dining/organic_food.webp" alt="Organic Food" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default OrganicFood;
