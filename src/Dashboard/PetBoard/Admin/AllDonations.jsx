import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AllDonations = () => {
    const alldonation=useLoaderData();
    const navigate=useNavigate();
 
    
const [users,setUsers]=useState(alldonation);

const  handledelete =_id=>{
  
  fetch(`https://assignment-12-server-two-smoky.vercel.app/adopt/${_id}`, {
    method: "DELETE",
})
.then(res=>res.json())
.then(data =>{
console.log(data);
if(data.deletedCount>0){
Swal.fire({
  title: 'Success!',
  text: 'Users pet delete Successfully',
  icon: 'success',
  confirmButtonText: 'Cool'

})

const remaining=users.filter(user => user._id !==_id);
setUsers(remaining);

navigate('/admin/dashboard/alldonations')
}
})
}
    return (
        <div>
        <div>
       <div className="container mx-auto mt-24">
 <table className="min-w-full bg-cyan-300  border border-gray-300">
   <thead>
     <tr>
       
       <th className="py-2 px-4 border-b">Donar Name</th>
       <th className="py-2 px-4 border-b">Donate Pet</th>
       <th className="py-2 px-4 border-b">User email</th>
       <th className="py-2 px-4 border-b">phone </th>
       <th className="py-2 px-4 border-b">Location</th>
     </tr>
   </thead>
   <tbody>
     {alldonation.map((campaign,idx) => (
       <tr key={idx}>
         
         <td className="py-2 px-4 border-b">{campaign.name}</td>
         <td className="py-2 px-4 border-b">{campaign.petname}</td>
         <td className="py-2 px-4 border-b">{campaign.email}</td>
         <td className="py-2 px-4 border-b">{campaign.phone}</td>
         <td className="py-2 px-4 border-b">{campaign.address}</td>
        
         <td className="py-2 px-4 border-b">
           <button
             onClick={() => handledelete(campaign._id)}
             className="bg-orange-500 text-white py-1 px-2 rounded"
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
   </div>
    );
};

export default AllDonations;