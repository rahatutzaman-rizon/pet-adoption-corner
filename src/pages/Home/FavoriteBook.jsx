import { motion } from 'framer-motion';
import { FaPaw, FaUsers, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import favBook from '../../assets/banner-books/book3.jpg';

const FavoriteBook = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Find Your Perfect <span className="text-purple-600">Pet Companion</span>
            </motion.h1>
            <motion.p
              className="text-gray-700 text-lg mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover joy and unconditional love through pet adoption. By adopting a pet, you are not only gaining a loyal friend, but also making a significant impact in the life of an animal in need.
            </motion.p>
            <Link to="/petlisting">
              <motion.button
                className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Pets
              </motion.button>
            </Link>
          </div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <StatCard icon={<FaPaw />} number="15" text="Pets Available" />
            <StatCard icon={<FaUsers />} number="8" text="Registered Users" />
            <StatCard icon={<FaDollarSign />} number="12,000" text="Total Donations" />
            <div className="col-span-2">
              <img
                src={favBook}
                alt="Happy pets"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, number, text }) => (
  <motion.div
    className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-gray-800"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="text-2xl font-bold mb-1">{number}</h3>
    <p className="text-sm">{text}</p>
  </motion.div>
);

export default FavoriteBook;
