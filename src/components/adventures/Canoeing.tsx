// src\components\home\Canoeing.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const Canoeing = () => {
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
                        >CANOEING</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            Glide just a few feet away from Chital and Sambar deers quenching their thirst, Lesser Adjutant and Asian Openbill hunting for fish while staying alert to the crocodiles basking on the banks. The sounds made by the canoe&apos;s paddle as it dips in and out of the water syncs with the occasional cry of the wild birds and animals from the nearby dense forest, soothing the soul while constrasting with the intense yet silent standoff between predators and preys.
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
                    <img src="/images/adventures/canoeing.webp" alt="Canoeing from Banbas at Chitwan National Park" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default Canoeing;
