// src/components/common/Amenities.tsx
import React from 'react';
import styles from './Amenities.module.css';
import AmenitiesElement from './AmenitiesElement';
import { motion } from 'framer-motion';

type Amenity = {
    icon: string;
    text: string;
    color: string;
};

type AmenitiesProps = {
    amenities: Amenity[];
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Amenities = ({ amenities }: AmenitiesProps) => {
    return (
        <motion.div
            className={styles.amenitiesContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: '-200px', once: true }}
            variants={containerVariants}
        >
            {amenities.map((amenity, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <AmenitiesElement icon={amenity.icon} text={amenity.text} color={amenity.color}/>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Amenities;
