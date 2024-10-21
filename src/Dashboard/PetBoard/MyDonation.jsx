import  { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaDog, FaDollarSign, FaExchangeAlt, FaPhoneAlt, FaUndo, 
  FaPiggyBank,FaChartLine, FaUsers, FaPaw 
} from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const MyDonation = () => {
  const navigate = useNavigate();
  const donate = useLoaderData();
  const [users, setUsers] = useState(donate);
  const [isLoading, setIsLoading] = useState(true);
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedPet, setSelectedPet] = useState("");

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

  const handleDonation = (e) => {
    e.preventDefault();
    if (!selectedPet) {
      Swal.fire('Error!', 'Please select a pet to donate to.', 'error');
      return;
    }
    Swal.fire({
      title: 'Confirm Donation',
      text: `You're about to donate $${donationAmount} to ${selectedPet}. Proceed?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, donate!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Here you would typically handle the donation process
        Swal.fire(
          'Thank you!',
          `You've donated $${donationAmount} to ${selectedPet}`,
          'success'
        );
        setDonationAmount("");
        setSelectedPet("");
      }
    });
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
        />
      </div>
    );
  }

  const totalAmount = users.reduce((sum, donation) => sum + parseFloat(donation.amount), 0);
  const averageDonation = users.length > 0 ? totalAmount / users.length : 0;

  return (
    
    <div>
    
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          My Donations Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <StatCard 
            icon={<FaPiggyBank className="text-3xl text-blue-500" />}
            title="Total Donations"
            value={`$${totalAmount.toFixed(2)}`}
            color="blue"
          />
          <StatCard 
            icon={<FaChartLine className="text-3xl text-green-500" />}
            title="Average Donation"
            value={`$${averageDonation.toFixed(2)}`}
            color="green"
          />
          <StatCard 
            icon={<FaUsers className="text-3xl text-purple-500" />}
            title="Total Donors"
            value={users.length}
            color="purple"
          />
          <StatCard 
            icon={<FaPaw className="text-3xl text-yellow-500" />}
            title="Pets Helped"
            value={new Set(users.map(u => u.petname)).size}
            color="yellow"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          <div className="lg:col-span-2">
            <AnimatePresence>
              {users.length === 0 ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-xl p-8 text-center"
                >
                  <IoMdInformationCircleOutline className="text-6xl text-gray-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-600">No donations found.</p>
                  <p className="mt-2 text-gray-500">Make your first donation to get started!</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-lg shadow-xl overflow-hidden"
                >
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pet</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bkash</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((donation, idx) => (
                        <motion.tr
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          className="hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FaDog className="text-blue-500 mr-2" />
                              <span className="text-sm font-medium text-gray-900">{donation.petname}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FaDollarSign className="text-green-500 mr-1" />
                              <span className="text-sm text-gray-900">{donation.amount}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FaExchangeAlt className="text-gray-400 mr-2" />
                              <span className="text-sm text-gray-500">{donation.transaction}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FaPhoneAlt className="text-gray-400 mr-2" />
                              <span className="text-sm text-gray-500">{donation.bkash}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleRefund(donation._id)}
                              className="text-red-600 hover:text-red-900 flex items-center"
                            >
                              <FaUndo className="mr-1" />
                              Refund
                            </motion.button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Make a Donation</h2>
            <form onSubmit={handleDonation} className="space-y-6">
              <div>
                <label htmlFor="pet" className="block text-sm font-medium text-gray-700">Select Pet</label>
                <select
                  id="pet"
                  name="pet"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={selectedPet}
                  onChange={(e) => setSelectedPet(e.target.value)}
                  required
                >
                  <option value="">Choose a pet</option>
                  {Array.from(new Set(users.map(u => u.petname))).map((pet, idx) => (
                    <option key={idx} value={pet}>{pet}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount ($)</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaDollarSign className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    required
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaHandHoldingHeart className="mr-2" />
                Donate Now
              </motion.button>
            </form>
          </motion.div> */}
        </div>
      </div>
    </motion.div>
    </div>
  );
};

const StatCard = ({ icon, title, value, color }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
    className={`bg-white rounded-lg shadow-lg p-6 border-t-4 border-${color}-500`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
        <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
      </div>
      <div className={`bg-${color}-100 rounded-md p-3`}>
        {icon}
      </div>
    </div>
  </motion.div>
);

export default MyDonation;