// src/app/components/home/Location.tsx
import styles from './AboutUs.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import CommonButton from '../common/button/CommonButton';
import { motion } from 'framer-motion';

const AboutUs = () => (
    <section className={styles.section} id="aboutus">
        <div className={styles.content}>
            <div className={mainStyles.sectionEntireScreenContentAndImageReverse}>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ margin: '-200px', once: true }}
                >
                    <img src="/images/home/about_us.jpg" alt="Bashu Dhungana Image" className={styles.image} />
                </motion.div>
                <motion.div
                    className={mainStyles.subsectionHalfScreenContent}

                >
                    <div className={mainStyles.contentText}>
                        <motion.h3 className={mainStyles.sectionHeaderTextWhite}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}>STORY BEHIND BANBAS</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}>Bashu Dhungana grew up appreciating the beauty of Chitwan National Park. He built Banbas as an honor to the National Park and the indigenous local community cohabiting with the wild lives around the National Park. To him &quot;Banbas is a home for everyone that yearns the tranquility of nature&quot;. </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ margin: '-200px', once: true }}
                    >
                        <CommonButton
                            padding="16px 24px"
                            content="OUR STORY"
                            url="/aboutus"
                            type="banbas"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default AboutUs;
