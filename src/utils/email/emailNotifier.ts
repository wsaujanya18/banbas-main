// src/utils/email/emailNotifier.ts
import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';
import { emailTemplateString } from './emailTemplateString';

interface TemplateData {
    content: string;
    subject: string;
}

export function getEmailTemplate(data: TemplateData): string {
    let template = emailTemplateString;
    template = template.replace('{{email_content}}', data.content);
    template = template.replace('{{email_subject}}', data.subject);
    return template;
}

const sendEmail = async (destination: string, subject: string, message: string) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.BANBAS_EMAIL,
        to: destination,
        subject,
        html: getEmailTemplate({ content: message, subject }),
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error('Error sending email');
    }
};

export { sendEmail };
