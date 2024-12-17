// src/app/components/dining/Description.tsx
import descriptionStyles from '../../styles/description.module.css';
import mainStyles from '../../styles/mainStyles.module.css';
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
                    DINE WITH THE BIRD SONGS
                </motion.h2>
                <motion.p 
                    className={mainStyles.sectionBodyText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}
                >
                    Dine outdoors with stunning views of sunrise or sunset, or indoors in a beautifully crafted, wooden, architecturally cooled space, where exquisite flavors meet exceptional service
                </motion.p>
            </div>
        </section>
    );
};

export default Description;
