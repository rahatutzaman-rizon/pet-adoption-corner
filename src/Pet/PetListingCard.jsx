import { Link, useParams } from "react-router-dom";

const PetListingCard = ({brand}) => {
    const {id}=useParams();
    const {_id,name,picture,age,location,category}=brand;

    return (
        <div>
             <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={picture} alt={name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{name}</h2>
              <p className="text-gray-600 mb-2">Age: {age} years</p>
              <p className="text-gray-600 mb-2">Category: {category} </p>
              <p className="text-gray-600 mb-2">Location: {location}</p>
             
              <Link to={`/moredetail/${_id}`}  className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block">
              View Details
              </Link>
            </div>
          </div>
        </div>
    );
};

export default PetListingCard;