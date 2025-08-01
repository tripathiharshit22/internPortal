const express = require('express');
const router = express.Router();
const { internData, leaderboardData, rewardsData } = require('../data/dummyData');

// Get intern data
router.get('/intern', (req, res) => {
  try {
    res.json({
      success: true,
      data: internData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching intern data'
    });
  }
});

// Get leaderboard data  
router.get('/leaderboard', (req, res) => {
  try {
    res.json({
      success: true,
      data: leaderboardData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching leaderboard data'
    });
  }
});

// Get rewards data
router.get('/rewards', (req, res) => {
  try {
    res.json({
      success: true, 
      data: rewardsData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching rewards data'
    });
  }
});


router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  if (email && password) {
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: 1,
        email: email,
        name: internData.name
      }
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Email and password required'
    });
  }
});

module.exports = router;