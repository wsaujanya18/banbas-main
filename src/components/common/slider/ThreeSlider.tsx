// src\app\components\common\ThreeSlider.tsx
import { useRef, useState, useEffect } from 'react';
import styles from './ThreeSlider.module.css';
import Link from 'next/link';

type ThreeSliderProps = {
  images: {
    url: string;
    alt: string;
    title: string;
    id: string;
  }[];
};

const ThreeSlider = ({ images }: ThreeSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setImagesToShow(1);
      } else if (screenWidth < 924) {
        setImagesToShow(2);
      } else {
        setImagesToShow(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showNextImage = () => {
    if (imageIndex < images.length - imagesToShow) {
      setImageIndex(imageIndex + 1);
      if (containerRef.current) {
        const container = containerRef.current;
        container.style.transition = 'transform 300ms ease-in-out';
        container.style.transform = `translateX(-${(imageIndex + 1) * (100 / imagesToShow)}%)`;
      }
    }
  };

  const showPrevImage = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
      if (containerRef.current) {
        const container = containerRef.current;
        container.style.transition = 'transform 300ms ease-in-out';
        container.style.transform = `translateX(-${(imageIndex - 1) * (100 / imagesToShow)}%)`;
      }
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <div className={styles.imageContainer} ref={containerRef}>
          {images.map(({ url, alt, title, id }) => (
            <div key={url} className={styles.imageSubContainer}>
              <img
                src={url}
                alt={alt}
                className={styles.sliderImage}
              />
              <Link href={`/accommodations#${id}`}>
                <h3 className={styles.sliderImageHeader}>{title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/icons/prev-icon-brown-sudha.svg"
        alt="Previous Icon"
        className={`${styles.sliderButton} ${styles.leftButton}`}
        style={{ display: imageIndex === 0 ? 'none' : 'block' }}
        onClick={showPrevImage} />

      <img
        src="/icons/next-icon-brown-sudha.svg"
        alt="Next Icon"
        className={`${styles.sliderButton} ${styles.rightButton}`}
        style={{ display: imageIndex >= images.length - imagesToShow ? 'none' : 'block' }}
        onClick={showNextImage} />
    </div>
  );
};

export default ThreeSlider;
