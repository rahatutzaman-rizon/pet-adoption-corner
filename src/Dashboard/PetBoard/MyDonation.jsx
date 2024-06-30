import { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyDonation = () => {
  const navigate = useNavigate();
  const donate = useLoaderData();
  const [users, setUsers] = useState(donate);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleRefund = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, request refund!'
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        fetch(`https://assignment-12-server-two-smoky.vercel.app/donation-detail/${_id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            setIsLoading(false);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Refund Requested!',
                'Your refund request has been sent.',
                'success'
              )
              const remaining = users.filter(user => user._id !== _id);
              setUsers(remaining);
              navigate('/admin/dashboard/mydonation')
            }
          })
          .catch(error => {
            setIsLoading(false);
            Swal.fire(
              'Error!',
              'There was a problem processing your request.',
              'error'
            )
          });
      }
    })
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">My Donations</h1>
      {users.length === 0 ? (
        <p className="text-center text-gray-600">No donations found.</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pet Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donated Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Bkash Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((donation, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{donation.petname}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${donation.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{donation.transaction}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{donation.bkash}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleRefund(donation._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                      Request Refund
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyDonation;