// src\app\components\home\Cycling.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const Cycling = () => {
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
                        >
                            CYCLING
                        </motion.h3>
                        <motion.p 
                        className={mainStyles.sectionBodyTextWhite}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ margin: '-200px', once: true }}
                        >
                            Banbas is ideally situated for those seeking a short cycling exploration - we are close enough to the main market yet far enough to be surrounded by the park&apos;s captivating beauty. It is a perfect cycling path, allowing one to witness indigenous village life on one side and the jungle&apos;s wild beauty in the other.
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
                    <img src="/images/adventures/cycling.webp" alt="Cycling around Banbas and Chitwan National Park" className={mainStyles.image}/>
                </motion.div>
            </div>
        </section>
    );
};

export default Cycling;
