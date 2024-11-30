import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { motion } from "framer-motion";
import {  FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Moredetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const item = useLoaderData();
  const { name, picture, age, location, category, long_description, short_description } = item;

  const handleUpdateProduct = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://assignment-12-server-two-smoky.vercel.app/adopt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        Swal.fire("Success", "Adoption request submitted!", "success");
        setShowModal(false);
        navigate("/");
      } else {
        Swal.fire("Error", "Could not submit request. Please try again.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white text-gray-800 mt-16"
    >
      <motion.div
        className="bg-gradient-to-r from-primary-600 to-primary-400 text-white py-8"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {name}
          </motion.h1>
          <motion.p 
            className="text-xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Your potential new furry friend
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            <motion.div
              className="md:flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img className="h-96 w-full object-cover md:w-96 rounded-lg shadow-md" src={picture} alt={name} />
            </motion.div>
            <div className="p-8">
              <motion.div
                className="uppercase tracking-wide text-md text-primary-600 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {category}
              </motion.div>
              <motion.h1
                className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {name}
              </motion.h1>
              <motion.p
                className="mt-4 text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Age: {age} years old
              </motion.p>
              <motion.div
                className="mt-4 flex items-center text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <FaMapMarkerAlt className="text-primary-600 mr-2" />
                <span>{location}</span>
              </motion.div>
              <motion.div
                className="mt-2 flex items-center text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <FaPhone className="text-primary-600 mr-2" />
                <span>01771276400</span>
              </motion.div>
              <motion.p
                className="mt-6 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {short_description}
              </motion.p>
              <motion.button
                className="mt-8 px-6 py-3 text-lg font-semibold border border-transparent rounded-full text-white bg-primary-600 hover:bg-primary-700 transition"
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Adopt Me
              </motion.button>
            </div>
          </div>
          <div className="px-8 py-6 bg-gray-50 rounded-b-2xl">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">About {name}</h2>
            <p className="text-gray-600">{long_description}</p>
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
            className="bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary-600 text-center">Adopt {name}</h2>
            <form onSubmit={handleUpdateProduct} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-primary-600 focus:border-primary-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-primary-600 focus:border-primary-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-primary-600 focus:border-primary-600"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 text-lg font-semibold text-white rounded-md bg-primary-600 hover:bg-primary-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Adoption Request
              </motion.button>
            </form>
            <motion.button
              className="mt-4 w-full py-3 text-lg font-semibold text-gray-700 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
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
