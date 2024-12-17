// src/app/components/home/Location.tsx
import styles from './Location.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import CommonButton from '../common/button/CommonButton';
import { motion } from 'framer-motion';

const Location = () => (
    <section className={styles.section} id="location">
        <div className={styles.content}>
            <div className={mainStyles.sectionEntireScreenContentAndImage}>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ margin: '-200px', once: true }}
                >
                    <img src="/images/home/banbas_location.png" alt="Banbas Location" className={styles.image} />
                </motion.div>
                <motion.div
                    className={mainStyles.subsectionHalfScreenContent}

                >
                    <div className={mainStyles.contentText}>
                        <motion.h3 className={mainStyles.sectionHeaderTextWhite}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}>WHERE ARE WE?</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}>20 minutes flight from Kathmandu and 30 minutes drive from the airport, Banbas lies peacefully alongside Chitwan National Park. </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ margin: '-200px', once: true }}
                    >
                        <CommonButton
                            padding="16px 24px"
                            content="OPEN IN GOOGLE MAPS"
                            url="https://maps.app.goo.gl/HRvZdTxAZRQWMYEo6"
                            type="banbas"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Location;
