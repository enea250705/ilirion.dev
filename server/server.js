import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

// Basic middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Create test account using Ethereal Email
async function createTestAccount() {
  try {
    const testAccount = await nodemailer.createTestAccount();
    console.log('Test account created:', testAccount.user);
    return testAccount;
  } catch (error) {
    console.error('Failed to create test account:', error);
    throw error;
  }
}

let transporter;

// Initialize test transporter
createTestAccount().then(testAccount => {
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  // Verify connection
  return transporter.verify();
}).then(() => {
  console.log('SMTP connection verified');
}).catch(error => {
  console.error('Failed to initialize email:', error);
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Send auto-reply
    const autoReply = {
      from: '"Ilirion AI Test" <test@ethereal.email>',
      to: email,
      subject: 'Thank you for contacting Ilirion',
      text: `Dear ${name},\n\nThank you for your message. We will respond shortly.\n\nBest regards,\nIlirion Team`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Thank you for contacting Ilirion</h2>
          <p>Dear ${name},</p>
          <p>Thank you for your message. We will respond shortly.</p>
          <p>Best regards,<br>Ilirion Team</p>
        </div>
      `
    };

    console.log('Sending auto-reply...');
    const autoReplyInfo = await transporter.sendMail(autoReply);
    console.log('Auto-reply sent:', autoReplyInfo.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(autoReplyInfo));

    // Send notification
    const notification = {
      from: '"Ilirion Contact Form Test" <test@ethereal.email>',
      to: 'info@ilirion.dev',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    console.log('Sending notification...');
    const notificationInfo = await transporter.sendMail(notification);
    console.log('Notification sent:', notificationInfo.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(notificationInfo));

    res.json({
      message: 'Test emails sent successfully',
      autoReplyPreview: nodemailer.getTestMessageUrl(autoReplyInfo),
      notificationPreview: nodemailer.getTestMessageUrl(notificationInfo)
    });

  } catch (error) {
    console.error('Email error:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    });

    res.status(500).json({
      error: 'Failed to send test emails',
      details: error.message
    });
  }
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});