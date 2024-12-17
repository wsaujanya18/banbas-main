// src\app\components\home\JeepSafari.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const JeepSafari = () => {
    return (
        <section className={styles.section_whitebg}>
            <div className={mainStyles.sectionEntireScreenContentAndImageReverse}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >SAFARI INSIDE THE JUNGLE</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Venture deep into Chitwan National Park in the safety of a Jeep, where an awe-inspiring diversity of flora and fauna awaits. Our guides will lead you through the heart of the park, giving you a rare chance to safely witness predators and prey within their own distinct habitation - predators reign over their territories, while prey navigates these lands with remarkable survival instincts. 
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
                    <img src="/images/adventures/jeep_safari.jpg" alt="Jeep Safari from Banbas at Chitwan National Park" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default JeepSafari;
