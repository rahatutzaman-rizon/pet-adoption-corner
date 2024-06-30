import  { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  FaShoppingCart,
  FaPaw,
  FaLeaf,
  FaTruck,
  FaHeart,
  FaStar,
  FaBox,
  FaShieldAlt,
  FaPhoneAlt,
  FaGlobe,
} from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';

const PetFoodPage = () => {
  const [petFoods, setPetFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFood, setSelectedFood] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchPetFoods = async () => {
      try {
        const response = await axios.get('https://assignment-12-server-two-smoky.vercel.app/shop');
        setPetFoods(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pet foods:', error.response ? error.response.data : error.message);
        setLoading(false);
      }
    };

    fetchPetFoods();
  }, []);

  const addToCart = async (food, quantity, email, phone, client) => {
    const orderDetails = { ...food, quantity, email, phone, client };
    console.log('Adding to cart:', orderDetails); // Debug log
    try {
      await axios.post('https://assignment-12-server-two-smoky.vercel.app/order', orderDetails);
      setCartItems([...cartItems, orderDetails]);
      setSelectedFood(null);
      Swal.fire({
        icon: 'success',
        title: 'Purchase Successful!',
        text: 'Your order has been placed successfully. We will contact you soon to arrange delivery.',
      });
    } catch (error) {
      console.error('Error submitting order:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again.',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-t-4 border-teal-500 border-solid rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen mt-24">
      <Banner />
      <main className="container mx-auto px-4 py-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-gray-800 mb-8"
        >
          Our Pet Food Selection
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {petFoods.map((food) => (
            <PetFoodCard key={food._id} food={food} setSelectedFood={setSelectedFood} />
          ))}
        </motion.div>
      </main>
      <FeatureSection />
      <AnimatePresence>
        {selectedFood && (
          <CartModal food={selectedFood} onClose={() => setSelectedFood(null)} addToCart={addToCart} />
        )}
      </AnimatePresence>
    </div>
  );
};

const Banner = () => (
  <div className="bg-teal-600 text-white py-4">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <FaPaw className="mr-2 text-2xl" />
        <h1 className="text-2xl font-bold">PetFood Paradise</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="flex items-center mb-2 md:mb-0 md:mr-4">
          <FaBox className="mr-2" />
          <span>Free Shipping on Orders Over $50</span>
        </div>
        <div className="flex items-center mb-2 md:mb-0 md:mr-4">
          <FaShieldAlt className="mr-2" />
          <span>100% Satisfaction Guarantee</span>
        </div>
        <div className="flex items-center mb-2 md:mb-0 md:mr-4">
          <FaPhoneAlt className="mr-2" />
          <span>We'll contact you to arrange delivery</span>
        </div>
        <div className="flex items-center">
          <FaGlobe className="mr-2" />
          <span>Order online for convenient delivery</span>
        </div>
      </div>
    </div>
  </div>
);

const PetFoodCard = ({ food, setSelectedFood }) => {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05, zIndex: 1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative">
        <img src={food.image} alt={food.name} className="w-full h-40 object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{food.name}</h3>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="text-red-500 cursor-pointer"
          >
            <FaHeart size={16} />
          </motion.div>
        </div>
        <p className="text-xs text-gray-600 mb-2">For: {food.forAnimal}</p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 mr-1" size={12} />
          ))}
          <span className="text-xs text-gray-600 ml-1">(4.5)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-teal-600">Qty: {food.quantity}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-2 rounded-full text-xs transition duration-300 flex items-center"
            onClick={() => setSelectedFood(food)}
          >
            <FaShoppingCart className="mr-1" size={12} />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureSection = () => (
  <div className="bg-gray-200 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Why Choose Our Pet Food?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<FaPaw />} 
          title="Premium Quality" 
          description="Made with high-quality ingredients for your pet's health."
        />
        <FeatureCard 
          icon={<FaLeaf />} 
          title="All Natural" 
          description="No artificial preservatives or additives in our products."
        />
        <FeatureCard 
          icon={<FaTruck />} 
          title="Fast Delivery" 
          description="Get your pet food delivered right to your doorstep."
        />
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="text-center bg-white p-4 rounded-xl shadow-md"
  >
    <motion.div
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="mb-3 text-3xl text-teal-500"
    >
      {icon}
    </motion.div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
);

const CartModal = ({ food, onClose, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [phone, setPhone] = useState('');
  const [client, setClient] = useState('');
  const { user } = useContext(AuthContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'Please login to make a purchase.',
      });
      return;
    }
    console.log('Form submitted with:', { food, quantity, email: user.email, phone, client }); // Debug log
    addToCart(food, quantity, user.email, phone, client);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Add to Cart</h2>
          <form onSubmit={handleAddToCart} className="space-y-4">
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="client" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="client"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={user ? user.email : ''}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                required
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                {user ? 'Add to Cart' : 'Login to Purchase'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PetFoodPage;
