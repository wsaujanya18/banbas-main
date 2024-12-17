// src\app\components\home\CreateYourOwnAdventures.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const CreateYourOwnAdventures = () => {
    return (
        <section className={styles.section_whitebg}>
            <div className={mainStyles.sectionEntireScreenContentAndImage}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >DESIGN YOUR OWN ADVENTURES</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            At Banbas, we take pride in accommodating our guests&apos; unique interests and creating personalized experiences. For guests interested in traditional fishing, we arrange events to learn the art alongside the indigenous Tharu people. Some guests join in traditional crop harvesting events, while others may visit the nearby elephant care center to study the lifestyle of domesticated elephants and their infants under the guidance of experienced elephant handlers. We also offer opportunities for cultural immersion, allowing guests to interact with the local community and learn about their rich traditions. Whatever your special interest, we are here to make your experience truly memorable.
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
                    <img src="/images/adventures/design_your_own_experience.webp" alt="Design Your Own Experience at Banabas" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default CreateYourOwnAdventures;
