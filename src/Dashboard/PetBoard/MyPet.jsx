import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from 'framer-motion';

const MyPet = () => {
  const initialPets = useLoaderData();
  const navigate = useNavigate();
  const [allPets, setAllPets] = useState(initialPets);
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 10;

  useEffect(() => {
    fetch(`https://assignment-12-server-two-smoky.vercel.app/add-pet`)
      .then((res) => res.json())
      .then((data) => setAllPets(data));
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-12-server-two-smoky.vercel.app/add-pet/${_id}`, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your pet has been removed.',
              'success'
            )
            const remaining = allPets.filter(pet => pet._id !== _id);
            setAllPets(remaining);
            navigate('/admin/dashboard/my-pet')
          }
        })
      }
    })
  }

  // Pagination logic
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = allPets.slice(indexOfFirstPet, indexOfLastPet);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPets.length / petsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className='mb-6 text-3xl font-bold text-gray-800'>Manage My Pets</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                No.
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Pet Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Adopted
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Category
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPets.map((pet, index) => (
              <tr key={pet._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {indexOfFirstPet + index + 1}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{pet.name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">False</span>
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{pet.category}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Link
                    to={`/admin/dashboard/add-pet/${pet._id}`}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(pet._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <nav>
          <ul className="flex list-none">
            {pageNumbers.map(number => (
              <li key={number} className="mx-1">
                <button
                  onClick={() => setCurrentPage(number)}
                  className={`px-3 py-1 rounded ${currentPage === number ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default MyPet;