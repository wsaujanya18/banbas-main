// src/app/components/home/Accomodation.tsx
import styles from './Accomodation.module.css';
import mainStyles from '../../styles/mainStyles.module.css';
import CommonButton from '../common/button/CommonButton';
import ThreeSlider from '../common/slider/ThreeSlider';
import { motion } from 'framer-motion';

const IMAGES = [
    { url: "/images/home/accomodation/deluxe.jpg", alt: "Deluxe Room", title: "DELUXE", id: "deluxe" },
    { url: "/images/home/accomodation/executive_deluxe.jpg", alt: "Executive Deluxe Room", title: "EXECUTIVE DELUXE", id: "executivedeluxe" },
    { url: "/images/home/accomodation/suite.jpg", alt: "Suite Room", title: "SUITE", id:"suite" },
    { url: "/images/home/accomodation/vilasa_suite.jpg", alt: "Vilasa Suite Room", title: "VILASA SUITE", id: "vilasasuite" },
];

const Accomodation = () => {
    return (
        <section className={styles.section}>
            <div className={mainStyles.sectionEntireScreenContent}>
                <div className={mainStyles.contentText}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: '-200px', once: true }}>
                        <h2 className={mainStyles.sectionHeaderText}>
                            4 LUXURIOUS RESIDENCES FOR YOU
                        </h2>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: '-200px', once: true }}>
                        <p className={mainStyles.sectionBodyText}>
                            What would it feel like when modern comfort meets the fresh air, vibrant colors and harmonious sounds of nature? 
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.3, delay: 0.3}}
                >
                    <CommonButton
                        padding="16px 24px"
                        content="EXPLORE ACCOMMODATIONS"
                        url="/accommodations"
                        type="normal"
                    />
                </motion.div>
            </div>
            <ThreeSlider images={IMAGES} />
        </section>
    );
}

export default Accomodation;
