import  { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPaw, FaHeart, FaPlus, FaUserFriends, FaChartBar, FaSignOutAlt, FaDog, FaCat, FaDonate } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Sidebar = () => {
  const [role, setRole] = useState("");
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const getUsers = async () => {
    const res = await axios.get("https://assignment-12-server-two-smoky.vercel.app/users");
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers
  });

  useEffect(() => {
    if (data?.data) {
      const seeUsers = data.data.filter(check => check.email === user?.email);
      const userType = seeUsers?.[0]?.role;
      setRole(userType);
    }
  }, [data, user]);

  const navItems = [
    { name: 'Dashboard', icon: <FaChartBar />, href: '/admin/dashboard' },
    { name: 'My Donations', icon: <FaHeart />, href: '/admin/dashboard/mydonation' },
    { name: 'Donation Campaigns', icon: <FaDonate />, href: '/admin/dashboard/donation-campaign' },
    { name: 'Create Campaign', icon: <FaPlus />, href: '/admin/dashboard/create-donation-campaign' },
    { name: 'My Pets', icon: <FaPaw />, href: '/admin/dashboard/my-pet' },
    { name: 'Add Pet', icon: <FaPlus />, href: '/admin/dashboard/add-pet' },
    { name: 'Adoption Requests', icon: <FaUserFriends />, href: '/admin/dashboard/adoption' },
  ];

  const adminItems = [
    { name: 'Users', icon: <FaUserFriends />, href: '/admin/dashboard/users' },
    { name: 'All Donations', icon: <FaHeart />, href: '/admin/dashboard/alldonations' },
    { name: 'All Pets', icon: <FaPaw />, href: '/admin/dashboard/allpets' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex mt-12">
      <aside className="bg-white w-64 min-h-screen flex flex-col shadow-lg">
        <div className="p-4">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-blue-500">
              <img 
                src={user?.photoURL || "https://i.ibb.co/M8zLm51/pet.jpg"} 
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center mb-6">{user?.displayName || "Demo User"}</h2>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="px-2">
            {navItems.map((item, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={item.href}
                  className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
            
            {role === "admin" && (
              <>
                <li className="mt-6 mb-2 px-2 text-xs font-semibold text-gray-400 uppercase">
                  Admin
                </li>
                {adminItems.map((item, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      to={item.href}
                      className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'bg-blue-500 text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </nav>
        <div className="p-4">
          {/* <Link to="/logout" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <FaSignOutAlt className="mr-3" />
            <span>Log out</span>
          </Link> */}
        </div>
      </aside>
      <main className="flex-1 p-6">
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;