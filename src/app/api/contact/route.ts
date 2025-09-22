import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // For now, we'll just log the form data and return success
    // In a real implementation, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to a database
    // 3. Send notifications
    
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending (replace with actual email service)
    const emailData = {
      to: 'lacry_petro@yahoo.com',
      from: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('ro-RO')}</p>
      `,
    };

    // TODO: Implement actual email sending
    // For now, we'll just log it
    console.log('Email would be sent:', emailData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully. We will contact you soon!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
