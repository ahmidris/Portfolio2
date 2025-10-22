# Portfolio Backend - Quick Start Guide

## Prerequisites

- Node.js installed on your system
- A Gmail account with 2-Factor Authentication enabled

## Setup Instructions

### 1. Environment Variables

Before starting the server, you need to configure your email settings:

1. Copy the `.env.example` file to create a `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and update these values:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail App Password (not your regular password!)

### 2. Generate Gmail App Password

If you're using Gmail, you need an App Password instead of your regular password:

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to "Security"
3. Enable 2-Factor Authentication if not already enabled
4. Under "2-Step Verification", find "App passwords"
5. Generate a new app password for "Mail"
6. Use this 16-character password as your `EMAIL_PASS`

### 3. Install Dependencies

```bash
cd backend
npm install
```

### 4. Validate Configuration

Before starting the server, verify your environment configuration:

```bash
node validate-env.js
```

### 5. Start the Server

```bash
node server.js
```

## Testing Email Configuration

You can test your email configuration separately:

```bash
node test-email.js
```

## Troubleshooting

- If you get `535-5.7.8 Username and Password not accepted` error:
  - Verify you're using an App Password (16 characters), not your regular Gmail password
  - Ensure your Gmail account has 2-Factor Authentication enabled

- For other email providers:
  - Update the transporter configuration in `routes/contact.js` with appropriate SMTP settings
  - Some providers may require different configuration options

## Contact Form

Once configured properly, the contact form will:
- Accept name, email, and message from the frontend
- Validate all inputs
- Send emails to your configured `EMAIL_USER`
- Reply-to will be set to the sender's email