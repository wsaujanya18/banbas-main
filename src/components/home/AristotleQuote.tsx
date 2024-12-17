// src\components\home\Description.tsx
import descriptionStyles from '../../styles/description.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const AristotleQuote = () => {
    return (
        <section className={descriptionStyles.section}>
            <div className={descriptionStyles.sectionEntireScreenContent}>
                <motion.h2 
                    className={mainStyles.sectionHeaderText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}    
                >“Life is a gift of nature but beautiful living is the gift of wisdom.”</motion.h2>
                <motion.p 
                    className={mainStyles.sectionBodyText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}
                >Aristotle </motion.p>
            </div>
        </section>
    );
};

export default AristotleQuote;

