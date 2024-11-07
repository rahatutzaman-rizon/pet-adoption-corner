// src/PetAdoptionTable.js

import React, { useEffect, useState } from 'react';

const PetAdoptionTable = () => {
  const [petData, setPetData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to generate random pet ID
  const generatePetID = () => {
    return Math.floor(Math.random() * 100000) + 1; // Random ID between 1 and 100000
  };

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://pet-adoption-corner-server.vercel.app/adopt');
        const data = await response.json();
        const dataWithID = data.map(item => ({
          ...item,
          petID: generatePetID(),
        }));
        setPetData(dataWithID);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-primary-600 mb-4">Welcome to the Pet Adoption Corner</h1>
      <p className="text-center text-primary-600 mb-6 text-lg">We will reach out to you as soon as possible!</p>

      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-primary-600 font-semibold">Fetching data, please wait...</p>
        </div>
      ) : (
        <div className="w-full max-w-6xl overflow-hidden rounded-lg shadow-lg bg-white">
          <table className="min-w-full bg-white">
            <thead className="bg-primary-600 text-white">
              <tr>
                <th className="py-3 px-5 text-left">Pet ID</th>
                <th className="py-3 px-5 text-left">Name</th>
                <th className="py-3 px-5 text-left">Email</th>
                <th className="py-3 px-5 text-left">Phone</th>
                <th className="py-3 px-5 text-left">Address</th>
                <th className="py-3 px-5 text-left">Pet Name</th>
              </tr>
            </thead>
            <tbody>
              {petData.map((item, index) => (
                <tr key={index} className="even:bg-gray-100 odd:bg-white text-primary-600">
                  <td className="py-3 px-5 border-b">{item.petID}</td>
                  <td className="py-3 px-5 border-b">{item.name}</td>
                  <td className="py-3 px-5 border-b">{item.email}</td>
                  <td className="py-3 px-5 border-b">{item.phone}</td>
                  <td className="py-3 px-5 border-b">{item.address}</td>
                  <td className="py-3 px-5 border-b">{item.petname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PetAdoptionTable;
