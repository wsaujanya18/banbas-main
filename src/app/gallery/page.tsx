"use client";
import styles from "./page.module.css";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Landing = dynamic(() => import('../../components/gallery/Landing'), { ssr: false });
const Collage = dynamic(() => import('../../components/gallery/Collage'), { ssr: false });
const Footer = dynamic(() => import('../../components/footer/Footer'), { ssr: false });

export default function Gallery() {
  useEffect(() => {
    const lazyLoadSections = async () => {
      await import('../../components/gallery/Collage');
      await import('../../components/footer/Footer');
    };

    lazyLoadSections();
  }, []);
  return (
    <main className={styles.main}>
      <Landing />
      <Collage />
      <Footer />
    </main>
  );
}
