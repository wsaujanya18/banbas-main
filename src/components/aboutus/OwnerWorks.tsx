// src\app\components\home\OwnerWorks.tsx
import styles from '../../styles/aboutusPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const OwnerWorks = () => {
    return (
        <section className={styles.section_whitebg}>
            <div className={mainStyles.sectionEntireScreenContentAndImageReverse}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={styles.sectionHeaderText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            BEYOND HIS WORK IN CONSERVATION, BASHU HAS LED NUMEROUS PROJECTS AIMED AT IMPROVING LOCAL COMMUNITIES IN CHITWAN
                        </motion.h3>
                        <motion.p
                            className={styles.sectionBodyText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            His impactful contributions of establishing libraries and essential infrastructures was recognized with the People&apos;s Choice Award by the Bill and Melinda Gates Foundation. Alongside his wife, Sita Adhikari, who leads an INGO focused on women’s empowerment and clean energy, Bashu and his family have dedicated their life to giving back to nature and their community.
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
                    <img src="/images/aboutus/1.webp" alt="Jeep Safari" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default OwnerWorks;
