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
                    AFTER DECADES OF EXPERIENCE IN LEADING SUSTAINABLE PROJECTS, BASHU FINALLY BEGAN WORKING ON BANBAS - HIS DREAM PROJECT.
                </motion.h2>
                <motion.p 
                    className={styles.sectionBodyText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}
                >
                    Born and raised near Chitwan National Work, Bashu Dhungana has spent decades working for the welfare of his community and preserving the region’s rich natural heritage. His journey began with the Chitwan National Park Buffer Zone—the first of its kind in Nepal—where he became a member and later served as a leader for nearly two decades. Through his efforts, he bridged the gap between the people and the National Park, becoming a beloved spokesperson for the conservation and development of the National Park. His leadership brought the Buffer Zone Committee the prestigious Abraham Conservation Award in 2006. 
                </motion.p>
            </div>
        </section>
    );
};

export default Description;
