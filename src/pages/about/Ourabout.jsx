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
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen py-16">
      <motion.div
        className="container mx-auto text-center px-4 mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Pet Corner
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 italic">
          Connecting pets with loving families since 2010
        </p>

        <motion.div
          className="mb-16 h-64 md:h-96 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Lottie options={lottieOptions} />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Quick Facts",
              icon: FaHeart,
              iconBg: "bg-pink-100",
              iconColor: "text-pink-600",
              content: (
                <ul className="space-y-4 h-48">
                  {[
                    { icon: FaPaw, text: '1000+ successful adoptions', color: 'text-purple-600' },
                    { icon: FaHandHoldingHeart, text: 'No-kill policy', color: 'text-pink-600' },
                    { icon: FaHeart, text: 'Full medical care provided', color: 'text-red-600' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg group-hover:bg-purple-50 transition-colors duration-300">
                      <item.icon className={`mr-3 text-xl ${item.color}`} />
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              )
            },
            {
              title: "About Us",
              icon: FaPaw,
              iconBg: "bg-purple-100",
              iconColor: "text-purple-600",
              content: (
                <div className="h-48">
                  <p className="text-gray-600 leading-relaxed">
                    We're dedicated to finding loving homes for animals in need. Our commitment goes beyond just housing pets - 
                    we provide comprehensive care, including medical attention, behavioral training, and endless love while they 
                    await their forever homes. Every tail wag and purr motivates us to continue our mission.
                  </p>
                </div>
              )
            },
            {
              title: "Adoption Steps",
              icon: FaHeart,
              iconBg: "bg-blue-100",
              iconColor: "text-blue-600",
              content: (
                <ol className="space-y-4 h-48">
                  {[
                    "Browse available pets",
                    "Submit application",
                    "Meet with counselor",
                    "Spend time with pet",
                    
                  ].map((step, index) => (
                    <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
                      <span className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-3 text-blue-600 font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              )
            },
            {
              title: "Contact Us",
              icon: FaEnvelope,
              iconBg: "bg-green-100",
              iconColor: "text-green-600",
              content: (
                <div className="h-48">
                  <div className="space-y-4 mb-4">
                    {[
                      { icon: FaMapMarkerAlt, text: 'Gulshan-1 road-2, Dhaka', color: 'text-red-600' },
                      { icon: FaPhoneAlt, text: '01771276400', color: 'text-green-600' },
                      { icon: FaEnvelope, text: 'adopt@pawsandhearts.com', color: 'text-blue-600' }
                    ].map((item, index) => (
                      <p key={index} className="flex items-center p-3 bg-gray-50 rounded-lg group-hover:bg-green-50 transition-colors duration-300">
                        <item.icon className={`mr-3 text-xl ${item.color}`} />
                        <span className="text-gray-700">{item.text}</span>
                      </p>
                    ))}
                  </div>
                  <div className="flex space-x-6 justify-center">
                    {[
                      { icon: FaFacebook, color: 'text-blue-600' },
                      { icon: FaTwitter, color: 'text-sky-500' },
                      { icon: FaInstagram, color: 'text-pink-600' }
                    ].map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`${item.color} hover:scale-125 transition-transform duration-300`}
                      >
                        <item.icon size={28} />
                      </a>
                    ))}
                  </div>
                </div>
              )
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-colors duration-300 h-[400px]">
                <div className="flex items-center mb-6">
                  <div className={`p-3 ${card.iconBg} rounded-lg`}>
                    <card.icon className={`text-2xl ${card.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-gray-800">{card.title}</h3>
                </div>
                {card.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourabout;