// src\app\components\home\Sundowner.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const Sundowner = () => {
    return (
        <section className={styles.section_whitebg}>
            <div className={mainStyles.sectionEntireScreenContentAndImageReverse}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3 
                        className={mainStyles.sectionHeaderText}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ margin: '-200px', once: true }}
                        >
                            SUNDOWNER
                        </motion.h3>
                        <motion.p 
                        className={mainStyles.sectionBodyText}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ margin: '-200px', once: true }}
                        >
                            After a day filled with diverse adventures, we take you to a serene space to unwind and enjoy luscious drinks and delicious food with beautiful souls you have met through your adventures, as the setting sun&apos;s gentle rays soothingly graze your skin.
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
                    <img src="/images/adventures/sundowner.webp" alt="Sundowner activity beside Chitwan National Park organized by Banbas" className={mainStyles.image}/>
                </motion.div>
            </div>
        </section>
    );
};

export default Sundowner;
