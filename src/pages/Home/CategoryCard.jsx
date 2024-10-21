import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPaw, FaHeart } from 'react-icons/fa';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

 const CategoryCard = ({ category, count }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="w-full"
  >
    <Link to="/petlisting" className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
        <div className="p-6">
          <motion.div 
            className="text-3xl mb-4 text-primary-500 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3, type: "spring" }}
          >
            <FaPaw />
          </motion.div>
          
          <motion.div 
            className="font-bold text-xl mb-2 text-gray-800 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {category}
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-600 text-center mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            {count} pets available
          </motion.p>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Tooltip title="View listings" position="top" animation="scale">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:bg-primary-600 transition-colors duration-300"
              >
                Explore
              </motion.button>
            </Tooltip>
          </motion.div>
        </div>
        
        <motion.div 
          className="px-4 py-2 bg-primary-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <div className="flex items-center justify-between text-primary-700">
            <span className="text-xs font-medium">#{category}Adoption</span>
            <Tooltip title="Favorite" position="top" animation="scale">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaHeart className="text-primary-400 hover:text-primary-500 transition-colors duration-300" />
              </motion.button>
            </Tooltip>
          </div>
        </motion.div>
      </div>
    </Link>
  </motion.div>
);

export default CategoryCard;