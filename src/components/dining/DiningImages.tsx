// src/app/components/dining/DiningImages.tsx
import styles from '../../styles/diningPage.module.css';
import { SliderWithBackgroundImage } from '../common/slider/SliderWithBackgroundImage';

const IMAGES = [
    { url: "/images/dining/outdoor_dining.webp", alt: "Dining in sunset besides Chitwan National Park" },
    { url: "/images/dining/swimming_pool_dining.webp", alt: "Eating organic food besides Chitwan National Park by the swimming pool" },
    { url: "/images/dining/indoor_dining.webp", alt: "Banbas Dining Reception" },
    { url: "/images/dining/organic_food.webp", alt: "Eating organic food besides Chitwan National Park " },
];

const BACKGROUND_IMAGE = { url: "/images/dining/swimming_pool_dining.webp", alt: "Banbas Resort View" }

const DiningImages = () => {
    return (
        <section className={styles.section_diningImages}>
            <div className={styles.sliderContainer}>
                <SliderWithBackgroundImage images={IMAGES} backgroundImage={BACKGROUND_IMAGE} autoSlide={false} />
            </div>
        </section>
    );
};

export default DiningImages;
