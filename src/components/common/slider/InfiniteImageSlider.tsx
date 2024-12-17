import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './InfiniteImageSlider.module.css';

type InfiniteImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
  autoSlide?: boolean;
};

export function InfiniteImageSlider({ images, autoSlide = true }: InfiniteImageSliderProps) {
  // const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean, label: string) => (
  //   <button
  //     type="button"
  //     onClick={onClickHandler}
  //     title={label}
  //     className={`${styles.arrow} ${styles.arrowPrev}`}
  //     disabled={!hasPrev}
  //   >
  //     <img src="/icons/prev-icon.svg" alt="Previous Icon" className={styles.prevNextIcon} />
  //   </button>
  // );

  // const renderArrowNext = (onClickHandler: () => void, hasNext: boolean, label: string) => (
  //   <button
  //     type="button"
  //     onClick={onClickHandler}
  //     title={label}
  //     className={`${styles.arrow} ${styles.arrowNext}`}
  //     disabled={!hasNext}
  //   >
  //     <img src="/icons/next-icon.svg" alt="Next Icon" className={styles.prevNextIcon} />
  //   </button>
  // );

  // const renderIndicator = (
  //   onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
  //   isSelected: boolean,
  //   index: number,
  //   label: string
  // ) => (
  //   <li
  //     className={`${styles.dot} ${isSelected ? styles.dotSelected : ''}`}
  //     onClick={onClickHandler}
  //     onKeyDown={onClickHandler}
  //     value={index}
  //     key={index}
  //     role="button"
  //     tabIndex={0}
  //     title={`${label} ${index + 1}`}
  //   >
  //     {isSelected ? '●' : '○'}
  //   </li>
  // );

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
        // renderArrowPrev={renderArrowPrev}
        // renderArrowNext={renderArrowNext}
        // renderIndicator={renderIndicator}
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
