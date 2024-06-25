import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AllPets = () => {
const  allpets=useLoaderData();


const navigate=useNavigate();
 
    
const [users,setUsers]=useState(allpets);

const  handledelete =_id=>{
  
  fetch(`https://assignment-12-server-two-smoky.vercel.app/pet-listing/${_id}`, {
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

navigate('/admin/dashboard/allpets')
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
       
       <th className="py-2 px-4 border-b">Pet Name</th>
       <th className="py-2 px-4 border-b">Category</th>
       <th className="py-2 px-4 border-b">Age</th>
       <th className="py-2 px-4 border-b"> Desc </th>
       <th className="py-2 px-4 border-b">Location</th>
     </tr>
   </thead>
   <tbody>
     {allpets.map((campaign,idx) => (
       <tr key={idx}>
         
         <td className="py-2 px-4 border-b">{campaign.name}</td>
         <td className="py-2 px-4 border-b">{campaign.category}</td>
         <td className="py-2 px-4 border-b">{campaign.age}</td>
         <td className="py-2 px-4 border-b">{campaign.short_description}</td>
         <td className="py-2 px-4 border-b">{campaign.location}</td>
        
         <td className="py-2 px-4 border-b">
           <button
             onClick={() => handledelete(campaign._id)}
             className="bg-teal-500 text-white py-1 px-2 rounded"
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

export default AllPets;