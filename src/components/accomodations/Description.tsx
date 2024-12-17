// src/app/components/home/Description.tsx
import mainStyles from '../../styles/mainStyles.module.css';
import descriptionStyles from '../../styles/description.module.css'
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
                >STAY WITH NATURAL EASE</motion.h2>
                <motion.p 
                    className={mainStyles.sectionBodyText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}
                >
                    Banbas integrates naturural architecture with comfort. It is designed to blend seamlessly with the surrounding forest and the wetland. Using predominantly wood and local materials with earthy tones, the exteriors are crafted to harmonize with the trees, creating a tranquil, non-disruptive environment for the rare wild birds that come to enjoy the fruits from the wild trees within the resort, and every detail on the inside is crafted for your supreme comfort.
                </motion.p>
            </div>
        </section>
    );
};

export default Description;
