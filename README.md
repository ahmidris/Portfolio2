# Professional Portfolio Website

A modern, responsive portfolio website showcasing professional projects and skills.

## Features

- Modern, clean design with dark/light mode toggle
- Responsive layout for all devices
- Interactive animations using Framer Motion
- Contact form with backend email handling
- Project showcase section
- Skills visualization
- About section with personal introduction

## Tech Stack

### Frontend
- React 18
- TailwindCSS
- Framer Motion (animations)
- Vite (bundler)

### Backend
- Node.js
- Express.js
- Nodemailer (for contact form)

## Installation

### Frontend
1. Navigate to frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Backend
1. Navigate to backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Create `.env` file based on `.env.example`
4. Start server: `npm run dev`

## Environment Variables

Create a `.env` file in the backend directory with the following:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
NODE_ENV=development
```

### Email Configuration

To set up email functionality:

1. Use a Gmail account for sending emails
2. Generate an App Password instead of using your regular Gmail password:
   - Go to Google Account settings
   - Navigate to Security
   - Select "2-Step Verification" and turn it on if not already enabled
   - Click on "App passwords"
   - Generate a new app password for "Mail"
   - Use this 16-character password in the EMAIL_PASS field

Note: For other email providers, you may need to adjust the transporter configuration in `backend/routes/contact.js`.

For the frontend, create a `.env` file in the frontend directory with:
```
VITE_API_BASE_URL=http://localhost:5000
```

## Deployment

For production, build the frontend and serve it through the backend:

1. Build frontend: `cd frontend && npm run build`
2. Set `NODE_ENV=production` in backend `.env`
3. Start backend server: `cd backend && npm start`

## License

This project is open source and available under the [MIT License](LICENSE).