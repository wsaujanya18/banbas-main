// src\app\components\home\Adventure.tsx
import styles from './Adventure.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { InfiniteImageSliderCustomArrows } from '../common/slider/InfiniteImageSliderCustomArrows';
import CommonButton from '../common/button/CommonButton';
import { motion } from "framer-motion"

const IMAGES = [
    { url: "/images/home/adventures/slider1.jpg", alt: "Rhino" },
    { url: "/images/home/adventures/slider2.jpg", alt: "Tiger" },
    { url: "/images/home/adventures/slider3.jpg", alt: "Jeep Safari" },
    { url: "/images/home/adventures/slider4.jpg", alt: "Wild Bird" },
];

const Adventure = () => {
    return (
        <section className={styles.section}>
            <div className={mainStyles.sectionEntireScreenContentAndImage}>
                <div className={mainStyles.subsectionHalfScreenContent}> 
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5}}
                        >
                            ACTIVITIES IN THE JUNGLE
                        </motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x:-100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            Embark on thrilling adventures led by expert guides to go deep into Chitwan National Park. Through a serene canoe ride alongside crocodiles in the Rapti river and exhilarating jungle drive, witness the beauty and wonder of the raw wilderness. Each moment in the heart of the jungle is an unforgettable blend of thrill and tranquility.
                        </motion.p>
                    </div>
                    <motion.div
                        className={mainStyles.buttonContainer}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: '-200px', once: true }}
                        transition={{ duration: 0.5}}
                    >
                        <CommonButton
                            padding="16px 24px"
                            content="EXPLORE ADVENTURES"
                            url="/adventures"
                            type="banbas"
                        />
                    </motion.div>

                </div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <InfiniteImageSliderCustomArrows images={IMAGES} />
                </motion.div>
            </div>
        </section>
    );
};

export default Adventure;
