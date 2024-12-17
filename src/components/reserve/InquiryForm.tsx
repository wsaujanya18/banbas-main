// src\components\reserve\InquiryForm.tsx
'use client';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from './InquiryForm.module.css';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import WaitingMessage from './WaitingMessage';

interface InquiryFormProps {
    status: 'idle' | 'success' | 'error' | 'loading';
    setStatus: (status: 'idle' | 'success' | 'error' | 'loading') => void;
}

const InquiryForm = ({ status, setStatus }: InquiryFormProps) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        lodges: '',
        arrivalDate: '',
        departureDate: '',
        travelerType: '',
        adults: '',
        children: '',
        ages: '',
        comments: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handlePhoneChange = (value: string | undefined) => {
        setFormData((prevData) => ({ ...prevData, phone: value || '' }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('/api/send-inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting inquiry:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={styles.messageContainer}>
                <SuccessMessage />
            </div>
        );
    }

    return (
        <>
            {status === 'error' && (
                <div className={styles.messageContainer}>
                    <ErrorMessage />
                </div>
            )}
            {status === 'loading' && (
                <div className={styles.messageContainer}>
                    <WaitingMessage />
                </div>
            )}
            {status === 'idle' && (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.fieldGroup}>
                        <div className={styles.field}>
                            <label htmlFor="firstName">First Name *</label>
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="lastName">Last Name *</label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className={styles.fieldGroup}>
                        <div className={styles.field}>
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="phone">Phone *</label>
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                defaultCountry="US"
                                international
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.fieldGroup}>
                        <div className={styles.field}>
                            <label htmlFor="lodges">Preferred Lodges *</label>
                            <select id="lodges" name="lodges" value={formData.lodges} onChange={handleChange} required>
                                <option value="">-- Select Preferred Lodges --</option>
                                <option value="Deluxe">Deluxe</option>
                                <option value="Executive Deluxe">Executive Deluxe</option>
                                <option value="Suite">Suite</option>
                                <option value="Vilasa Suite">Vilasa Suite</option>
                            </select>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="arrivalDate">Arrival Date</label>
                            <input
                                type="date"
                                id="arrivalDate"
                                name="arrivalDate"
                                value={formData.arrivalDate}
                                onChange={handleChange}
                                min={new Date().toISOString().split('T')[0]} 
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="departureDate">Departure Date</label>
                            <input
                                type="date"
                                id="departureDate"
                                name="departureDate"
                                value={formData.departureDate}
                                onChange={handleChange}
                                min={formData.arrivalDate || new Date().toISOString().split('T')[0]} 
                            />
                        </div>
                    </div>
                    <div className={styles.fieldGroup}>
                        <div className={styles.field}>
                            <label htmlFor="travelerType">Traveler Type *</label>
                            <select id="travelerType" name="travelerType" value={formData.travelerType} onChange={handleChange} required>
                                <option value="">-- Select Traveler Type --</option>
                                <option value="Couple">Couple</option>
                                <option value="Family">Family</option>
                                <option value="Friends">Friends</option>
                                <option value="Solo">Solo</option>
                                <option value="Honeymoon">Honeymoon</option>
                                <option value="Business">Business</option>
                                <option value="Special Occasion (Anniversary / Birthday)">Special Occasion (Anniversary / Birthday)</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="adults">Number Of Adults *</label>
                            <input type="number" id="adults" name="adults" value={formData.adults} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className={styles.fieldGroup}>
                        <div className={styles.field}>
                            <label htmlFor="children">Number Of Children</label>
                            <input type="number" id="children" name="children" value={formData.children} onChange={handleChange} />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="ages">Ages Of Children (Comma Separated)</label>
                            <input type="text" id="ages" name="ages" value={formData.ages} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="comments">Comments Or Additional Information</label>
                        <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange}></textarea>
                    </div>
                    <div className={styles.checkboxGroup}>
                        <div className={styles.checkboxField}>
                            <input type="checkbox" id="agree" name="agree" required />
                            <label htmlFor="agree">By using this form you agree with the storage and handling of your data by this website.</label>
                        </div>
                    </div>
                    <button type="submit" className={styles.submitButton}>SEND ENQUIRY</button>
                </form>
            )}
        </>
    );
};

export default InquiryForm;
