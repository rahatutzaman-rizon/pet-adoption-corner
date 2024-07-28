import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const AllDonations = () => {
  const allDonation = useLoaderData();
  const navigate = useNavigate();
  const [users, setUsers] = useState(allDonation);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        fetch(`https://assignment-12-server-two-smoky.vercel.app/adopt/${_id}`, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
          if (data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'The pet donation has been deleted.',
              'success'
            )
            const remaining = users.filter(user => user._id !== _id);
            setUsers(remaining);
            navigate('/admin/dashboard/alldonations');
          }
        })
        .catch(error => {
          setIsLoading(false);
          Swal.fire(
            'Error!',
            'There was a problem deleting the donation.',
            'error'
          )
        });
      }
    })
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-100">All Pet Donations</h1>
      {users.length === 0 ? (
        <p className="text-center text-gray-600">No donations found.</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full bg-white">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Donor Name</th>
                <th className="py-3 px-6 text-left">Donated Pet</th>
                <th className="py-3 px-6 text-left">User Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">Location</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {users.map((campaign, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-4 px-6">{campaign.name}</td>
                  <td className="py-4 px-6">{campaign.petname}</td>
                  <td className="py-4 px-6">{campaign.email}</td>
                  <td className="py-4 px-6">{campaign.phone}</td>
                  <td className="py-4 px-6">{campaign.address}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleDelete(campaign._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                      Delete
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

export default AllDonations;