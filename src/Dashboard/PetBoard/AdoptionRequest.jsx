import { useLoaderData, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useState } from "react";



const AdoptionRequest = () => {
    const adoption=useLoaderData();
   

    const navigate=useNavigate();
 
    
    const [users,setUsers]=useState(adoption);

    const  handleAdoption =_id=>{
      console.log('delete',_id);
      fetch(`https://assignment-12-server-two-smoky.vercel.app/adoption/${_id}`, {
        method: "DELETE",
    })
.then(res=>res.json())
.then(data =>{
  console.log(data);
  if(data.deletedCount>0){
    Swal.fire({
      title: 'Success!',
      text: 'My adopted Successfully',
      icon: 'success',
      confirmButtonText: 'Cool'

    })

    const remaining=users.filter(user => user._id !==_id);
    setUsers(remaining);

    navigate('/admin/dashboard/adoption')
  }
})
    }
    
    return (
        <div>
        <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {adoption.map((campaign, idx) => (
            <div key={idx} className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 mt-24 my-16">
              <div className="relative">
                <img className="w-full h-48 object-cover" src={campaign.picture} alt={campaign.name} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button  onClick={() => handleAdoption(campaign._id)}
                    className="bg-cyan-300 text-white rounded-full px-4 py-2 hover:bg-cyan-600"
                  >
                    Adopt
                  </button>

                  
                </div>
              </div>
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{campaign.name}</h2>
                <p className="text-gray-600 mb-2">Age: {campaign.age}</p>
                <p className="text-gray-600 mb-2">Location: {campaign.location}</p>
                <p className="text-gray-700 mb-4">Description: {campaign.short_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
};

export default AdoptionRequest;