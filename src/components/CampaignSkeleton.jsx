const CampaignSkeleton = () => {
    return (
      <div className="bg-white shadow-lg rounded-xl overflow-hidden animate-pulse">
        <div className="h-56 bg-gray-200" />
        <div className="p-6">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
          <div className="h-4 bg-gray-200 rounded w-full mb-4" />
          <div className="h-4 bg-gray-200 rounded w-full mb-4" />
          
          <div className="space-y-3">
            <div className="h-3 bg-gray-200 rounded-full" />
            
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CampaignSkeleton;