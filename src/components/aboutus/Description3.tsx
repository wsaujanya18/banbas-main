// src\components\home\Description.tsx
import styles from '../../styles/aboutusPage.module.css';
import descriptionStyles from '../../styles/description.module.css';
import { motion } from 'framer-motion';

const Description = () => {
    return (
        <section className={descriptionStyles.section}>
            <div className={descriptionStyles.sectionEntireScreenContent}>
                <motion.h2 
                    className={styles.sectionHeaderText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}    
                >
                    BASHU ENVISIONED BANBAS AS A RESORT THAT EMBODIES HARMONY WITH NATURE, THE LOCAL COMMUNITY, AND ITS GUESTS
                </motion.h2>
                <motion.p 
                    className={styles.sectionBodyText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}
                >
                    The architecture was designed to be environment-friendly and minimally invasive to the surrounding wildlife. Tiles for the floors and roofs were crafted from locally sourced materials, supporting the local economy, while other structures were primarily made from high-quality wood to blend seamlessly with the natural surroundings of the National Park. To ensure minimal disruption to wildlife, the recreation platform used for events like the Tharu fire dance was built below ground level, dampening noise and vibrations. Every facility was thoughtfully designed to be wheelchair accessible, prioritizing inclusion and comfort for all guests while maintaining a strong commitment to sustainability, community, and wildlife conservation.
                </motion.p>
            </div>
        </section>
    );
};

export default Description;
