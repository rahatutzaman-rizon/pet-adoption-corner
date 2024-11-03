import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { Heart, Clock, Eye, X } from 'lucide-react';

// Set the app element for accessibility
Modal.setAppElement('#root');

const blogs = [
  {
    id: 1,
    title: "Essential Tips for New Dog Owners",
    excerpt: "Learn the basics of caring for your new furry friend, from feeding schedules to exercise needs.",
    image: "/api/placeholder/800/600",
    readTime: "5 min read",
    likes: 245,
    views: 1200,
    content: `When bringing a new dog home, there are several essential things to consider:

1. Establish a Routine
- Regular feeding times
- Consistent potty breaks
- Daily exercise schedule

2. Create a Safe Space
- Designate a comfortable sleeping area
- Provide appropriate toys
- Dog-proof your home

3. Healthcare Basics
- Schedule regular vet check-ups
- Stay up-to-date with vaccinations
- Monitor dental health

Remember, patience and consistency are key to helping your new pet adjust to their forever home.`
  },
  {
    id: 2,
    title: "Cat Care 101: A Complete Guide",
    excerpt: "Everything you need to know about providing the best care for your feline companion.",
    image: "/api/placeholder/800/600",
    readTime: "7 min read",
    likes: 189,
    views: 950,
    content: `Cats are wonderful companions that require specific care to thrive:

1. Nutrition
- High-quality cat food
- Fresh water always available
- Proper portion control

2. Environment
- Clean litter box
- Scratching posts
- Comfortable resting spots
- Interactive toys

3. Health Maintenance
- Annual vet visits
- Regular grooming
- Indoor vs outdoor considerations

Understanding your cat's unique personality and needs is crucial for their wellbeing.`
  },
  {
    id: 3,
    title: "Small Pets: Perfect for Apartments",
    excerpt: "Discover the best small pets for apartment living and how to care for them.",
    image: "/api/placeholder/800/600",
    readTime: "4 min read",
    likes: 156,
    views: 780,
    content: `Small pets can make wonderful companions in apartments:

1. Popular Options
- Hamsters
- Guinea Pigs
- Rabbits
- Fish

2. Space Requirements
- Appropriate cage sizes
- Exercise areas
- Storage for supplies

3. Care Considerations
- Noise levels
- Maintenance needs
- Cost of care

Choose a pet that matches your lifestyle and living situation.`
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '42rem',
    width: '90%',
    maxHeight: '90vh',
    margin: '20px auto',
    padding: '0',
    border: 'none',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
    overflow: 'hidden'
  }
};

const BlogCard = ({ blog, onClick }) => (
  <motion.div 
    variants={item}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <motion.img 
      src="https://i.ibb.co.com/BynJFFT/mitchell-orr-1-Y4-Lupdr-DZk-unsplash.jpg" 
      alt={blog.title} 
      className="w-full h-48 object-cover"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-primary-600">{blog.title}</h3>
      <p className="text-gray-600 mb-4">{blog.excerpt}</p>
      <div className="flex justify-between items-center">
        {/* <div className="flex items-center space-x-4">
          <span className="flex items-center text-primary-600">
            <Clock className="w-4 h-4 mr-1" />
            {blog.readTime}
          </span>
          <span className="flex items-center text-primary-600">
            <Heart className="w-4 h-4 mr-1" />
            {blog.likes}
          </span>
          <span className="flex items-center text-primary-600">
            <Eye className="w-4 h-4 mr-1" />
            {blog.views}
          </span>
        </div> */}
        <motion.button 
          onClick={() => onClick(blog)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
        >
          Read More
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const BlogModal = ({ blog, isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    style={modalStyles}
    contentLabel="Blog Post Modal"
    closeTimeoutMS={300}
  >
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="overflow-y-auto max-h-[90vh]"
    >
      <div className="p-6 mt-8">
        <div className="flex justify-between items-start mb-4">
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl font-bold text-primary-600"
          >
            {blog?.title}
          </motion.h2>
          <motion.button 
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-primary-600 hover:text-primary-700"
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>
        <motion.img 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          src="https://i.ibb.co.com/BynJFFT/mitchell-orr-1-Y4-Lupdr-DZk-unsplash.jpg"
          alt={blog?.title} 
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center text-primary-600">
            <Clock className="w-4 h-4 mr-1" />
            {blog?.readTime}
          </span>
          <span className="flex items-center text-primary-600">
            <Heart className="w-4 h-4 mr-1" />
            {blog?.likes}
          </span>
          <span className="flex items-center text-primary-600">
            <Eye className="w-4 h-4 mr-1" />
            {blog?.views}
          </span>
        </div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose max-w-none"
        >
          {blog?.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  </Modal>
);

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary-600 mb-4">
            Pet Care Guide
          </h1>
          <p className="text-xl text-gray-600">
            Discover essential tips and advice for taking care of your beloved pets
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map(blog => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              onClick={handleBlogClick}
            />
          ))}
        </motion.div>

        <BlogModal
          blog={selectedBlog}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default Blog;