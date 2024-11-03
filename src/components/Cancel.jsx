import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, RefreshCcw } from 'lucide-react';

const Cancel = () => {
  return (
    <div className= " mt-24 min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Cancel Message */}
        <div className="text-center">
          <XCircle className="mx-auto h-16 w-16 text-red-500" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Payment Canceled</h1>
          <p className="mt-2 text-lg text-gray-600">No worries! Your payment was not processed.</p>
        </div>

        {/* Information Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">What happened?</h2>
            <p className="text-sm text-gray-500 mt-1">Information about your canceled transaction</p>
          </div>
          <div className="px-6 py-4 space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                The payment process was interrupted or canceled. This could be due to:
              </p>
              <ul className="mt-2 space-y-2 text-gray-600 text-sm list-disc list-inside">
                <li>You chose to cancel the payment</li>
                <li>The session timed out</li>
                <li>There was an issue with the payment method</li>
                <li>The browser window was closed during processing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/donation-list"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            <RefreshCcw className="h-5 w-5 mr-2" />
            Try Again
          </Link>
          
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Return Home
          </Link>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Help?</h3>
          <p className="text-blue-700 text-sm mb-2">
            If you are experiencing issues with making a donation, our support team is here to help.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <a 
              href="mailto:support@example.com" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Contact Support
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="/faq" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View FAQ
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500">
          <p>Your generosity makes a difference.</p>
          <p>We hope youll consider trying again when you are ready.</p>
        </div>
      </div>
    </div>
  );
};

export default Cancel;