
import { motion } from 'framer-motion';
import {  FaEnvelope, FaPhone } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 min-h-screen">
      {/* Banner */}
    

   

      {/* Volunteer Promotion Banner */}
      <motion.div
        className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg shadow-lg p-8 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Join Us as a Volunteer!</h2>
        <p className="text-xl mb-6">
          Make a difference in the lives of animals. Volunteer with us and be a part of our mission to find loving homes for pets in need.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="mailto:rizonraha199@gmail.com" className="flex items-center bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-200 transition duration-300">
            <FaEnvelope className="mr-2" /> Email Us
          </a>
          <a href="tel:01771276400" className="flex items-center bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-200 transition duration-300">
            <FaPhone className="mr-2" /> Call Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;