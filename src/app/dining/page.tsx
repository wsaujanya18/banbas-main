// src\app\dining\page.tsx
"use client";
import styles from "./page.module.css";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Landing = dynamic(() => import('../../components/dining/Landing'), { ssr: false });
const Description = dynamic(() => import('../../components/dining/Description'), { ssr: false });
const OrganicFood = dynamic(() => import('../../components/dining/OrganicFood'), { ssr: false });
const OutdoorDining = dynamic(() => import('../../components/dining/OutdoorDining'), { ssr: false });
const IndoorDining = dynamic(() => import('../../components/dining/IndoorDining'), { ssr: false });
const DiningImages = dynamic(() => import('../../components/dining/DiningImages'), { ssr: false });
const Footer = dynamic(() => import('../../components/footer/Footer'), { ssr: false });
const ReserveFooter = dynamic(() => import('../../components/reserve/ReserveFooter'), { ssr: false });

export default function Dining() {
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
      await import('../../components/dining/Description');
      await import('../../components/dining/OrganicFood');
      await import('../../components/dining/OutdoorDining');
      await import('../../components/dining/IndoorDining');
      await import('../../components/dining/DiningImages');
      await import('../../components/footer/Footer');
    };

    lazyLoadSections();
  }, []);
  return (
    <main className={styles.main}>
      <Landing />
      <Description />
      <OrganicFood />
      <OutdoorDining />
      <IndoorDining />
      <DiningImages />
      <Footer />
      <ReserveFooter show={showFooter} />
    </main>
  );
}
