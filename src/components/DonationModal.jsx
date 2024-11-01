// src/components/DonationModal.js
import React, { useState } from 'react';


const DonationModal = ({ campaign, closeModal }) => {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonate = () => {
    fetch(`/api/campaigns/donate/${campaign.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: donationAmount }),
    })
      .then((res) => res.json())
      .then(() => {
        closeModal();
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <h3 className="text-2xl font-semibold mb-4">Donate to {campaign.title}</h3>
        <input
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-4"
          placeholder="Enter donation amount"
        />
        <button onClick={handleDonate} className="bg-primary-600 text-white px-4 py-2 rounded-md">
          Confirm Donation
        </button>
        <button onClick={closeModal} className="ml-4 text-gray-500">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DonationModal;
