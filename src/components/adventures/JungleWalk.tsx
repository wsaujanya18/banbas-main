// src\app\components\home\JungleWalk.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const JungleWalk = () => {
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
                        >JUNGLE WALK</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Chitwan National Park is among the few places in the world where you are allowed to walk through the depth of the wilderness. Our professional guides will lead you through these deep, primal sections of the park in a safe and secure manner. Here, in the habitats of rhinos, tigers, wild elephants, sloth bear, and barking deer, you will learn the ways of the wild. This adventure is not for everyone; it&apos;s a thrilling experience crafted for those who seek the raw, heart-pounding excitement of exploring the domain of nature&apos;s most majestic inhabitants. 
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
                    <img src="/images/adventures/jungle_walk.webp" alt="Jungle Walk inside Chitwan National Park" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default JungleWalk;
