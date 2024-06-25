import { useLoaderData, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useState } from "react";


const Users = () => {

    const allusers=useLoaderData();

    const navigate=useNavigate();
 
    
    const [users,setUsers]=useState(allusers);

    const  handleUser =_id=>{
      
      fetch(`https://assignment-12-server-two-smoky.vercel.app/users/${_id}`, {
        method: "DELETE",
    })
.then(res=>res.json())
.then(data =>{
  console.log(data);
  if(data.deletedCount>0){
    Swal.fire({
      title: 'Success!',
      text: 'Users delete Successfully',
      icon: 'success',
      confirmButtonText: 'Cool'

    })

    const remaining=users.filter(user => user._id !==_id);
    setUsers(remaining);

    navigate('/admin/dashboard/users')
  }
})
    }
    
    
    return (
        <div>
        <div className="container mx-auto mt-24 w-64 ml-24">
  <table className="min-w-full bg-cyan-300  border border-gray-300">
    <thead>
      <tr>
        
        <th className="py-2 px-4 border-b"> Name</th>
        <th className="py-2 px-4 border-b">Email </th>
        <th className="py-2 px-4 border-b">Role</th>
       
        <th className="py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      {allusers.map((donation,idx) => (
        <tr key={idx}>
          
          <td className="py-2 px-4 border-b">{donation.name}</td>
          <td className="py-2 px-4 border-b">${donation.email}</td>
          <td className="py-2 px-4 border-b">{donation.role}</td>
          
          <td className="py-2 px-4 border-b">
            <button
              onClick={() => handleUser(donation._id)}
              className="bg-teal-500 text-white py-2 px-4 rounded"
            >
             Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
    );
};

export default Users;