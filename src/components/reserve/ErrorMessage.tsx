// src\app\components\home\Partner.tsx
import styles from '../../styles/reservePage.module.css'
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';
import CommonButton from '../common/button/CommonButton';

const ErrorMessage = () => {
    return (
        <section className={styles.section_whitebg}>
            <div className={mainStyles.sectionEntireScreenContentAndImage}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={styles.sectionHeaderTextError}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                           RESERVATION FAILED. PLEASE TRY AGAIN OR CONTACT US DIRECTLY.
                        </motion.h3>
                        <motion.p
                            className={styles.sectionBodyText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            We regret to inform you that your reservation attempt was unsuccessful, and we were unable to receive your message. Please feel free to reach out to us directly through our social media channels or by giving us a call. We are here to assist you and ensure your reservation is completed smoothly. Thank you for your understanding.
                        </motion.p>
                    </div>
                    <div>
                        <CommonButton
                            padding="16px 24px"
                            content="TRY RESERVING AGAIN"
                            url="reload"
                            type="normal"
                        />
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

export default ErrorMessage;
