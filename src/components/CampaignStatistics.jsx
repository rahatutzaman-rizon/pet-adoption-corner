// src/components/CampaignStatistics.js

import React from 'react';

const CampaignStatistics = ({ statistics }) => {
  const { totalRaised, totalDonors, activeCampaigns, successfulCampaigns, topCategories } = statistics;

  return (
    <div className="bg-gray-100 p-4 mb-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Campaign Statistics</h2>
      <p className="text-sm text-gray-700">Total Raised: ${totalRaised.toLocaleString()}</p>
      <p className="text-sm text-gray-700">Total Donors: {totalDonors}</p>
      <p className="text-sm text-gray-700">Active Campaigns: {activeCampaigns}</p>
      <p className="text-sm text-gray-700">Successful Campaigns: {successfulCampaigns}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Top Categories</h3>
        <ul className="list-disc ml-5">
          {topCategories.map((category) => (
            <li key={category.name} className="text-sm text-gray-700">
              {category.name}: ${category.amount.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CampaignStatistics;
