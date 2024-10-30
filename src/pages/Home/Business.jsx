import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaPaw, FaTruck, FaPercent, FaArrowRight } from 'react-icons/fa';

const BusinessPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/shop');
        const data = await response.json();
        setProducts(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
              <span className="block">Paw-some Deals!</span>
              <span className="block text-primary-600 mt-2">10% OFF All Pet Food</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-8 md:max-w-3xl">
              Treat your furry friends to premium nutrition at unbeatable prices. 
              Limited time offer for pet lovers in Dhaka!
            </p>
          </motion.div>

          <motion.div 
            className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="/shop"
                className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-md text-white bg-primary-600 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <FaShoppingCart className="mr-2" />
                Shop Now
              </a>
              <div className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-md text-primary-600 bg-white hover:bg-gray-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <FaPercent className="mr-2" />
                10% Off Everything
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {products.map((product) => (
              <FeatureCard
                key={product._id}
                icon={<FaPaw className="h-8 w-8 text-indigo-600" />}
                title={product.name}
                description={product.description}
                image={product.image}
                forAnimal={product.forAnimal}
                quantity={product.quantity}
                price={product.price}
              />
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <a
              href="/shop"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Show More
              <FaArrowRight className="ml-2" />
            </a>
          </div>

          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FeatureCard
              icon={<FaTruck className="h-8 w-8 text-primary-600" />}
              title="Fast Delivery"
              description="Swift and reliable delivery service across Dhaka, ensuring your pet's favorite food arrives on time."
            />
            <FeatureCard
              icon={<FaPercent className="h-8 w-8 text-primary-600" />}
              title="10% Off Everything"
              description="For a limited time, enjoy 10% off on all pet food products. Stock up and save big!"
            />
            <FeatureCard
              icon={<FaShoppingCart className="h-8 w-8 text-primary-600" />}
              title="Easy Online Ordering"
              description="User-friendly website and mobile app for convenient browsing and hassle-free purchases."
            />
          </motion.div>
        </div>
      </main>


    </div>
  );
};

const FeatureCard = ({ icon, title, description, image, forAnimal, quantity, price }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {image && (
      <div className="relative h-36 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    )}
    <div className="p-6">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary-600 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {forAnimal && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-primary-600 font-medium">For {forAnimal}s</span>
          <div>
            <span className="text-primary-600 font-medium">In stock: {quantity}</span>
            {price && <span className="text-primary-600 font-bold ml-2">${price}</span>}
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

export default BusinessPage;