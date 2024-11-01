// src/components/PetCampaignList.js
import { useEffect, useState } from 'react';
import { 
  Heart,
 
  
  Target,

  AlertTriangle,
  Search,
  Filter,

  HeartHandshake,
  PawPrint
} from 'lucide-react';
import CampaignCard from './CampaignCard';
import CampaignSkeleton from './CampaignSkeleton';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/donation-campaign')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch campaigns');
        return res.json();
      })
      .then((data) => {
        setCampaigns(data.campaigns);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching campaigns:', error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (error) {
    return (
      <div className="p-8 text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-lg font-semibold text-red-600">Error Loading Campaigns</h3>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="relative">
              <PawPrint className="w-16 h-16 mx-auto mb-6 animate-bounce text-white" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <Heart className="w-6 h-6 text-red-400 animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Help Our Furry Friends
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Your donation can make a difference in the lives of animals in need
            </p>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatCard 
              icon={<PawPrint className="w-10 h-10" />}
              value="1,200+"
              label="Pets Helped"
            />
            <StatCard 
              icon={<HeartHandshake className="w-10 h-10" />}
              value="$50K+"
              label="Donations Raised"
            />
            <StatCard 
              icon={<Target className="w-10 h-10" />}
              value="500+"
              label="Active Campaigns"
            />
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search campaigns..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="Medical">Medical Care</option>
                <option value="shelter">Shelter</option>
                <option value="food">Food & Supplies</option>
                <option value="rescue">Rescue Operations</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns Section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Active Donation Campaigns
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <>
              <CampaignSkeleton />
              <CampaignSkeleton />
              <CampaignSkeleton />
              <CampaignSkeleton />
              <CampaignSkeleton />
              <CampaignSkeleton />
            </>
          ) : filteredCampaigns.length > 0 ? (
            filteredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="flex flex-col items-center gap-4">
                <PawPrint className="w-12 h-12 text-gray-400" />
                <p className="text-gray-600">No campaigns found matching your criteria.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <div className="mb-3">
        {icon}
      </div>
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm opacity-90">{label}</span>
    </div>
  );
};

export default CampaignList;