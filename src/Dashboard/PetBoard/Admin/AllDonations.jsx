import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Loading from "../../../pages/Home/Loading";

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
            );
            const remaining = users.filter(user => user._id !== _id);
            setUsers(remaining);
            navigate('/admin/dashboard/alldonations');
          }
        })
        .catch(error => {
          setIsLoading(false);
          console.error(error);
          Swal.fire(
            'Error!',
            'There was a problem deleting the donation.',
            'error'
          );
        });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className=" border-t-4 border-b-4 border-primary-600">
          <Loading></Loading>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="mb-2 bg-primary-50 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-2 text-center text-primary-600">All Pet Donations</h1>
        <p className="text-center text-primary-400">Review and manage all the pet donations here. You can delete any entry as needed.</p>
      </div>
      {users.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No donations found. Please check back later.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full bg-white border-collapse">
            <thead className="bg-primary-600 text-white">
              <tr>
                <th scope="col" className="py-3 px-6 text-left font-semibold">Donor Name</th>
                <th scope="col" className="py-3 px-6 text-left font-semibold">Donated Pet</th>
                <th scope="col" className="py-3 px-6 text-left font-semibold">User Email</th>
                <th scope="col" className="py-3 px-6 text-left font-semibold">Phone</th>
                <th scope="col" className="py-3 px-6 text-left font-semibold">Location</th>
                <th scope="col" className="py-3 px-6 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b even:bg-gray-100 hover:bg-gray-200">
                  <td className="py-3 px-6">{user.name}</td>
                  <td className="py-3 px-6">{user.petname}</td>
                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-6">{user.phone}</td>
                  <td className="py-3 px-6">{user.address}</td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-150"
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
