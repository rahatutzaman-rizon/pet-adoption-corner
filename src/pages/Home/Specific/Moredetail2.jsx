import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { motion } from "framer-motion";
import { FaPaw, FaHeart, FaMoneyBillWave } from "react-icons/fa";

const Moredetail2 = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const item2 = useLoaderData();
  const { name, picture, amount } = item2;

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    // ... (rest of the function remains the same)
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-24">
        <motion.div
          className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-2xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            src={picture}
            alt={name}
            className="w-full h-64 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <div className="p-6">
            <motion.h2
              className="text-3xl font-bold mb-4 text-white"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {name}
            </motion.h2>
            <motion.div
              className="flex items-center mb-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <FaMoneyBillWave className="text-green-300 mr-2" />
              <span className="text-xl font-semibold text-white">
                Amount: ${amount}
              </span>
            </motion.div>
            <motion.p
              className="text-gray-100 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Donations play a crucial role in addressing various societal and
              global challenges, providing support to individuals, communities,
              and organizations in need. Your contribution can make a real
              difference!
            </motion.p>
            <motion.div
              className="flex justify-between items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center">
                <FaPaw className="text-yellow-300 mr-2" />
                <span className="text-white">Help a furry friend today!</span>
              </div>
              <motion.button
                className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full hover:bg-purple-100 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
              >
                <FaHeart className="inline-block mr-2" /> Donate Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-600">
              Make a Donation
            </h2>
            <form onSubmit={handleUpdateProduct} className="space-y-4">
              {/* Form fields remain the same, but you can style them further */}
              {/* ... */}
              <motion.button
                type="submit"
                className="w-full bg-purple-600 text-white rounded-md py-2 px-4 hover:bg-purple-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Donation
              </motion.button>
            </form>
            <motion.button
              className="mt-4 w-full bg-gray-300 text-gray-800 rounded-md py-2 px-4 hover:bg-gray-400 transition duration-300"
              onClick={() => setShowModal(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Moredetail2;