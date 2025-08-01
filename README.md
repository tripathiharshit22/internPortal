# Intern Dashboard - Full Stack Project

A complete full-stack web application built with React.js, Node.js, Express.js, and styled with Tailwind CSS. This project demonstrates a simple intern management dashboard with features like login, dashboard, and leaderboard.

## 🚀 Features

### Frontend (React.js + Tailwind CSS)
- **Login/Signup Page** - Simple authentication interface (dummy login)
- **Dashboard** - Shows intern stats, progress, and rewards
- **Leaderboard** - Displays top performing interns
- **Responsive Design** - Works on desktop and mobile devices
- **Modern UI** - Clean and professional interface

### Backend (Node.js + Express.js)
- **REST API** - Simple endpoints for data fetching
- **CORS Enabled** - Allows frontend to communicate with backend
- **Dummy Data** - No database required, uses static data
- **Error Handling** - Basic error responses

## 📁 Project Structure

```
intern-portal/
├── backend/
│   ├── index.js              # Main server file
│   ├── routes/
│   │   └── intern.js         # API routes
│   ├── data/
│   │   └── dummyData.js      # Static data
│   └── package.json          # Backend dependencies
├── frontend/
│   ├── public/
│   │   └── index.html        # HTML template
│   ├── src/
│   │   ├── App.jsx           # Main app component
│   │   ├── index.js          # Entry point
│   │   ├── index.css         # Tailwind imports
│   │   ├── pages/
│   │   │   ├── Login.jsx     # Login/signup page
│   │   │   ├── Dashboard.jsx # Main dashboard
│   │   │   └── Leaderboard.jsx # Rankings page
│   │   └── components/
│   │       └── RewardCard.jsx # Reward component
│   ├── tailwind.config.js    # Tailwind configuration
│   ├── postcss.config.js     # PostCSS configuration
│   └── package.json          # Frontend dependencies
└── README.md                 # Project documentation
```

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Backend Setup

1. **Navigate to backend folder:**
   ```bash
   cd intern-portal/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the backend server:**
   ```bash
   npm start
   ```
   
   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Open a new terminal and navigate to frontend folder:**
   ```bash
   cd intern-portal/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm start
   ```
   
   The frontend will run on `http://localhost:3000`

## 🔧 API Endpoints

### Backend Routes
- `GET /api/intern` - Get intern profile data
- `GET /api/leaderboard` - Get leaderboard rankings
- `GET /api/rewards` - Get rewards/achievements data
- `POST /api/login` - Dummy login endpoint

## 💻 Usage

1. **Start both servers** (backend on port 5000, frontend on port 3000)
2. **Open browser** and go to `http://localhost:3000`
3. **Login page** - Use any email/password to login (it's dummy authentication)
4. **Dashboard** - View your stats, referral code, and rewards
5. **Leaderboard** - Check rankings and compete with other interns

## 🎯 Key Features Explained

### Dashboard Page
- **Personal Stats**: Shows total donations, referral code, and current level
- **Progress Bar**: Visual progress towards next achievement level
- **Rewards Section**: Displays unlocked and locked achievements
- **Quick Actions**: Buttons for common tasks

### Leaderboard Page
- **Top 3 Podium**: Special display for top performers
- **Full Rankings Table**: Complete list with all participants
- **Stats Summary**: Total participants, donations, and averages
- **Current User Highlight**: Your position is highlighted in blue

### Login/Signup Page
- **Toggle Interface**: Switch between login and signup
- **Form Validation**: Basic validation for required fields
- **Responsive Design**: Works on all screen sizes

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **React Router Dom** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing

## 📝 Development Notes

- **No Authentication**: This is a demo project with dummy login
- **No Database**: Uses static data stored in JavaScript files
- **Beginner Friendly**: Code is written to be easily understood
- **Clean Architecture**: Separates concerns between frontend and backend
- **Error Handling**: Basic error handling for API calls

## 🚧 Future Enhancements

- Add real authentication with JWT tokens
- Connect to MongoDB database
- Add file upload for profile pictures
- Implement real-time notifications
- Add charts and analytics
- Email functionality for referrals

