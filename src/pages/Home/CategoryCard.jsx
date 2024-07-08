import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPaw, FaHeart } from "react-icons/fa";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const CategoryCard = ({ category, count }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full sm:w-64 m-4"
    >
      <Link to="/petlisting" className="block">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <motion.div 
              className="text-4xl mb-4 text-white flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3, type: "spring" }}
            >
              <FaPaw />
            </motion.div>
            
            <motion.div 
              className="font-bold text-2xl mb-2 text-white text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              {category}
            </motion.div>
            
            <motion.p 
              className="text-sm text-blue-100 text-center mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              {count} pets available for adoption
            </motion.p>
            
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Tooltip title="View listings" position="top" animation="scale">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:bg-purple-100 transition-colors duration-300"
                >
                  Explore
                </motion.button>
              </Tooltip>
            </motion.div>
          </div>
          
          <motion.div 
            className="px-6 py-4 bg-white bg-opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <div className="flex items-center justify-between text-white">
              <span className="text-sm">#Adopt{category}</span>
              <Tooltip title="Favorite" position="top" animation="scale">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaHeart className="text-pink-300 hover:text-pink-400 transition-colors duration-300" />
                </motion.button>
              </Tooltip>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;