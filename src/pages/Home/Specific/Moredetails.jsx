import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { motion } from "framer-motion";
import { FaPaw, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Moredetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const item = useLoaderData();
  const { name, picture, age, location, category, long_description, short_description } = item;

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
      <motion.div 
        className="bg-gradient-to-r from-sky-300 to-purple-400 text-white py-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto text-center mt-12">
          <h1 className="text-4xl font-bold mb-4">Meet {name}</h1>
          <p className="text-xl">Your potential new furry friend</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="md:flex">
            <motion.div 
              className="md:flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img className="h-96 w-full object-cover md:w-96" src={picture} alt={name} />
            </motion.div>
            <div className="p-8">
              <motion.div 
                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {category}
              </motion.div>
              <motion.h1 
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {name}
              </motion.h1>
              <motion.p 
                className="mt-2 text-xl text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Age: {age} years old
              </motion.p>
              <motion.div 
                className="mt-4 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <FaMapMarkerAlt className="text-red-500 mr-2" />
                <span>{location}</span>
              </motion.div>
              <motion.div 
                className="mt-2 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <FaPhone className="text-green-500 mr-2" />
                <span>01771276400</span>
              </motion.div>
              <motion.p 
                className="mt-4 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {short_description}
              </motion.p>
              <motion.button
                className="mt-6 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Adopt Me
              </motion.button>
            </div>
          </div>
          <div className="px-8 py-6 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">About {name}</h2>
            <p className="text-gray-600">{long_description}</p>
          </div>
        </div>
      </div>

      {showModal && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-2xl font-bold mb-4">Adopt {name}</h2>
            <form onSubmit={handleUpdateProduct} className="space-y-4">
              {/* Form fields remain the same, but you can style them further */}
              {/* ... */}
              <motion.button
                type="submit"
                className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Adoption Request
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

export default Moredetails;