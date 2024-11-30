import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Loading from '../Home/Loading';

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://pet-adoption-corner-server.vercel.app/order');
        const data = await response.json();
        setOrders(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
      <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
      >
        Order Details
      </motion.h1>
      
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {orders.map((order, index) => (
          <motion.div
            key={order._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="space-y-2">
              <p className="text-xs text-gray-500">Order ID: #{order._id.slice(-6)}</p>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-primary-600">{order.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  For: {order.forAnimal}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                <p>Quantity: {order.quantity}</p>
                <p>Client: {order.client}</p>
                <div className="mt-2 pt-2 border-t">
                  <p className="text-primary-600">{order.email}</p>
                  <p className="text-primary-600">{order.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="hidden md:block overflow-x-auto shadow-lg rounded-lg"
      >
        <table className="w-full bg-white">
          <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <tr>
              <th className="py-4 px-6 text-left">Order ID</th>
              <th className="py-4 px-6 text-left">Product Name</th>
              <th className="py-4 px-6 text-left">For Animal</th>
              <th className="py-4 px-6 text-left">Quantity</th>
              <th className="py-4 px-6 text-left">Client</th>
              <th className="py-4 px-6 text-left">Contact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order, index) => (
              <motion.tr 
                key={order._id} 
                className="hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="py-4 px-6 text-sm">#{order._id.slice(-6)}</td>
                <td className="py-4 px-6 font-medium text-primary-600">{order.name}</td>
                <td className="py-4 px-6">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {order.forAnimal}
                  </span>
                </td>
                <td className="py-4 px-6 text-primary-600">{order.quantity}</td>
                <td className="py-4 px-6 text-primary-600">{order.client}</td>
                <td className="py-4 px-6">
                  <p className="text-primary-600">{order.email}</p>
                  <p className="text-primary-600">{order.phone}</p>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default OrderTable;