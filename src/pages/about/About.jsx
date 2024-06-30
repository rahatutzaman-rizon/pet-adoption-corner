import React from 'react';
import { motion } from 'framer-motion';
import { FaPaw, FaHeart, FaHandsHelping, FaEnvelope, FaPhone } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      {/* Banner */}


      {/* Main Content */}
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tips Section */}
          <motion.section 
            className="flex-1 bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center text-cyan-600">
              <FaPaw className="mr-2" /> Pet Adoption Tips
            </h2>
            <ul className="space-y-3">
              {tips.map((tip, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <FaHeart className="text-pink-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{tip}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Benefits Section */}
          <motion.section 
            className="flex-1 bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center text-purple-600">
              <FaHandsHelping className="mr-2" /> Benefits of Pet Adoption
            </h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <FaHeart className="text-pink-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Volunteer Promotion Banner */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg p-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Join Us as a Volunteer!</h2>
          <p className="text-xl mb-6">
            Make a difference in the lives of animals. Volunteer with us and be a part of our mission to find loving homes for pets in need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="mailto:rizonraha199@gmail.com" className="flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300">
              <FaEnvelope className="mr-2" /> Email Us
            </a>
            <a href="tel:01771276400" className="flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300">
              <FaPhone className="mr-2" /> Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const tips = [
  "Visit local shelters to find your perfect pet.",
  "Consider the size and energy level that fits your lifestyle.",
  "Take your time to bond with the pet before making a decision.",
  "Ensure your living situation is suitable for a pet.",
  "Be prepared for the responsibilities of pet ownership."
];

const benefits = [
  "Save a life by providing a home for a pet in need.",
  "Experience the unconditional love and companionship of a pet.",
  "Support local animal shelters and reduce pet overpopulation.",
  "Enjoy the mental and physical health benefits of having a pet.",
  "Create a lasting bond with a grateful and loyal companion."
];

export default About;