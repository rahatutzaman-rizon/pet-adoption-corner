import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Loading from '../../pages/Home/Loading';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch('https://pet-adoption-corner-server.vercel.app/paymentlist');
        const data = await response.json();
        setPayments(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching payments:', error);
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="w-full">
    <h1 className='text-5xl text-center text-primary-600 mb-8'>Payment History</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
         
         
         <Loading></Loading>
        </div>
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-primary-600 text-white">
              <th className="px-4 py-2">Campaign ID</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Days Ago</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.campaignId} className="border-b">
                <td className="px-4 py-2 text-primary-600">{payment.campaignId}</td>
                <td className="px-4 py-2 text-primary-600">{payment.amount.toFixed(2)}</td>
                <td className="px-4 py-2 text-primary-600">{payment.status}</td>
                <td className="px-4 py-2 text-primary-600">
                  {format(new Date(payment.createdAt), 'MMM d, yyyy h:mm aa')}
                </td>
                <td className="px-4 py-2 text-primary-600">
                  {Math.floor(
                    (new Date().getTime() - new Date(payment.createdAt).getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PaymentList;