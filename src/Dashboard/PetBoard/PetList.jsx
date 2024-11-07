import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root'); // For accessibility

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [currentPet, setCurrentPet] = useState(null);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('https://pet-adoption-corner-server.vercel.app/pet-listing');
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
      toast.error('Error fetching pets', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const openAddModal = () => {
    setAddModalIsOpen(true);
    setCurrentPet({
      picture: '',
      name: '',
      age: '',
      location: '',
      category: '',
      short_description: '',
      long_description: '',
     
    });
  };

  const closeAddModal = () => {
    setAddModalIsOpen(false);
  };

  const openEditModal = (pet) => {
    setEditModalIsOpen(true);
    setCurrentPet(pet);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    setCurrentPet({ ...currentPet, [e.target.name]: e.target.value });
  };

  const savePet = async () => {
    try {
      if (currentPet._id) {
        await axios.put(`https://pet-adoption-corner-server.vercel.app/pet-listing/${currentPet._id}`, currentPet);
        toast.success('Pet updated successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        await axios.post('https://pet-adoption-corner-server.vercel.app/pet-listing', currentPet);
        toast.success('Pet added successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      await fetchPets();
      closeModal();
    } catch (error) {
      console.error('Error saving pet:', error);
      toast.error('Error saving pet', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const deletePet = async (id) => {
    try {
      await axios.delete(`https://pet-adoption-corner-server.vercel.app/pet-listing/${id}`);
      toast.success('Pet deleted', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      await fetchPets();
    } catch (error) {
      console.error('Error deleting pet:', error);
      toast.error('Error deleting pet', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const closeModal = () => {
    setAddModalIsOpen(false);
    setEditModalIsOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen max-w-7xl">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="z-100 mt-12"
      />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary-600">Pet Listing</h1>
        <button
          onClick={openAddModal}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-primary-800"
        >
          <FaPlus />
          <span>Add New Pet</span>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-primary-600">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet._id} className="text-center border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2">{pet.name}</td>
                <td className="px-4 py-2">{pet.age}</td>
                <td className="px-4 py-2">{pet.location}</td>
                <td className="px-4 py-2">{pet.category}</td>
                <td className="px-4 py-2 flex justify-center space-x-4">
                  
                  <button
                    onClick={() => deletePet(pet._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Pet Modal */}
      <Modal
        isOpen={addModalIsOpen || editModalIsOpen}
        onRequestClose={closeModal}
        className="bg-white p-6 mt-12 rounded-lg shadow-lg max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-primary-600">
          {currentPet?._id ? 'Edit Pet' : 'Add New Pet'}
        </h2>
        <input
          type="text"
          name="name"
          value={currentPet?.name || ''}
          onChange={handleInputChange}
          placeholder="Name"
          className="border p-2 w-full mb-3 rounded-md"
        />
        <input
          type="number"
          name="age"
          value={currentPet?.age || ''}
          onChange={handleInputChange}
          placeholder="Age"
          className="border p-2 w-full mb-3 rounded-md"
        />
        <input
          type="text"
          name="location"
          value={currentPet?.location || ''}
          onChange={handleInputChange}
          placeholder="Location"
          className="border p-2 w-full mb-3 rounded-md"
        />
        <input
          type="text"
          name="category"
          value={currentPet?.category || ''}
          onChange={handleInputChange}
          placeholder="Category"
          className="border p-2 w-full mb-3 rounded-md"
        />
        <textarea
          name="short_description"
          value={currentPet?.short_description || ''}
          onChange={handleInputChange}
          placeholder="Short Description"
          className="border p-2 w-full mb-3 rounded-md"
        />
        <textarea
          name="long_description"
          value={currentPet?.long_description || ''}
          onChange={handleInputChange}
          placeholder="Long Description"
          className="border p-2 w-full mb-3 rounded-md"
        />
        <div className="flex justify-end">
          <button
            onClick={savePet}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-800 mr-2"
          >
            {currentPet?._id ? 'Update Pet' : 'Add Pet'}
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PetList;