import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const MyDonation = () => {

  const navigate=useNavigate();
 
    const donate=useLoaderData();
    console.log(donate);
    const [users,setUsers]=useState(donate);

    const  handleRefund =_id=>{
      console.log('delete',_id);
      fetch(`https://assignment-12-server-two-smoky.vercel.app/donation-detail/${_id}`, {
        method: "DELETE",
    })
.then(res=>res.json())
.then(data =>{
  console.log(data);
  if(data.deletedCount>0){
    Swal.fire({
      title: 'Success!',
      text: 'transcation Successfully',
      icon: 'success',
      confirmButtonText: 'Cool'

    })

    const remaining=users.filter(user => user._id !==_id);
    setUsers(remaining);

    navigate('/admin/dashboard/mydonation')
  }
})

  }
    return (
        <div>
            <div className="container mx-auto mt-24">
      <table className="min-w-full bg-cyan-300  border border-gray-300">
        <thead>
          <tr>
            
            <th className="py-2 px-4 border-b">Pet Name</th>
            <th className="py-2 px-4 border-b">Donated Amount</th>
            <th className="py-2 px-4 border-b">Transaction Number</th>
            <th className="py-2 px-4 border-b"> User Bkash Number</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {donate.map((donation,idx) => (
            <tr key={idx}>
              
              <td className="py-2 px-4 border-b">{donation.petname}</td>
              <td className="py-2 px-4 border-b">${donation.amount}</td>
              <td className="py-2 px-4 border-b">{donation.transaction}</td>
              <td className="py-2 px-4 border-b">{donation.bkash}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleRefund(donation._id)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Ask for Refund
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

export default MyDonation;