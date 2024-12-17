"use client";
import styles from "./page.module.css";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Landing = dynamic(() => import('../../components/accomodations/Landing'), { ssr: false });
const Description = dynamic(() => import('../../components/accomodations/Description'), { ssr: false });
const Deluxe = dynamic(() => import('../../components/accomodations/Deluxe'), { ssr: false });
const ExecutiveDeluxe = dynamic(() => import('../../components/accomodations/ExecutiveDeluxe'), { ssr: false });
const Suite = dynamic(() => import('../../components/accomodations/Suite'), { ssr: false });
const VilasaSuite = dynamic(() => import('../../components/accomodations/VilasaSuite'), { ssr: false });
const Footer = dynamic(() => import('../../components/footer/Footer'), { ssr: false });
const ReserveFooter = dynamic(() => import('../../components/reserve/ReserveFooter'), { ssr: false });

export default function Accommodations() {
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
      await import('../../components/accomodations/Description');
      await import('../../components/accomodations/Deluxe');
      await import('../../components/accomodations/ExecutiveDeluxe');
      await import('../../components/accomodations/Suite');
      await import('../../components/accomodations/VilasaSuite');
      await import('../../components/footer/Footer');
    };

    lazyLoadSections();
  }, []);
  
  return (
    <main className={styles.main}>
      <Landing />
      <Description />
      <Deluxe />
      <ExecutiveDeluxe />
      <Suite />
      <VilasaSuite />
      <Footer />
      <ReserveFooter show={showFooter} />
    </main>
  );
}
