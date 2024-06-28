
import { motion } from 'framer-motion';
import { FaShoppingCart, FaPaw, FaBone, FaTag, FaTruck, FaPercent } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Business = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            <span className="block">Pawsome Deals!</span>
            <span className="block text-indigo-600 mt-2">10% OFF All Pet Food</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-8 md:max-w-3xl">
            Treat your furry friends to premium nutrition at unbeatable prices. 
            Limited time offer for pet lovers in Dhaka!
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <Link
              to="/shop"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <FaShoppingCart className="mr-2" />
              Shop Now
            </Link>
            <Link
              to="/promotion-details"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <FaPercent className="mr-2" />
              Offer Details
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="mt-24 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FeatureCard
            icon={<FaPaw className="h-8 w-8 text-indigo-600" />}
            title="Wide Selection"
            description="From premium dry kibble to gourmet wet food, we cater to all pet preferences and dietary needs."
          />
          <FeatureCard
            icon={<FaBone className="h-8 w-8 text-indigo-600" />}
            title="Top-Notch Quality"
            description="Our products are sourced from trusted brands, ensuring optimal nutrition and taste for your pets."
          />
          <FeatureCard
            icon={<FaTag className="h-8 w-8 text-indigo-600" />}
            title="Unbeatable Deals"
            description="Enjoy regular discounts, loyalty rewards, and special bundle offers to maximize your savings."
          />
          <FeatureCard
            icon={<FaTruck className="h-8 w-8 text-indigo-600" />}
            title="Fast Delivery"
            description="Swift and reliable delivery service across Dhaka, ensuring your pet's favorite food arrives on time."
          />
          <FeatureCard
            icon={<FaPercent className="h-8 w-8 text-indigo-600" />}
            title="10% Off Everything"
            description="For a limited time, enjoy 10% off on all pet food products. Stock up and save big!"
          />
          <FeatureCard
            icon={<FaShoppingCart className="h-8 w-8 text-indigo-600" />}
            title="Easy Online Ordering"
            description="User-friendly website and mobile app for convenient browsing and hassle-free purchases."
          />
        </motion.div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default Business;