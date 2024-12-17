// src/app/components/home/SwimmingPool.tsx
import styles from './SwimmingPool.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SwimmingPool = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <section className={styles.section}>
            <div className={styles.image}>
                <div className={styles.textContainer}>
                    <motion.h2
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: '-200px', once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        TOUR BANBAS
                    </motion.h2>
                    <motion.div
                        className={styles.videoIcon}
                        onClick={openModal}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 'all', once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className={styles.playButton}></div>
                    </motion.div>
                </div>
            </div>
            {modalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/pVPm-l6Rboc?autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1&autoplay=1" 
                            title="Sidhhartha Vilasa"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className={styles.iframeStyle}
                        ></iframe>
                        <div className={styles.modalCloseWrapper} onClick={closeModal}>
                            <div className={styles.modalCloseSpan}></div>
                            <div className={`${styles.modalCloseSpan} ${styles.modalCloseBot}`}></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SwimmingPool;
