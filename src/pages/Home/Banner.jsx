import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaw, FaHeart, FaSearch, FaInfoCircle } from 'react-icons/fa';

const bannerTexts = [
    "Providing loving homes",
    "Saving precious lives",
    "Creating furry families",
    "Spreading unconditional love"
];

const BannerText = ({ text }) => (
    <motion.p
        key={text}
        className='text-lg md:text-xl text-primary-600 font-medium'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
    >
        {text}
    </motion.p>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
    <motion.div 
        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Icon className="text-primary-600 text-4xl mb-4" />
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

export default function Bannertext() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % bannerTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-gradient-to-br from-primary-100 via-secondary-100 to-primary-200 min-h-screen mt-8'>
            <div className='container mx-auto px-4 py-12 md:py-16 lg:py-24'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
                    <motion.div 
                        className='lg:w-1/2 space-y-6 md:space-y-8'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-600 leading-tight'>
                            Find Your Perfect Pet Companion
                        </h1>
                        <AnimatePresence mode="wait">
                            <BannerText text={bannerTexts[currentTextIndex]} />
                        </AnimatePresence>
                        <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
                            Embark on a heartwarming journey of pet adoption. Our mission is to connect loving homes with animals in need, creating lifelong bonds and unforgettable memories.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button 
                                className='bg-primary-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary-700 transition duration-300 shadow-lg'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaSearch className="text-lg md:text-xl" />
                                Find a Pet
                            </motion.button>
                            <motion.button 
                                className='bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary-50 transition duration-300 shadow-lg'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaInfoCircle className="text-lg md:text-xl" />
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='lg:w-1/2'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative">
                            <motion.img 
                                src="https://i.ibb.co/qxRFj8c/dog.jpg" 
                                alt="Pet Adoption" 
                                className="w-full max-w-md md:max-w-lg mx-auto rounded-2xl shadow-2xl"
                                initial={{ scale: 0.9, rotate: -3 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            <motion.div 
                                className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <FaHeart className="text-secondary-500 text-lg md:text-xl" />
                                <span className="text-gray-800 font-semibold">Find your perfect match</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                
                <motion.div 
                    className="mt-12 md:mt-16 bg-white rounded-xl shadow-lg p-6 md:p-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 md:mb-8 text-center">Why Choose Pet Adoption?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <FeatureCard 
                            icon={FaPaw}
                            title="Save a Life"
                            description="Give a homeless pet a second chance at happiness and a loving home."
                        />
                        <FeatureCard 
                            icon={FaHeart}
                            title="Unconditional Love"
                            description="Experience the joy and companionship of a devoted animal friend."
                        />
                        <FeatureCard 
                            icon={FaSearch}
                            title="Find Your Match"
                            description="Discover the perfect pet that fits your lifestyle and family."
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
