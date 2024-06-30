import React from 'react';
import { motion } from 'framer-motion';
import { FaPaw, FaHeart, FaHandHoldingHeart, FaHome, FaLeaf, FaBalanceScale } from 'react-icons/fa';

const PromoBanner = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Why Adopt?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasonsToAdopt.map((reason, index) => (
              <ReasonCard key={index} {...reason} />
            ))}
          </div>
        </section>

     

    

        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">How You Can Help</h2>
          <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg shadow-lg p-8">
            <p className="text-lg mb-6">
              There are many ways you can contribute to the well-being of animals in need:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center"><FaHeart className="mr-2" /> Adopt a pet</li>
              <li className="flex items-center"><FaHandHoldingHeart className="mr-2" /> Foster an animal</li>
              <li className="flex items-center"><FaHome className="mr-2" /> Volunteer at a shelter</li>
              <li className="flex items-center"><FaLeaf className="mr-2" /> Donate supplies</li>
              <li className="flex items-center"><FaBalanceScale className="mr-2" /> Advocate for animal welfare</li>
              <li className="flex items-center"><FaPaw className="mr-2" /> Spread awareness</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

const ReasonCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg p-6"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-4xl text-purple-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const AnimalCard = ({ name, image, description }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const reasonsToAdopt = [
  {
    icon: <FaHeart />,
    title: "Save a Life",
    description: "By adopting, you're giving a second chance to an animal in need."
  },
  {
    icon: <FaHome />,
    title: "Find a Loving Companion",
    description: "Adopted pets often form strong, loyal bonds with their new families."
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Fight Puppy Mills",
    description: "Adoption reduces demand for pets from inhumane breeding facilities."
  },
  // Add more reasons as needed
];


export default PromoBanner;