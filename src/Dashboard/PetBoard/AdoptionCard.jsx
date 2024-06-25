import { useParams } from "react-router-dom";


const AdoptionCard = ({campaign}) => {
    const {_id, name, picture, age, location, short_description}=campaign;
    const {id}=useParams();
    return (
        <div>
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 mt-24 my-16">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={picture} alt={name} />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="bg-cyan-300 text-white rounded-full px-4 py-2 hover:bg-cyan-600"
            
          >
            Adopt
          </button>
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">Age: {age}</p>
        <p className="text-gray-600 mb-2">Location: {location}</p>
        <p className="text-gray-700 mb-4"> description :{short_description}</p>
      </div>
    </div>
        </div>
    );
};

export default AdoptionCard;