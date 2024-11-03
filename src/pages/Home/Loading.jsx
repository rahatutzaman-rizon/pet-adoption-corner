// LoadingSpinner.jsx


const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center justify-center z-50">
      <div className="animate-bounce bg-white p-2 w-20 h-20 ring-1 ring-slate-900/5 rounded-lg shadow-lg flex items-center justify-center">
        <svg className="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      <div className="mt-4 text-xl font-semibold text-gray-700">Loading amazing pets...</div>
      <div className="mt-2 text-sm text-gray-500">Please wait while we fetch the cutest companions</div>
    </div>
  );
};

export default Loading;
