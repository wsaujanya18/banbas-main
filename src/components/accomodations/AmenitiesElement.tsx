// src/components/common/AmenitiesElement.tsx
import React from 'react';
import styles from './AmenitiesElement.module.css';

type AmenitiesElementProps = {
    icon: string;
    text: string;
    color: string;
};

const AmenitiesElement = ({ icon, text, color }: AmenitiesElementProps) => {
    const textClass = color === 'white' ? styles.textWhite : styles.textBrown;
    return (
        <div className={styles.amenity}>
            <img src={`/icons/${icon}.svg`} alt={text} className={styles.icon} />
            <span className={textClass}>{text}</span>
        </div>
    );
};

export default AmenitiesElement;