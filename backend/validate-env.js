require('dotenv').config();

function validateEnvironment() {
  console.log('Validating environment variables...\n');

  let hasErrors = false;

  // Check required environment variables
  if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'your-email@gmail.com') {
    console.error('❌ EMAIL_USER is not properly configured');
    console.log('   Set EMAIL_USER to your actual email address in .env file');
    hasErrors = true;
  } else {
    console.log('✅ EMAIL_USER is configured');
  }

  if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your-16-digit-app-password') {
    console.error('❌ EMAIL_PASS is not properly configured');
    console.log('   Set EMAIL_PASS to your app password in .env file');
    hasErrors = true;
  } else {
    console.log('✅ EMAIL_PASS is configured');
  }

  if (!process.env.PORT) {
    console.warn('⚠️  PORT is not set, using default port 8081');
  } else {
    console.log(`✅ PORT is set to ${process.env.PORT}`);
  }

  if (hasErrors) {
    console.log('\n 🔧 Please update your .env file with proper values before starting the server.');
    console.log('\n 💡 Tip: For Gmail, use an App Password (not your regular password)');
    console.log('    Generate one at: https://myaccount.google.com/apppasswords');
    process.exit(1);
  } else {
    console.log('\n 🎉 All environment variables are properly configured!');
  }
}

validateEnvironment();