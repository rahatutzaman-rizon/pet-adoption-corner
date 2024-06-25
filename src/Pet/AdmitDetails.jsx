
import { Card } from 'flowbite-react';
import { FiMail, FiPhone } from 'react-icons/fi';

import { Link } from "react-router-dom";


const AdmitDetails = ({cart}) => {
    const {name,petname,phone,email}=cart
    return (
      <div className="max-w-md mx-auto mt-16 gap-8 ">
      <Card className="p-4 bg-white shadow-md rounded-md bg-gradient-to-r from-gray-200 to-purple-300 gap-8">
        <div className=" items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Adopt Person - {name}</h2>
          <p className="text-blue-500 font-bold">Pet Name:- {petname}</p>
        </div>
        <div className="mb-2">
          <p className="text-gray-600 mb-2">Location: Dhaka Area</p>
          <p className="text-gray-600 mb-2">Email: {email}</p>
          <p className="text-gray-600 mb-2">Phone: {phone}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FiMail className="text-gray-600" />
            <span className="text-gray-600"> Our Email: petadopt1@gmail.com </span>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone className="text-gray-600" />
            <span className="text-gray-600">Call :0177172836 </span>
          </div>

         
        </div>
      </Card>

    </div>
    );
};

export default AdmitDetails;