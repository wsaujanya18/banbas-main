// src\app\components\home\Partner.tsx
import styles from '../../styles/aboutusPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const Partner = () => {
    return (
        <section className={styles.section_whitebg}>
            <div className={mainStyles.sectionEntireScreenContentAndImage}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={styles.sectionHeaderText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            MANAGED BY SIDDHARTHA HOSPITALITY
                        </motion.h3>
                        <motion.p
                            className={styles.sectionBodyText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            To uphold our values and ensure the best guest experience, Banbas has partnered with Siddhartha Hospitality, a Nepalese hospitality brand renowned for its heartfelt, authentic service. Sharing the philosophy that &quot;Guests are Gods,&quot; Siddhartha Hospitality brings a unique blend of love and warmth to Banbas.
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ margin: '-200px', once: true }}
                >
                    <img src="/images/aboutus/3.jpg" alt="Tharu Dance" className={styles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default Partner;
