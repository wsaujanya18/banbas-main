// src\components\home\AboutusImagesSlider.tsx
import styles from '../../styles/aboutusPage.module.css';
import { InfiniteImageSliderCustomArrows } from '../common/slider/InfiniteImageSliderCustomArrows';


const IMAGES = [
    { url: "/images/home/gallery/1.jpg", alt: "Canoeing" },
    { url: "/images/home/gallery/2.jpg", alt: "Rhino" },
    { url: "/images/home/gallery/3.jpg", alt: "Rainforest" },
];

const AboutusImagesSlider = () => {
    return (
        <section className={styles.section_slider}>
            <div className={styles.sliderContainer}>
                <InfiniteImageSliderCustomArrows images={IMAGES} autoSlide={false} />
            </div>
        </section>
    );
};

export default AboutusImagesSlider;
