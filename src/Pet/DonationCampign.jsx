// src/components/DonationCampaign/DonationCampaign.jsx
import { useState, useEffect } from "react";
import DonationCamCard from "./DonationCamCard";
import { FaPaw } from "react-icons/fa";
import { MdPets, MdVolunteerActivism } from "react-icons/md";
import axios from "axios";

const DonationCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('https://assignment-12-server-two-smoky.vercel.app/pet-listing');
        setCampaigns(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch campaigns');
        setIsLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-center">
          <p className="text-xl">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <FaPaw className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Help Our Furry Friends
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Your donation can make a difference in the lives of animals in need
            </p>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center bg-white/10 rounded-lg p-6">
              <MdPets className="w-10 h-10 mb-3" />
              <span className="text-3xl font-bold">1,200+</span>
              <span className="text-sm opacity-90">Pets Helped</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-lg p-6">
              <MdVolunteerActivism className="w-10 h-10 mb-3" />
              <span className="text-3xl font-bold">$50K+</span>
              <span className="text-sm opacity-90">Donations Raised</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-lg p-6">
              <FaPaw className="w-10 h-10 mb-3" />
              <span className="text-3xl font-bold">500+</span>
              <span className="text-sm opacity-90">Active Campaigns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns Section */}
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Active Donation Campaigns
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton Loading
            [...Array(6)].map((_, idx) => <SkeletonCard key={idx} />)
          ) : (
            campaigns.map((campaign) => (
              <DonationCamCard key={campaign._id} campaign={campaign} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// Skeleton Loading Component
const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
        <div className="space-y-3">
          <div className="h-5 bg-gray-300 rounded w-2/3"></div>
          <div className="h-5 bg-gray-300 rounded w-1/2"></div>
          <div className="h-2.5 bg-gray-300 rounded-full w-full"></div>
        </div>
        <div className="mt-6 h-12 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default DonationCampaign;