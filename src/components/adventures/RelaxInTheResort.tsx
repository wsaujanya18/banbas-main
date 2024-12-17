// src\app\components\home\RelaxInTheResort.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const RelaxInTheResort = () => {
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
                            RELAX WITHIN THE RESORT
                        </motion.h3>
                        <motion.p 
                        className={mainStyles.sectionBodyTextWhite}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ margin: '-200px', once: true }}
                        >
                            At Banbas, writers find inspiration for their next book, entrepreneurs infuse creativity into their projects, and remote workers balance productivity with tranquility. Our guests love relaxing in our freshwater swimming pool, bird watching more than 60 species of wild birds found within our compound and rejuvinating massages by dedicated hospitality experts.
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
                    <img src="/images/adventures/relaxintheresort.webp" alt="Book Writing inside Banbas surrounded by Chitwan National Park" className={mainStyles.image}/>
                </motion.div>
            </div>
        </section>
    );
};

export default RelaxInTheResort;
