import React, { Suspense } from "react";
import { motion } from "framer-motion";
const FaPaw = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaPaw })));
const FaMapMarkerAlt = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaMapMarkerAlt })));
const FaBirthdayCake = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaBirthdayCake })));
const FaTag = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaTag })));

const Link = React.lazy(() => import("react-router-dom").then(module => ({ default: module.Link })));

const PetListingCard = ({ brand }) => {
  const { _id, name, picture, age, location, category } = brand;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
      >
        <div className="relative group">
          <img 
            src={picture} 
            alt={name} 
            loading="lazy" 
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg flex items-center space-x-1">
            <FaTag className="text-xs" />
            <span>{category}</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h2 className="text-2xl font-bold text-white  mb-1">{name}</h2>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-3 rounded-lg">
              <p className="text-primary-600 flex items-center text-sm font-medium">
                <FaBirthdayCake className="mr-2" />
                {age} years old
              </p>
            </div>
            <div className="bg-indigo-50 p-3 rounded-lg">
              <p className="text-primary-600 flex items-center text-sm font-medium">
                <FaMapMarkerAlt className="mr-2" />
                {location}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              to={`/moredetail/${_id}`}
              className="flex-1 bg-primary-600 text-white py-3 px-4 rounded-lg inline-flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300 font-medium"
            >
              <FaPaw className="mr-2" />
              View Details
            </Link>
           
          </div>
        </div>
      </motion.div>
    </Suspense>
  );
};

export default PetListingCard;