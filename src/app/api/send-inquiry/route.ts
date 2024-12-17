// src/app/api/send-inquiry/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/utils/email/emailNotifier';

export async function POST(request: NextRequest) {
    const { firstName, lastName, email, phone, lodges, arrivalDate, departureDate, travelerType, adults, children, ages, comments } = await request.json();

    const inquiryContent = `
    <p>New Inquiry from Banbas Website</p>
    <ul>
      <li><strong>Name:</strong> ${firstName} ${lastName}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${phone}</li>
      <li><strong>Preferred Lodges:</strong> ${lodges}</li>
      <li><strong>Arrival Date:</strong> ${arrivalDate}</li>
      <li><strong>Departure Date:</strong> ${departureDate}</li>
      <li><strong>Traveler Type:</strong> ${travelerType}</li>
      <li><strong>Number of Adults:</strong> ${adults}</li>
      <li><strong>Number of Children:</strong> ${children}</li>
      <li><strong>Ages of Children:</strong> ${ages}</li>
      <li><strong>Comments:</strong> ${comments}</li>
    </ul>
  `;

    const confirmationContent = `
    <p>Dear ${firstName} ${lastName},</p>
    <p>Thank you for your inquiry. We have received your request and will get back to you shortly.</p>
    <p>Best regards,<br/>Banbas Resort Team</p>
  `;

    try {
        await sendEmail(process.env.BANBAS_EMAIL!, `New Inquiry from Banbas Website: ${firstName} ${lastName}`, inquiryContent);
        await sendEmail(email, 'Thank you for your inquiry - Banbas Resort', confirmationContent);
        return NextResponse.json({ message: 'Inquiry and confirmation emails sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
}
