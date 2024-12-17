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
                >WITNESS THE WILD WONDERS OF CHITWAN NATIONAL PARK</motion.h2>
                <motion.p 
                    className={mainStyles.sectionBodyText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}
                >
                    As you drive past wild Asian elephants moving majestically through the forest, the elusive royal Bengal tiger prowling its domain, and the impressive one-horned rhinoceros roaming freely on the grassland, glide in the Rapti river among crocodiles basking on riverbanks, and observe the graceful flight of rare birds like the Bengal Florican, Great Hornbill, and Oriental Darter, your perspective on life expands with the diversity and beauty that nature offers.
                </motion.p>
            </div>
        </section>
    );
};

export default Description;
