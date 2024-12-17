"use client";
import styles from "./page.module.css";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Landing = dynamic(() => import('../../components/aboutus/Landing'), { ssr: false });
const Description1 = dynamic(() => import('../../components/aboutus/Description1'), { ssr: false });
const Description2 = dynamic(() => import('../../components/aboutus/Description2'), { ssr: false });
const OwnerWorks = dynamic(() => import('../../components/aboutus/OwnerWorks'), { ssr: false });
const AdventureImagesSlider = dynamic(() => import('../../components/aboutus/AboutusImagesSlider'), { ssr: false });
const Description3 = dynamic(() => import('../../components/aboutus/Description3'), { ssr: false });
const Partner = dynamic(() => import('../../components/aboutus/Partner'), { ssr: false });
const Footer = dynamic(() => import('../../components/footer/Footer'), { ssr: false });
const ReserveFooter = dynamic(() => import('../../components/reserve/ReserveFooter'), { ssr: false });


export default function AboutUs() {
  const [showFooter, setShowFooter] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 1.5 * window.innerHeight && currentScrollY > lastScrollY) {
        setShowFooter(true);
      } else if (currentScrollY < lastScrollY) {
        setShowFooter(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  useEffect(() => {
    const lazyLoadSections = async () => {
      await import('../../components/aboutus/Description1');
      await import('../../components/aboutus/OwnerWorks');
      await import('../../components/aboutus/Description2');
      await import('../../components/aboutus/AboutusImagesSlider');
      await import('../../components/aboutus/Description3');
      await import('../../components/aboutus/Partner');
      await import('../../components/footer/Footer');
    };

    lazyLoadSections();
  }, []);
  return (
    <main className={styles.main}>
      <Landing />
      <Description1 />
      <OwnerWorks />
      <Description2 />
      <AdventureImagesSlider />
      <Description3 />
      <Partner />
      <Footer />
      <ReserveFooter show={showFooter} />
    </main>
  );
}
