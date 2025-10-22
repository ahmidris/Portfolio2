# Portfolio Backend - Email Configuration

## Fixing Email Authentication Issues

If you're encountering the error `Invalid login: 535-5.7.8 Username and Password not accepted`, follow these steps:

### Step 1: Generate a Gmail App Password (Required for Gmail)

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to "Security"
3. Under "Signing in to Google," select "2-Step Verification"
4. Scroll down to "App passwords"
5. Select "Mail" as the app and "Windows Computer" (or your device) as the device
6. Google will generate a 16-character password (e.g., "abcd efgh ijkl mnop")

### Step 2: Update Environment Variables

Replace the values in your `.env` file:

```env
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=your-16-character-app-password
PORT=8081
NODE_ENV=development
```

### Step 3: Verify Your Setup

You can test your email configuration independently using:

```bash
cd backend
node test-email.js
```

### Alternative: Using Other Email Providers

If you're using an email provider other than Gmail, you may need different SMTP settings:

For Outlook/Hotmail:
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
# Update routes/contact.js to use appropriate SMTP settings
```

### Troubleshooting Common Issues

1. **"Username and Password not accepted"**:
   - Make sure you're using an App Password, not your regular email password
   - Verify the email address is correct

2. **"Invalid login"**:
   - Check for typos in your credentials
   - Ensure 2-factor authentication is enabled on your Google account

3. **Still having issues?**:
   - Check that your account allows less secure apps (if not using Gmail)
   - Verify that your network/firewall is not blocking SMTP connections