import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { CheckCircle, ArrowLeft, Mail, Clock, DollarSign } from 'lucide-react';

const Success = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sessionId = searchParams.get('session_id');
  const campaignId = searchParams.get('campaign_id');
  const amount = searchParams.get('amount');

  useEffect(() => {
    if (sessionId) {
      axios.post('http://localhost:5000/verify-payment', { sessionId, campaignId, amount })
        .then(response => {
          console.log('Payment verified:', response.data);
        })
        .catch(error => {
          console.error('Payment verification failed:', error);
        });
    }
  }, [sessionId, campaignId, amount]);

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount || 0);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 mt-24">
      <div className="max-w-2xl w-full space-y-8">
        {/* Success Message */}
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Payment Successful!</h1>
          <p className="mt-2 text-lg text-gray-600">Thank you for your generous donation</p>
        </div>

        {/* Payment Details Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Transaction Details</h2>
            <p className="text-sm text-gray-500 mt-1">Overview of your donation</p>
          </div>
          <div className="px-6 py-4 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Amount</span>
              </div>
              <span className="text-lg font-semibold text-green-600">{formattedAmount}</span>
            </div>
            
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Transaction ID</span>
              </div>
              <span className="text-sm text-gray-600">{sessionId?.slice(0, 16)}...</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Receipt</span>
              </div>
              <span className="text-sm text-gray-600">Sent to your email</span>
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">What happens next?</h3>
          <p className="text-blue-700 text-sm">
            You will receive a confirmation email with your donation details shortly. 
            Your contribution will be processed within the next 24 hours.
          </p>
        </div>

        {/* Return Button */}
        <div className="text-center">
          <button 
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center space-x-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Homepage</span>
          </button>
        </div>

        {/* Additional Information */}
        <div className="text-center text-sm text-gray-500">
          <p>Having issues? Contact our support team</p>
         
        </div>
      </div>
    </div>
  );
};

export default Success;