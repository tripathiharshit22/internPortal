import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/leaderboard');
      const result = await response.json();
      
      if (result.success) {
        setLeaderboardData(result.data);
      }
    } catch (error) {
      console.log('Error fetching leaderboard data:', error);

      setLeaderboardData([
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
      ]);
    }
    setLoading(false);
  };

  // Get rank color and icon
  const getRankStyle = (rank) => {
    switch (rank) {
      case 1:
        return {
          bg: 'bg-yellow-100',
          text: 'text-yellow-800',
          icon: '🏆'
        };
      case 2:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          icon: '🥈'
        };
      case 3:
        return {
          bg: 'bg-orange-100',
          text: 'text-orange-800',
          icon: '🥉'
        };
      default:
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-800',
          icon: '👤'
        };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading leaderboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* navigation header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">
              Leaderboard
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate('/login')}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Top Performers
          </h2>
          <p className="text-gray-600 mt-2">
            See how you stack up against other interns
          </p>
        </div>

        {/* top 3 podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {leaderboardData.slice(0, 3).map((intern) => {
            const style = getRankStyle(intern.rank);
            return (
              <div 
                key={intern.id}
                className={`${style.bg} rounded-lg p-6 text-center ${
                  intern.rank === 1 ? 'md:order-2 transform md:scale-110' : 
                  intern.rank === 2 ? 'md:order-1' : 'md:order-3'
                }`}
              >
                <div className="text-4xl mb-3">{style.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {intern.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  @{intern.referralCode}
                </p>
                <p className={`text-2xl font-bold ${style.text}`}>
                  ₹{intern.totalDonations.toLocaleString()}
                </p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-3 ${style.bg} ${style.text}`}>
                  Rank #{intern.rank}
                </div>
              </div>
            );
          })}
        </div>

        {/* full leaderboard table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Complete Rankings
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Intern
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Referral Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Donations
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leaderboardData.map((intern) => {
                  const style = getRankStyle(intern.rank);
                  const isCurrentUser = intern.referralCode === 'harshit2025';
                  
                  return (
                    <tr 
                      key={intern.id}
                      className={`${isCurrentUser ? 'bg-blue-50 border-l-4 border-blue-500' : 'hover:bg-gray-50'}`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-2xl mr-2">{style.icon}</span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
                            #{intern.rank}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {intern.name}
                          {isCurrentUser && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                              You
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          @{intern.referralCode}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">
                          ₹{intern.totalDonations.toLocaleString()}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* stats summary */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">
              {leaderboardData.length}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Total Participants
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-green-600">
              ₹{leaderboardData.reduce((total, intern) => total + intern.totalDonations, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Total Donations Raised
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">
              ₹{Math.round(leaderboardData.reduce((total, intern) => total + intern.totalDonations, 0) / leaderboardData.length).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Average per Intern
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;