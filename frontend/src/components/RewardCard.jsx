import React from 'react';

function RewardCard({ reward }) {
  return (
    <div className={`rounded-lg p-6 border-2 ${
      reward.unlocked 
        ? 'bg-green-50 border-green-200' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      {/* Status Icon */}
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-full ${
          reward.unlocked 
            ? 'bg-green-100' 
            : 'bg-gray-100'
        }`}>
          {reward.unlocked ? (
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          )}
        </div>
        
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          reward.unlocked 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-600'
        }`}>
          {reward.unlocked ? 'Unlocked' : 'Locked'}
        </span>
      </div>



      {/* Reward Title */}
      <h4 className={`text-lg font-semibold mb-2 ${
        reward.unlocked 
          ? 'text-gray-900' 
          : 'text-gray-500'
      }`}>
        {reward.title}
      </h4>

      {/* Reward Description */}
      <p className={`text-sm mb-3 ${
        reward.unlocked 
          ? 'text-gray-700' 
          : 'text-gray-500'
      }`}>
        {reward.description}
      </p>

      {/* Reward Details */}
      <div className={`text-sm font-medium ${
        reward.unlocked 
          ? 'text-green-700' 
          : 'text-gray-600'
      }`}>
        🎁 {reward.reward}
      </div>




      {/* Target Amount */}
      {reward.target && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Target:</span>
            <span className="font-medium">₹{reward.target.toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default RewardCard;