// src/components/DonationCampaign/DonationCamCard.jsx
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaDollarSign } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import { useState } from 'react';

const DonationCamCard = ({ campaign }) => {
  const { _id, name, picture, amount, description, category } = campaign;
  console.log(campaign)
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const progress = Math.min((amount /1000) * 100, 100);
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative">
        <img
          src={imageError ? '/api/placeholder/400/300' : picture}
          alt={name}
          onError={handleImageError}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
        >
          {isLiked ? (
            <FaHeart className="w-5 h-5 text-red-500" />
          ) : (
            <FaRegHeart className="w-5 h-5 text-gray-400" />
          )}
        </button>
        <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <MdPets className="w-5 h-5 text-primary-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {description || "Help support this wonderful cause"}
        </p>

        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <div className="flex items-center text-primary-600">
              <FaDollarSign className="w-4 h-4 mr-1" />
              <span className="font-medium">Raised: ${amount}</span>
            </div>
            <span className="text-gray-600 font-medium">
              Goal: ${10000}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-primary-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-right text-sm text-primary-600 font-medium">
            {progress.toFixed(1)}% Funded
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/moredetail2/${_id}`}
          className="mt-6 block w-full text-center bg-primary-600 text-white py-3 rounded-lg transition-colors duration-300 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default DonationCamCard;