// src\components\home\Description.tsx
import descriptionStyles from '../../styles/description.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const Description = () => {
    return (
        <section className={descriptionStyles.section}>
            <div className={descriptionStyles.sectionEntireScreenContent}>
                <motion.h2 
                    className={mainStyles.sectionHeaderText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}    
                >
                    RESORT BESIDES A WORLD HERITAGE SITE - CHITWAN NATIONAL PARK
                </motion.h2>
                <motion.p 
                    className={mainStyles.sectionBodyText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}
                >
                    Experience the unparalleled beauty of Chitwan National Park from the comfort of your own residence. Every wild tree and the wetland inside Banbas blends into the natural splendor that surrounds you. Wake up to the symphony of over 60 species of wild birds serenading your mornings with their exotic melodies. Royal Bengal tiger, one-horned rhinoceros, and the magnificient Asian wild elephant live right next to you in their natural habitat. Banbas is a sanctuary for those who yearn to be enveloped by nature&apos;s untouched beauty. This is where your spirit finds both peace and adventure at once. 
                </motion.p>
            </div>
        </section>
    );
};

export default Description;
