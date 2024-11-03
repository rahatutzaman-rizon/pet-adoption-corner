import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51Klod6Hm471kJsphqVotDcZUtqZ6hocN7E4vf7UdshqwGXS6LJSur7QoIMkp3ZA7eKN1JM8I27cWzS7FicplsVN400ZQYCk8il');

const Payment = () => {
  const [donationData, setDonationData] = useState(null);
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchDonationData();
  }, []);

  const fetchDonationData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/donation/${id}`);
      const data = await response.json();
      setDonationData(data);
    } catch (error) {
      console.error('Error fetching donation data:', error);
    }
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/create-payment-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          campaignId: donationData._id,
        }),
      });

      const session = await response.json();
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error('Error:', error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!donationData) return <div className="text-center mt-10 text-lg text-primary-600">Loading...</div>;

  const progress = (donationData.raised / donationData.target) * 100;

  return (
    <div className="max-w-3xl mx-auto my-10 px-6 py-8 bg-white shadow-lg rounded-lg mt-24">
      <h1 className="text-3xl font-bold text-primary-600 mb-4">{donationData.title}</h1>
      <p className="text-gray-700 mb-6">{donationData.description}</p>

      <div className="mb-6">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <span className="text-sm font-medium text-primary-600">Progress</span>
            <span className="text-sm font-medium text-primary-600">{progress.toFixed(1)}%</span>
          </div>
          <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-semibold text-green-600">${donationData.raised.toLocaleString()}</span> raised of{' '}
          <span className="font-semibold text-primary-600">${donationData.target.toLocaleString()}</span> goal
        </div>
      </div>

      <form onSubmit={handleDonate} className="mt-6">
        <label className="block text-sm font-medium text-primary-600 mb-2" htmlFor="amount">
          Enter Donation Amount ($)
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-4 py-2 text-white font-bold rounded-md ${
            loading ? 'bg-gray-400' : 'bg-primary-600 hover:bg-primary-700'
          }`}
        >
          {loading ? 'Processing...' : 'Donate Now'}
        </button>
      </form>

      <div className="mt-6 text-gray-600">
        <span className="font-semibold">{donationData.donors}</span> donors |{' '}
        <span className="font-semibold">{donationData.daysLeft}</span> days left
      </div>
    </div>
  );
};

export default Payment;
