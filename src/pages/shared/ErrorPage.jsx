import { useRouteError, Link } from 'react-router-dom';
import { AlertCircle, Home, HelpCircle, ArrowLeft, RefreshCw, Mail } from 'lucide-react';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Error Icon and Status */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <AlertCircle className="w-64 h-64" />
          </div>
          <div className="relative">
            <AlertCircle className="mx-auto h-24 w-24 text-indigo-600" />
            <h2 className="mt-4 text-6xl font-bold text-indigo-600">404</h2>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
          Oops! Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldnot find the page you are looking for.
        </p>
        {error.statusText || error.message && (
          <p className="mt-2 text-sm text-gray-500 italic">
            Error: {error.statusText || error.message}
          </p>
        )}

        {/* Possible Reasons */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            This might have happened because:
          </h3>
          <ul className="text-left space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 mr-2"></span>
              The page has been moved or deleted
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 mr-2"></span>
              There might be a typo in the URL
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 mr-2"></span>
              You might not have permission to access this page
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 mr-2"></span>
              The page might be temporarily unavailable
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Back Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Refresh Page
          </button>
        </div>

        {/* Help Section */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-indigo-50 rounded-lg p-6">
            <HelpCircle className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Help?</h3>
            <p className="text-gray-600 text-sm">
              Visit our help center for assistance or contact our support team.
            </p>
            <a 
              href="/help"
              className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700 text-sm font-medium"
            >
              Visit Help Center
            </a>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6">
            <Mail className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Support</h3>
            <p className="text-gray-600 text-sm">
              Our support team is available 24/7 to help you with any issues.
            </p>
            <a 
              href="mailto:support@example.com"
              className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700 text-sm font-medium"
            >
              Email Support
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-gray-500">
          <p>Error Code: {error.status || '404'}</p>
          <p className="mt-1">Time: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;