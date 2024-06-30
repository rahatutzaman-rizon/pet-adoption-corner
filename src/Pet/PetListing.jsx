
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import PetListingCard from './PetListingCard';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaPaw } from 'react-icons/fa';

const PetListing = () => {
  const samplePetsData = useLoaderData();
  const [pets, setPets] = useState(samplePetsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const filteredPets = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || pet.category === selectedCategory)
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-6 mt-24"
    >
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center text-indigo-800 mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          Find Your Perfect Pet
        </motion.h1>

        <motion.div 
          className="bg-white rounded-lg shadow-md p-6 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative flex-grow">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search pets by name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <FaFilter className="absolute left-3 top-3 text-gray-400" />
              <select
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="bird">Bird</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="fish">Fish</option>
              </select>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {filteredPets.map((pet, index) => (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PetListingCard brand={pet} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {loading && (
          <motion.div 
            className="text-center my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FaPaw className="inline-block text-4xl text-indigo-600 animate-bounce" />
            <span className="block mt-2 text-xl text-indigo-800">Loading more pets...</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PetListing;