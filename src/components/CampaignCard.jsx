import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  const {
    _id,
    id,
    title,
    description,
    target,
    raised,
    donors,
    daysLeft,
    priority,
    imageUrl,
    category,
    lastUpdate
  } = campaign;

  const progressPercentage = Math.min((raised / target) * 100, 100).toFixed(2);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-600';
      case 'medium':
        return 'bg-yellow-100 text-yellow-600';
      case 'low':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="relative">
        <img
          src="https://i.ibb.co.com/c1WsSXd/donate.jpg"
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(priority)}`}>
          {priority}
        </span>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-primary-600">
            {category}
          </span>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-semibold text-primary-600">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 rounded-full h-2 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-primary-600">{formatCurrency(raised)}</span>
            <span className="text-gray-600">of {formatCurrency(target)}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-gray-900">{donors}</p>
            <p className="text-xs text-primary-600">Donors</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-gray-900">{daysLeft}</p>
            <p className="text-xs text-gray-600">Days Left</p>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Last updated: {lastUpdate}
          </p>
        </div>

        <Link 
          to={`/donation-list/${_id}`}
          className="block w-full text-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default CampaignCard;