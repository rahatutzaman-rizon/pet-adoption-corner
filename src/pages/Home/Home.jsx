
// Home.jsx
import { useEffect, useState } from 'react';
import FavoriteBook from './FavoriteBook';
import Bannertext from './Banner';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import Ourabout from '../about/Ourabout';
import Business from './Business';
import { FaPhoneAlt, FaYoutube, FaArrowUp } from 'react-icons/fa';
import Modal from 'react-modal';
import Client from '../client/client';
import Blog from '../blog/blog';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loading from './Loading';
import PetAdoptionVolunteer from '../voluntire/voluntre';

Modal.setAppElement('#root');

export const Home = () => {
  const categories = useLoaderData();
  const uniqueCategories = Array.from(new Set(categories.map(category => category.category)));
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize AOS and handle loading state
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Simulate loading time
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clean up
    return () => clearTimeout(loadTimer);
  }, []);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show modal after loading
  useEffect(() => {
    if (!isLoading) {
      const modalTimer = setTimeout(() => {
        setIsModalOpen(true);
      }, 6000);
      return () => clearTimeout(modalTimer);
    }
  }, [isLoading]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsLoading(true);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative">
      <div className="min-h-screen">
        <div data-aos="fade-down" data-aos-duration="1200">
          <Bannertext />
        </div>

        <section className="py-2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto px-2">
            <h2 
              className="text-4xl font-bold text-center text-gray-800 mb-8 mt-4"
              data-aos="fade-up"
            >
              Pet Adoption Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {uniqueCategories.map((category, index) => (
                <div 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="transform transition-transform hover:scale-105 duration-300"
                >
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div data-aos="fade-up" data-aos-duration="1000">
          <Business />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <FavoriteBook />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <Blog />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <Client />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <Ourabout />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <PetAdoptionVolunteer></PetAdoptionVolunteer>
        </div>

        {/* Call Now Button */}
        <div 
          className="fixed bottom-20 right-5 flex items-center bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer z-40"
          data-aos="fade-left"
        >
          <FaPhoneAlt className="mr-2" />
          <span>Call Now: +1234567890</span>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-40"
            data-aos="fade-up"
          >
            <FaArrowUp />
          </button>
        )}

        {/* Welcome Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Welcome Modal"
          className="max-w-md mx-auto my-12 p-6 bg-white rounded-lg shadow-lg border animate-modalEntry"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Welcome to Our Pet Adoption Platform!
              </h2>
            </div>
            
            <p className="text-gray-700 text-center">
              Find your perfect companion among our carefully curated pet categories!
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                New to Our Platform?
              </h3>
              <p className="text-gray-600 mb-4">
                Watch our quick tutorial to learn how to find your perfect pet companion.
              </p>
              
              <a
                href="https://www.youtube.com/watch?v=D1f-nLQBqng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
              >
                <FaYoutube className="text-xl" />
                Watch Tutorial
              </a>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
              Start Exploring
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Home;

// Add these styles to your CSS file
`
@keyframes modalEntry {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-modalEntry {
  animation: modalEntry 0.3s ease-out forwards;
}
`