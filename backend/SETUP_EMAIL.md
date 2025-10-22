# Email Configuration Guide

To fix the email authentication error, follow these steps to configure your Gmail account properly:

## Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to "Security" 
3. Enable 2-Factor Authentication if not already enabled

## Step 2: Create an App Password
1. Go to your Google Account settings
2. Navigate to "Security" 
3. Under "2-Step Verification", find "App passwords"
4. Select "Mail" as the app and "Windows Computer" (or your device) as the device
5. Google will generate a 16-character password (e.g., "abcd efgh ijkl mnop")

## Step 3: Update Your Environment Variables
Replace the placeholder values in your `.env` file with:
- `EMAIL_USER` = your actual Gmail address (e.g., "yourname@gmail.com")
- `EMAIL_PASS` = the 16-character app password you generated (e.g., "abcd efgh ijkl mnop")

Example `.env` file:
```
EMAIL_USER=yourname@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
PORT=8081
NODE_ENV=development
```

## Step 4: Restart the Server
After updating the `.env` file, restart your server for the changes to take effect.

## Alternative: Use a Different Email Service
If you continue having issues with Gmail, you can use other email services like:
- Outlook/Hotmail
- Yahoo Mail 
- SendGrid
- Mailgun

For other services, you would need to update the transporter configuration in `routes/contact.js` to match the service's SMTP settings.