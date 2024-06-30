import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPaw, FaMapMarkerAlt, FaBirthdayCake, FaTag } from "react-icons/fa";

const PetListingCard = ({ brand }) => {
  const { _id, name, picture, age, location, category } = brand;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative">
        <img src={picture} alt={name} className="w-full h-56 object-cover" />
        <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg">
          <FaTag className="inline-block mr-1" />
          {category}
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
        <div className="space-y-2 mb-4">
          <p className="text-gray-600 flex items-center">
            <FaBirthdayCake className="mr-2 text-indigo-500" />
            Age: {age} years
          </p>
          <p className="text-gray-600 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-indigo-500" />
            {location}
          </p>
        </div>
        <Link
          to={`/moredetail/${_id}`}
          className="bg-indigo-600 text-white py-2 px-4 rounded-full inline-block hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
        >
          <FaPaw className="mr-2" />
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default PetListingCard;