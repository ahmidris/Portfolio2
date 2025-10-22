require('dotenv').config();

const nodemailer = require('nodemailer');

// Test email configuration
async function testEmailConfig() {
  console.log('Testing email configuration...\n');

  // Check if required environment variables are set
  if (!process.env.EMAIL_USER) {
    console.error('ERROR: EMAIL_USER is not set in environment variables.');
    console.log('Please set EMAIL_USER to your email address in the .env file.');
    return;
  }

  if (!process.env.EMAIL_PASS) {
    console.error('ERROR: EMAIL_PASS is not set in environment variables.');
    console.log('Please set EMAIL_PASS to your app password in the .env file.');
    return;
  }

  // Create transporter
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    // Verify the transporter configuration
    await transporter.verify();
    console.log('✓ Email configuration is valid!');
    console.log('✓ Connection to SMTP server successful.');
    console.log(`✓ Using email: ${process.env.EMAIL_USER}`);
    console.log('\nYou can now use the contact form successfully.');
  } catch (error) {
    console.error('✗ Email configuration error:');
    console.error(error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\nThis error typically occurs when:');
      console.log('1. EMAIL_USER is not a valid Gmail address');
      console.log('2. EMAIL_PASS is not a correct App Password');
      console.log('3. Less secure app access is disabled (for non-Gmail providers)');
      console.log('4. 2-Factor Authentication is required but not set up properly');
    }
  }
}

// Run the test
testEmailConfig();