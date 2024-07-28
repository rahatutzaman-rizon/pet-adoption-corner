import { motion } from 'framer-motion';
import { FaPaw, FaHeart, FaListAlt, FaTrophy, FaChartLine, FaUsers, FaHandHoldingHeart, FaCalendarAlt, FaNewspaper, FaInfoCircle } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const cards = [
    { icon: <FaPaw />, title: 'Pet Listings', description: 'Available pets', count: 150, color: 'bg-blue-500' },
    { icon: <FaHeart />, title: 'Donations', description: 'Active campaigns', count: 5, color: 'bg-red-500' },
    { icon: <FaUsers />, title: 'Community', description: 'Pet lovers', count: 5000, color: 'bg-green-500' },
    { icon: <FaCalendarAlt />, title: 'Events', description: 'Upcoming', count: 3, color: 'bg-purple-500' },
  ];

  const adoptionData = [
    { name: 'Jan', dogs: 65, cats: 45, others: 20 },
    { name: 'Feb', dogs: 75, cats: 55, others: 25 },
    { name: 'Mar', dogs: 85, cats: 60, others: 30 },
    { name: 'Apr', dogs: 70, cats: 50, others: 22 },
    { name: 'May', dogs: 80, cats: 58, others: 28 },
    { name: 'Jun', dogs: 90, cats: 65, others: 35 },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${card.color} rounded-lg shadow-lg text-white`}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-4xl">{card.icon}</div>
                  <div className="text-3xl font-bold">{card.count}</div>
                </div>
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-sm opacity-80">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Adoption Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={adoptionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="dogs" fill="#3B82F6" />
                <Bar dataKey="cats" fill="#EF4444" />
                <Bar dataKey="others" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Recent News</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaNewspaper className="text-blue-500 mt-1 mr-2" />
                <div>
                  <h3 className="font-semibold">New Partnership Announced</h3>
                  <p className="text-sm text-gray-600">We've partnered with local veterinarians to provide free check-ups for adopted pets.</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaNewspaper className="text-blue-500 mt-1 mr-2" />
                <div>
                  <h3 className="font-semibold">Adoption Drive Success</h3>
                  <p className="text-sm text-gray-600">Our recent adoption drive found homes for over 50 pets in a single weekend!</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaNewspaper className="text-blue-500 mt-1 mr-2" />
                <div>
                  <h3 className="font-semibold">Volunteer Recognition</h3>
                  <p className="text-sm text-gray-600">Congratulations to our Volunteer of the Month, Sarah Johnson!</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaInfoCircle className="text-blue-500 mr-2" />
            Did You Know?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Adopting a pet can significantly improve your mental health and overall well-being.</li>
            <li>Over 6.5 million companion animals enter animal shelters nationwide every year.</li>
            <li>Approximately 3.2 million shelter animals are adopted each year (1.6 million dogs and 1.6 million cats).</li>
            <li>About 710,000 animals who enter shelters as strays are returned to their owners (620,000 dogs and 90,000 cats).</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
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