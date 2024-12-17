// src\app\reserve\page.tsx
"use client";
import { useState } from 'react';
import InquiryForm from "../../components/reserve/InquiryForm";
import styles from './page.module.css';
import NavbarGreen from '@/components/navbar/NavbarGreen';
import Footer from '@/components/footer/Footer';

export default function Reserve() {
    const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

    return (
        <>
            <NavbarGreen />
            <main className={styles.container}>
                {status === 'idle' && (
                    <>
                        <h1 className={styles.header}>LET&apos;S PLAN YOUR DREAM BANBAS!</h1>
                    </>
                )}
                <InquiryForm status={status} setStatus={setStatus} />
            </main>
            <Footer />
        </>
    );
}