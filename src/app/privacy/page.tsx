// src/app/pages/Privacy.tsx
"use client";
import Footer from "@/components/footer/Footer";
import NavbarGreen from "../../components/navbar/NavbarGreen";
import styles from './Privacy.module.css';

export default function Privacy() {
    return (
        <>
            <NavbarGreen />
            <div className={styles.privacyContainer}>
                <h1>Privacy Policy</h1>
                <p>Last updated: March 2024</p>
                <p>Welcome to Banbas. Your privacy is of paramount importance to us. This privacy policy (&quot;Policy&quot;) describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>

                <h2>Information We Collect:</h2>
                <h3>Information You Provide to Us</h3>
                <ul>
                    <li>Personal Information: This includes information by which you may be personally identified, such as name, postal address, email address, and telephone number.</li>
                    <li>Reservation Details: Information you provide when making a booking through our Website.</li>
                    <li>Feedback and Communication: Any feedback, comments, or communication you may send us.</li>
                </ul>

                <h3>Information We Collect Automatically</h3>
                <p>As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:</p>
                <ul>
                    <li>Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website.</li>
                    <li>Information about your computer and internet connection, including your IP address, operating system, and browser type.</li>
                </ul>
                <p>The technologies we use for this automatic data collection may include cookies (or browser cookies).</p>

                <h2>How We Use Your Information</h2>
                <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                <ul>
                    <li>To present our Website and its contents to you.</li>
                    <li>To fulfill any other purpose for which you provide it.</li>
                    <li>To provide you with information, products, or services that you request from us.</li>
                    <li>To notify you about changes to our Website or any products or services we offer or provide through it.</li>
                    <li>To allow you to participate in interactive features on our Website.</li>
                </ul>

                <h2>Disclosure of Your Information</h2>
                <p>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
                <ul>
                    <li>To our subsidiaries and affiliates.</li>
                    <li>To contractors, service providers, and other third parties we use to support our business.</li>
                    <li>To fulfill the purpose for which you provide it.</li>
                    <li>For any other purpose disclosed by us when you provide the information.</li>
                </ul>

                <h2>Data Security</h2>
                <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depend on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential.</p>

                <h2>Changes to Our Privacy Policy</h2>
                <p>It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users&apos; personal information, we will notify you through a notice on the Website home page.</p>

                <h2>Contact Information</h2>
                <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: info@banbas.com</p>
            </div>
            <Footer />
        </>
    );
}
