// src/app/components/common/SliderWithBackgroundImage.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './SliderWithBackgroundImage.module.css';
import { motion } from 'framer-motion';

type SliderWithBackgroundImageProps = {
  images: {
    url: string;
    alt: string;
  }[];
  backgroundImage: {
    url: string;
    alt: string;
  };
  autoSlide?: boolean;
};

export function SliderWithBackgroundImage({ images, backgroundImage, autoSlide = true }: SliderWithBackgroundImageProps) {
  const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean, label: string) => (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className={`${styles.arrow} ${styles.arrowPrev}`}
      disabled={!hasPrev}
    >
      <img src="/icons/prev-icon-sudha.svg" alt="Previous Icon" className={styles.prevNextIcon} />
    </button>
  );

  const renderArrowNext = (onClickHandler: () => void, hasNext: boolean, label: string) => (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className={`${styles.arrow} ${styles.arrowNext}`}
      disabled={!hasNext}
    >
      <img src="/icons/next-icon-sudha.svg" alt="Next Icon" className={styles.prevNextIcon} />
    </button>
  );

  return (
    <section aria-label="Infinite Image Slider" className={styles.slider}>
      <div className={styles.overlay}>
        <img src={backgroundImage.url} alt={backgroundImage.alt} className={styles.overlayImage} />
      </div>
      <motion.div
        className={styles.carouselParentContainer}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 'all' }}
      >
        <Carousel
          autoPlay={autoSlide}
          interval={3500}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators
          swipeable
          emulateTouch
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
        >
          {images.map(({ url, alt }) => (
            <div key={url} className={styles.sliderImageContainer}>
              <img src={url} alt={alt} className={styles.sliderImage} />
            </div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
}
