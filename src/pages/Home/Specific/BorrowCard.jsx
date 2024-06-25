


const BorrowCard = ({pass}) => {
  const {name,email,date}=pass;
    return (
        <div>
               <div className="max-w-md mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-md overflow-hidden shadow-lg border border-blue-600">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <p className="text-gray-200 text-base mb-2">{email}</p>
        <div className="border-t border-b border-blue-600 my-2"></div>
        <p className="text-gray-200 text-base">Date: {date}</p>
      </div>
    </div>
        </div>
    );
}

export default BorrowCard;