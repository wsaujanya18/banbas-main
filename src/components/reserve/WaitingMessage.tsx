// src\app\components\home\Partner.tsx
import styles from '../../styles/reservePage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const WaitingMessage = () => {
    return (
        <section className={styles.section_whitebg}>
            <div className={mainStyles.sectionEntireScreenContentAndImage}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={styles.sectionHeaderTextWaiting}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            SENDING RESERVATION ...
                        </motion.h3>
                        <motion.p
                            className={styles.sectionBodyText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            By choosing to stay with us, you are supporting an organically developed business that prioritizes nature, local communities, and sustainability above all else. At Banbas, global challenges like climate change and environmental conservation are at the heart of everything we do. From creating a thriving wetland ecosystem to sourcing local materials and protecting wildlife, we are dedicated to building a greener, more sustainable Earth. Your stay is more than just an opportunity to enjoy a unique and luxurious retreat—it’s a chance to reconnect with nature and contribute to a pro-earth initiative. 
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
                    <img src="/images/home/gallery/5.jpg" alt="Tharu Dance" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default WaitingMessage;
