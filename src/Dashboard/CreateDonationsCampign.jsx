import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreateDonationsCampign = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const campaignData = {
      name: form.name.value,
      short: form.short.value,
      long: form.long.value,
      date: form.date.value,
      max: form.max.value,
      total: form.total.value,
      user: form.user.value,
      email: form.email.value,
    };

    fetch("https://assignment-12-server-two-smoky.vercel.app/donation-campaign", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(campaignData),
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Donation Campaign Added Successfully',
          icon: 'success',
          confirmButtonText: 'Great!'
        });
        navigate('/');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add campaign. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Create Donation Campaign</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Pet Name</label>
                <input type="text" name="name" id="name" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="max" className="block text-sm font-medium text-gray-700">Maximum Donation</label>
                <input type="number" name="max" id="max" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="total" className="block text-sm font-medium text-gray-700">Highest Total</label>
                <input type="number" name="total" id="total" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Last Date</label>
                <input type="date" name="date" id="date" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="user" className="block text-sm font-medium text-gray-700">User Name</label>
                <input type="text" name="user" id="user" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="short" className="block text-sm font-medium text-gray-700">Short Description</label>
              <textarea name="short" id="short" rows="3" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <div>
              <label htmlFor="long" className="block text-sm font-medium text-gray-700">Long Description</label>
              <textarea name="long" id="long" rows="5" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateDonationsCampign;