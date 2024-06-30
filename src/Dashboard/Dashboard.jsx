import React from 'react';
import { motion } from 'framer-motion';
import { FaPaw, FaHeart, FaListAlt, FaTrophy, FaChartLine, FaUsers, FaHandHoldingHeart, FaCalendarAlt } from 'react-icons/fa';
import Navbar from '../pages/shared/Navbar';

const Dashboard = () => {
  const cards = [
    { icon: <FaPaw />, title: 'Pet Listings', description: 'Browse available pets for adoption', count: 150 },
    { icon: <FaHeart />, title: 'Donation Campaigns', description: 'Support our ongoing donation campaigns', count: 5 },
    { icon: <FaListAlt />, title: 'Pet Categories', description: 'Explore different types of pets', count: 10 },
    { icon: <FaTrophy />, title: 'Achievements', description: 'See our project milestones and impact', count: 25 },
    { icon: <FaChartLine />, title: 'Adoption Stats', description: 'View our adoption success rates', count: '85%' },
    { icon: <FaUsers />, title: 'Community', description: 'Join our pet lovers community', count: 5000 },
    { icon: <FaHandHoldingHeart />, title: 'Support', description: 'Get help with your adoption process', count: '24/7' },
    { icon: <FaCalendarAlt />, title: 'Events', description: 'Upcoming pet adoption events', count: 3 },
  ];

  return (
    <div className=" bg-gradient-to-br from-cyan-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-12">
          Pet Adoption Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg "
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-4xl text-blue-500">{card.icon}</div>
                  <div className="text-2xl font-bold text-blue-500">{card.count}</div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 bg-blue-500 rounded-lg shadow-lg p-6 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Did You Know?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Adopting a pet can significantly improve your mental health and overall well-being.</li>
            <li>Over 6.5 million companion animals enter animal shelters nationwide every year.</li>
            <li>Approximately 3.2 million shelter animals are adopted each year (1.6 million dogs and 1.6 million cats).</li>
            <li>About 710,000 animals who enter shelters as strays are returned to their owners (620,000 dogs and 90,000 cats).</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to make a difference?</h3>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Start Your Adoption Journey
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;