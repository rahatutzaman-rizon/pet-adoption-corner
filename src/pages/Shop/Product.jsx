import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FaShoppingCart, FaPaw, FaLeaf, FaTruck, FaHeart, FaStar, FaInfoCircle } from 'react-icons/fa';

const PetFoodPage = () => {
  const [petFoods, setPetFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    const fetchPetFoods = async () => {
      try {
        const response = await axios.get('http://localhost:5000/shop');
        setPetFoods(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pet foods:', error);
        setLoading(false);
      }
    };

    fetchPetFoods();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-t-4 border-teal-500 border-solid rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-gray-800 mb-8"
        >
          Our Pet Food Selection
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {petFoods.map((food) => (
            <PetFoodCard key={food._id} food={food} setSelectedFood={setSelectedFood} />
          ))}
        </motion.div>
      </main>
      <FeatureSection />
      <AnimatePresence>
        {selectedFood && (
          <FoodDetailModal food={selectedFood} onClose={() => setSelectedFood(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const PetFoodCard = ({ food, setSelectedFood }) => {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05, zIndex: 1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative">
        <img src={food.image} alt={food.name} className="w-full h-40 object-cover" />
        <motion.div
          whileHover={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-teal-600 font-bold py-1 px-3 text-sm rounded-full shadow-md"
            onClick={() => setSelectedFood(food)}
          >
            Quick View
          </motion.button>
        </motion.div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{food.name}</h3>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="text-red-500 cursor-pointer"
          >
            <FaHeart size={16} />
          </motion.div>
        </div>
        <p className="text-xs text-gray-600 mb-2">For: {food.forAnimal}</p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 mr-1" size={12} />
          ))}
          <span className="text-xs text-gray-600 ml-1">(4.5)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-teal-600">Qty: {food.quantity}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-2 rounded-full text-xs transition duration-300 flex items-center"
          >
            <FaShoppingCart className="mr-1" size={12} />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureSection = () => (
  <div className="bg-gray-200 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Why Choose Our Pet Food?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<FaPaw />} 
          title="Premium Quality" 
          description="Made with high-quality ingredients for your pet's health."
        />
        <FeatureCard 
          icon={<FaLeaf />} 
          title="All Natural" 
          description="No artificial preservatives or additives in our products."
        />
        <FeatureCard 
          icon={<FaTruck />} 
          title="Fast Delivery" 
          description="Get your pet food delivered right to your doorstep."
        />
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="text-center bg-white p-4 rounded-xl shadow-md"
  >
    <motion.div
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="mb-3 text-3xl text-teal-500"
    >
      {icon}
    </motion.div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
);

const FoodDetailModal = ({ food, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-white rounded-lg p-6 max-w-md w-full m-4"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-2xl font-bold mb-4">{food.name}</h3>
      <img src={food.image} alt={food.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <p className="text-gray-700 mb-4">{food.description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-bold text-teal-600">Qty: {food.quantity}</span>
        <div className="flex items-center">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-600">4.5 (120 reviews)</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center"
        >
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300"
          onClick={onClose}
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
);

export default PetFoodPage;