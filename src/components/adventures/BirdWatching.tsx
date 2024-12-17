// src\app\components\home\BirdWatching.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const BirdWatching = () => {
    return (
        <section className={styles.section_banbasbg}>
            <div className={mainStyles.sectionEntireScreenContentAndImageReverse}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderTextWhite}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >BIRD WATCHING</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Banbas was designed for bird watchers. Within the compound, there are more than 50 species of rare wild trees that produces fruits, drawing rare birds from deep within the park. Guests with a passion for birdwatching spend hours in the balcony watching rare birds like Brown Fish owl, Cinnamon Bittern, Black Bittern, and Oriental Pide Hornbill. Our manager, Prakash Neupane, a lifelong bird enthusiast with decades of bird watching tour experience, leads tours into the National Park to observe these rare birds in their natural habitat. Prakash brings his deep knowledge and passion to each tour, creating unforgettable experiences for our guests.
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
                    <img src="/images/adventures/birdwatching.webp" alt="Bird Watching from Banbas at Chitwan National Park" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default BirdWatching;
