// src\components\home\AdventureImagesSlider.tsx
import styles from '../../styles/adventuresPage.module.css';
import { InfiniteImageSliderCustomArrows } from '../common/slider/InfiniteImageSliderCustomArrows';


const IMAGES = [
    { url: "/images/adventures/canoeing.webp", alt: "Canoeing" },
    { url: "/images/adventures/firedance.png", alt: "Rhino" },
    { url: "/images/adventures/birdwatching.webp", alt: "Rainforest" },
];

const AdventureImagesSlider = () => {
    return (
        <section className={styles.section_slider}>
            <div className={styles.sliderContainer}>
                <InfiniteImageSliderCustomArrows images={IMAGES} autoSlide={false} />
            </div>
        </section>
    );
};

export default AdventureImagesSlider;
