import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import { FaPaw, FaHeart, FaHandHoldingHeart, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import adoptionAnimation from '../shared/lottie.json';

const Ourabout = () => {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: adoptionAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen py-12">
            <motion.div 
                className="container mx-auto text-center px-4 mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-800">Pet Corner</h1>
                <p className="text-lg md:text-xl text-indigo-600 max-w-2xl mx-auto mb-8">
                    Connecting pets with loving families since 2010.
                </p>
                
                {/* Lottie Animation */}
                <motion.div 
                    className="mb-12 h-64 md:h-96 max-w-3xl mx-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Lottie options={lottieOptions} />
                </motion.div>
            </motion.div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div 
                        className="bg-white rounded-lg shadow-lg p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-indigo-800 flex items-center">
                            <FaHeart className="mr-2 text-pink-500" /> Quick Facts
                        </h3>
                        <ul className="space-y-2 text-indigo-700">
                            <li className="flex items-center"><FaPaw className="mr-2 text-indigo-500" /> 1000+ adoptions</li>
                            <li className="flex items-center"><FaHandHoldingHeart className="mr-2 text-indigo-500" /> No-kill policy</li>
                            <li className="flex items-center"><FaPaw className="mr-2 text-indigo-500" /> Full medical care</li>
                        </ul>
                    </motion.div>

                    <motion.section 
                        className="bg-white rounded-lg shadow-lg p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-indigo-800 flex items-center">
                            <FaPaw className="mr-2 text-indigo-600" /> About Us
                        </h2>
                        <p className="text-indigo-700">
                            We're dedicated to finding loving homes for animals in need, ensuring each pet receives proper care while awaiting their forever home.
                        </p>
                    </motion.section>

                    <motion.section 
                        className="bg-white rounded-lg shadow-lg p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-indigo-800 flex items-center">
                            <FaHeart className="mr-2 text-pink-500" /> Adoption Steps
                        </h2>
                        <ol className="list-decimal list-inside space-y-2 text-indigo-700">
                            <li>Browse available pets</li>
                            <li>Submit application</li>
                            <li>Meet with counselor</li>
                            <li>Spend time with pet</li>
                            <li>Complete adoption</li>
                        </ol>
                    </motion.section>

                    <motion.section
                        className="bg-white rounded-lg shadow-lg p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-indigo-800 flex items-center">
                            <FaEnvelope className="mr-2 text-indigo-600" /> Contact Us
                        </h2>
                        <p className="mb-2 text-indigo-700 flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-indigo-500" /> Mirpur 12 road/a/11, Dhaka
                        </p>
                        <p className="mb-2 text-indigo-700 flex items-center">
                            <FaPhoneAlt className="mr-2 text-indigo-500" /> 01771276400
                        </p>
                        <p className="mb-4 text-indigo-700 flex items-center">
                            <FaEnvelope className="mr-2 text-indigo-500" /> adopt@pawsandhearts.com
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors"><FaFacebook size={24} /></a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors"><FaTwitter size={24} /></a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors"><FaInstagram size={24} /></a>
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default Ourabout; 