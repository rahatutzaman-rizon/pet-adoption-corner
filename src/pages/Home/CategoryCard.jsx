import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/petlisting" className="block">
        <div className="max-w-xs bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <motion.div 
            className="relative h-48 overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://i.ibb.co/61Dp6C8/images.jpg" 
              alt={category} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
          </motion.div>
          
          <div className="px-6 py-4 bg-gradient-to-r from-cyan-400 to-blue-500">
            <motion.div 
              className="font-bold text-xl mb-2 text-white flex items-center justify-between"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <span>{category}</span>
              <FaPaw className="text-yellow-300" />
            </motion.div>
            <motion.p 
              className="text-sm text-blue-100"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              Explore our adorable {category.toLowerCase()} looking for a loving home.
            </motion.p>
          </div>
          
          <motion.div 
            className="px-6 pt-4 pb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
              #Adopt
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
              #{category}
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;