const internData = {
    id: 1,
    name: "Harshit Mani Tripathi",
    email: "harshit@example.com",
    referralCode: "harshit2025",
    totalDonations: 15750,
    donationsCount: 23,
    joinedDate: "2024-01-15",
    level: "Silver",
    nextLevelTarget: 20000
  };
  
  const leaderboardData = [
    {
      id: 1,
      name: "Priya Sharma", 
      referralCode: "priya2024",
      totalDonations: 25300,
      rank: 1
    },
    {
      id: 2,
      name: "Rahul Singh",
      referralCode: "rahul2025", 
      totalDonations: 22100,
      rank: 2
    },
    {
      id: 3,
      name: "Ananya Gupta",
      referralCode: "ananya123",
      totalDonations: 18900,
      rank: 3
    },
    {
      id: 4,
      name: "Harshit Mani Tripathi",
      referralCode: "harshit2025",
      totalDonations: 15750,
      rank: 4
    },
    {
      id: 5,
      name: "Vikash Yadav",
      referralCode: "vikash2024",
      totalDonations: 12400,
      rank: 5
    }
  ];
  
  const rewardsData = [
    {
      id: 1,
      title: "Bronze Level",
      description: "Reach ₹5,000 in donations",
      target: 5000,
      unlocked: true,
      reward: "Certificate + Badge"
    },
    {
      id: 2,  
      title: "Silver Level",
      description: "Reach ₹15,000 in donations",
      target: 15000,
      unlocked: true,
      reward: "Certificate + T-shirt"
    },
    {
      id: 3,
      title: "Gold Level", 
      description: "Reach ₹25,000 in donations",
      target: 25000,
      unlocked: false,
      reward: "Certificate + Laptop Bag"
    },
    {
      id: 4,
      title: "Platinum Level",
      description: "Reach ₹50,000 in donations", 
      target: 50000,
      unlocked: false,
      reward: "Certificate + Cash Prize ₹5,000"
    }
  ];
  
  module.exports = {
    internData,
    leaderboardData,
    rewardsData
  };