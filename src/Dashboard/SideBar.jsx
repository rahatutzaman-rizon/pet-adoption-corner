import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPaw, FaHeart, FaPlus, FaUserFriends, FaChartBar, FaSignOutAlt, FaDonate, FaList, FaMoneyBill, FaShoppingBag, FaPaypal, FaFirstOrderAlt } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Sidebar = ({ closeSidebar }) => {
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
      const seeUsers = data.data.filter(userItem => userItem.email === user?.email);
      const userType = seeUsers?.[0]?.role;
      setRole(userType);
    }
  }, [data, user]);

  const navItems = [
    { name: 'Dashboard', icon: <FaChartBar />, href: '/admin/dashboard' },
    { name: 'Donations History', icon: <FaDonate />, href: '/admin/dashboard/mydonation' },
    { name: 'Donation List', icon: <FaMoneyBill />, href: '/admin/dashboard/donation-list' },
    
    { name: 'Pet Listing', icon: <FaPaw />, href: '/admin/dashboard/petlisting' },
    { name: 'Adoption List', icon: <FaList />, href: '/admin/dashboard/adoption-list' },
    
    { name: 'Shop', icon: <FaShoppingBag />, href: '/admin/dashboard/shop' },
    { name: 'Order', icon: <FaFirstOrderAlt />, href: '/admin/dashboard/order' },
    { name: 'Payment History', icon: <FaPaypal />, href: '/admin/dashboard/payment' },


  
  
    { name: 'Users', icon: <FaUserFriends />, href: '/admin/dashboard/users' },
    { name: 'Donations Pet', icon: <FaHeart />, href: '/admin/dashboard/alldonations' },
  ];

  const adminItems = [
    { name: 'Users', icon: <FaUserFriends />, href: '/admin/dashboard/users' },
    { name: 'All Donations', icon: <FaHeart />, href: '/admin/dashboard/alldonations' },
    { name: 'All Pets', icon: <FaPaw />, href: '/admin/dashboard/allpets' },
  ];

  const displayedNavItems = role === 'admin' ? adminItems : navItems;

  return (
    <div className="flex flex-col h-screen bg-white shadow-lg">
      {/* User Info Section */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="User" className="w-full h-full rounded-full" />
            ) : (
              <FaUserFriends className="text-gray-600" />
            )}
          </div>
          <div>
            <h3 className="font-medium text-gray-800">{user?.displayName || 'User'}</h3>
          
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-primary animate-pulse font-medium">Loading navigation...</p>
          </div>
        ) : (
          <nav className="p-4 space-y-2">
            {displayedNavItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={closeSidebar}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 
                  ${location.pathname === item.href 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <Link
          to="/logout"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200"
        >
          <FaSignOutAlt className="text-lg" />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;