# Portfolio Website Setup Guide

This guide will help you set up and run the portfolio website locally.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Frontend Setup (React App)

### 1. Navigate to the frontend directory
```bash
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Backend Setup (Node.js API)

### 1. Navigate to the backend directory
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create environment variables
Create a `.env` file in the backend directory:
```bash
cp .env.example .env
```

Then update the values in the `.env` file with your actual values:
- `EMAIL_USER`: Your email address for receiving messages
- `EMAIL_PASS`: Your app-specific password (for Gmail, you need to generate an app password)
- `PORT`: Port for the server to run on (default: 5000)

### 4. Start the backend server
```bash
npm run dev
```

The backend will be available at `http://localhost:5000`

## Development Workflow

During development, you'll likely want to run both the frontend and backend concurrently. You can do this by opening two terminal windows:

1. Terminal 1: Run the backend server in the `backend` directory
2. Terminal 2: Run the frontend development server in the `frontend` directory

## Setting up Email Notifications

The contact form sends emails to your specified email address using Nodemailer. For Gmail:

1. Enable 2-factor authentication on your Google account
2. Generate an app-specific password (not your regular password)
3. Add the app password to the `EMAIL_PASS` environment variable

## Production Build

### To build the frontend for production:
```bash
cd frontend
npm run build
```

### To run the production server:
1. Build the frontend first
2. Set `NODE_ENV=production` in your backend `.env` file
3. Start the backend server:
```bash
npm start
```

## API Endpoints

- `POST /api/contact` - Send a contact message

## Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   └── ...
│   ├── package.json
│   └── ...
├── backend/
│   ├── routes/
│   ├── config/
│   ├── __tests__/
│   ├── server.js
│   └── package.json
└── README.md
```

## Troubleshooting

### Frontend Issues

- If you get module errors, try deleting `node_modules` and running `npm install` again
- Make sure you're using a compatible version of Node.js

### Backend Issues

- Ensure your environment variables are set correctly
- Check that your email settings are configured properly for your email provider
- If using Gmail, make sure you're using an app-specific password