import { useEffect, useState } from 'react';
import FavoriteBook from './FavoriteBook';
import Bannertext from './Banner';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

import Ourabout from '../about/Ourabout';
import Business from './Business';
import { FaPhoneAlt } from 'react-icons/fa';  // Call icon
import Modal from 'react-modal';  // Modal library

// Make sure to set the app element for accessibility
Modal.setAppElement('#root');

export const Home = () => {
  const categories = useLoaderData();
  const uniqueCategories = Array.from(new Set(categories.map(category => category.category)));

  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 4000);
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div>
      <Bannertext />
      <section className="py-2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-2">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 mt-4">
            Pet Adoption Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {uniqueCategories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      <Business />
      <FavoriteBook />
      <Ourabout />
   

      {/* Call Now Icon in bottom-right corner */}
      <div className="fixed bottom-5 right-5 flex items-center bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
        <FaPhoneAlt className="mr-2" />
        <span>Call Now: +1234567890</span>
      </div>

      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Welcome Modal"
        className="max-w-md mx-auto my-12 p-6 bg-white rounded-lg shadow-lg border"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Welcome to Our Website!</h2>
        <p className="text-gray-700 mb-6">
          Explore the latest pet adoption categories and find the perfect companion for your home!
        </p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Home;
