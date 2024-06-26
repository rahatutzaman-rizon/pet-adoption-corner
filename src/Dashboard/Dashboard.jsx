import React from 'react';
import { motion } from 'framer-motion';
import { FaPaw, FaHeart, FaListAlt, FaTrophy } from 'react-icons/fa';
import Navbar from '../pages/shared/Navbar';


const Dashboard = () => {
  const cards = [
    { icon: <FaPaw />, title: 'Pet Listings', description: 'Browse available pets for adoption' },
    { icon: <FaHeart />, title: 'Donation Campaigns', description: 'Support our ongoing donation campaigns' },
    { icon: <FaListAlt />, title: 'Pet Categories', description: 'Explore different types of pets' },
    { icon: <FaTrophy />, title: 'Achievements', description: 'See our project milestones and impact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
      <Navbar></Navbar>
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Pet Adoption Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="text-4xl text-blue-500 mb-4">{card.icon}</div>
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
          <p>
            Adopting a pet can significantly improve your mental health and overall well-being.
            It is a rewarding experience that benefits both you and your new furry friend!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;