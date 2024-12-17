// src/app/pages/Terms.tsx
"use client";
import Footer from "@/components/footer/Footer";
import NavbarGreen from "../../components/navbar/NavbarGreen";
import styles from './Terms.module.css';

export default function Terms() {
    return (
        <>
            <NavbarGreen />
            <div className={styles.termsContainer}>
                <h1>Terms &amp; Conditions</h1>
                <p>These terms and conditions outline the rules and regulations for the use of Banbas&apos;s Website, located at www.banbas.com. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Banbas&apos;s website if you do not accept all of the terms and conditions stated on this page.</p>

                <h2>Cookies:</h2>
                <p>The Banbas website uses cookies to enhance user experience. By using our website, you consent to the use of cookies in accordance with Banbas&apos;s privacy policy.</p>

                <h2>License:</h2>
                <p>Unless otherwise stated, Banbas and/or its licensors own the intellectual property rights for all material on Banbas. All intellectual property rights are reserved. You may view and/or print pages from http://www.banbas.com for your own personal use subject to restrictions set in these terms and conditions.</p>
                <ul>
                    <li>You must not republish material from Banbas</li>
                    <li>Sell, rent, or sub-license material from Banbas</li>
                    <li>Reproduce, duplicate, or copy material from Banbas</li>
                    <li>Redistribute content from Banbas</li>
                </ul>

                <h2>User Comments:</h2>
                <p>This Agreement shall begin on the date hereof. Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material, and data (&apos;Comments&apos;) in areas of the website. Banbas does not screen, edit, publish, or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of Banbas, its agents, or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws, Banbas shall not be responsible or liable for the Comments or for any loss, liability, damages, or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website. Banbas reserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive, or otherwise in breach of these Terms and Conditions.</p>

                <h2>Disclaimer:</h2>
                <p>The information on this website is provided on an &quot;as is&quot; basis. Banbas makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
            </div>
            <Footer />
        </>
    );
}
