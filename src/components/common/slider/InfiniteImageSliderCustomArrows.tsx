import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './InfiniteImageSliderCustomArrows.module.css';

type InfiniteImageSliderCustomArrowsProps = {
  images: {
    url: string;
    alt: string;
  }[];
  autoSlide?: boolean;
};

export function InfiniteImageSliderCustomArrows({ images, autoSlide = true }: InfiniteImageSliderCustomArrowsProps) {
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
    </section>
  );
}
