import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaPaw, FaTrash, FaSearch } from "react-icons/fa";

const AllPets = () => {
  const allPets = useLoaderData();
  const [pets, setPets] = useState(allPets);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Admin Dashboard | All Pets";
  }, []);

  const handleDelete = async (_id) => {
    const result = await Swal.fire({
      title: 'Delete pet?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete'
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`https://assignment-12-server-two-smoky.vercel.app/pet-listing/${_id}`, {
          method: "DELETE",
        });
        const data = await response.json();

        if (data.deletedCount > 0) {
          Swal.fire('Deleted!', 'The pet has been removed.', 'success');
          setPets(pets.filter(pet => pet._id !== _id));
        }
      } catch (error) {
        Swal.fire('Error!', 'Failed to delete the pet.', 'error');
      }
    }
  };

  const filteredPets = pets.filter(pet => 
    pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pet.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-6"
      >
        All Pets
      </motion.h1>

      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search pets..."
          className="w-full p-2 pl-10 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPets.map((pet) => (
              <motion.tr 
                key={pet._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <FaPaw className="h-5 w-5 text-purple-400 mr-2" />
                    <span>{pet.name}</span>
                  </div>
                </td>
                <td className="px-4 py-2">{pet.category}</td>
                <td className="px-4 py-2">{pet.age}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(pet._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPets;