import { Link, useParams } from "react-router-dom";


const DonationCamCard = ({campaign}) => {
    const {_id,name, picture,amount}=campaign;
    const {id}=useParams();
    return (
        <div>
             <div className="bg-white p-4 rounded-md shadow-md mt-24">
      <img src={picture} alt={name} className="w-full h-32 object-cover mb-4 rounded-md" />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">Maximum Donation: $ 1000</p>
      <p className="text-gray-600 mb-2">Donated Amount: ${amount}</p>
      
      <button className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 "> 
    <Link to={`/moredetail2/${_id}`}> Details 
    </Link></button>
    </div>
        </div>
    );
};

export default DonationCamCard;