const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Contact form handler
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Sanitize input to prevent email header injection
    const sanitizedName = name.replace(/[\r\n]/g, '');
    const sanitizedEmail = email.replace(/[\r\n]/g, '');
    const sanitizedMessage = message.replace(/[\r\n]/g, '');

    // Validate that sanitized data is not empty
    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid input data' 
      });
    }

    // Check if required environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration is missing. Please set EMAIL_USER and EMAIL_PASS in environment variables.');
      return res.status(500).json({ 
        success: false, 
        message: 'Email configuration error. Please check server configuration (EMAIL_USER and EMAIL_PASS must be set).' 
      });
    }

    // Create transporter (using environment variables for security)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // Use App Password, not regular password
      }
    });

    // Verify credentials before sending
    await transporter.verify();

    // Verify transporter configuration
    transporter.verify((error, success) => {
      if (error) {
        console.error('Transporter configuration error:', error);
        // Don't return here since this is a callback; the error will be caught when sending
      }
    });

    // Email options
    const mailOptions = {
      from: `"${sanitizedName}" <${process.env.EMAIL_USER}>`, // Use the configured email as sender
      to: process.env.EMAIL_USER,
      replyTo: sanitizedEmail, // Set the original email as reply-to
      subject: `Portfolio Contact: Message from ${sanitizedName}`,
      text: `From: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    // Provide more specific error messages for authentication issues
    if (error.code === 'EAUTH') {
      console.error('Email authentication failed. Check EMAIL_USER and EMAIL_PASS in environment variables.');
      return res.status(500).json({ 
        success: false, 
        message: 'Email configuration error. Please contact the site administrator.' 
      });
    }
    // Don't expose detailed error messages to the client for security
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

module.exports = router;