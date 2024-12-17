// src/app/components/home/OutdoorDining.tsx
import styles from '../../styles/diningPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css';
import { motion } from 'framer-motion';

const OutdoorDining = () => {
    return (
        <section className={styles.section_banbasbg}>
            <div className={mainStyles.sectionEntireScreenContentAndImageReverse}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderTextWhite}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >OUTDOOR DINING</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Experience the open sky dining in the cool morning or in a comforting warm night. Smell the wild trees scents intermingled with your food&apos;s smell, as you dine next to the dipping or rising sun.
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
                    <img src="/images/dining/outdoor_dining.webp" alt="Outdoor Dining" className={styles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default OutdoorDining;
