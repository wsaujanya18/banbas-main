"use client";
import styles from "./page.module.css";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Landing = dynamic(() => import('../components/home/Landing'), { ssr: false });
const Description = dynamic(() => import('../components/home/Description'), { ssr: false });
const Adventure = dynamic(() => import('../components/home/Adventure'), { ssr: false });
const Accomodation = dynamic(() => import('../components/home/Accomodation'), { ssr: false });
const SwimmingPool = dynamic(() => import('../components/home/SwimmingPool'), { ssr: false });
const Dining = dynamic(() => import('../components/home/Dining'), { ssr: false });
const Gallery = dynamic(() => import('../components/home/Gallery'), { ssr: false });
const Location = dynamic(() => import('../components/home/Location'), { ssr: false });
const AboutUs = dynamic(() => import('../components/home/AboutUs'), { ssr: false });
const AristotleQuote = dynamic(() => import('../components/home/AristotleQuote'), { ssr: false });
const Footer = dynamic(() => import('../components/footer/Footer'), { ssr: false });
const ReserveFooter = dynamic(() => import('../components/reserve/ReserveFooter'), { ssr: false });


export default function Home() {
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
      await import('../components/home/Description');
      await import('../components/home/Adventure');
      await import('../components/home/Accomodation');
      await import('../components/home/Dining');
      await import('../components/home/Location');
      await import('../components/home/Gallery');
      await import('../components/home/SwimmingPool');
      await import('../components/home/AboutUs');
      await import('../components/home/AristotleQuote');
      await import('../components/footer/Footer');
    };
    lazyLoadSections();
  }, []);

  return (
    <main className={styles.main}>
      <Landing />
      <Description />
      <Adventure />
      <Accomodation />
      <SwimmingPool />
      <Dining />
      <Location />
      <Gallery />
      <AboutUs />
      <AristotleQuote />
      <Footer />
      <ReserveFooter show={showFooter} />
    </main>
  );
}
