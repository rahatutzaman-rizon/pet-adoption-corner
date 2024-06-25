import { useLoaderData } from "react-router-dom";
import AdmitDetails from "./AdmitDetails";

const AdmitPet = () => {
    const cartitem=useLoaderData();
    console.log(cartitem)
    return (
        <div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 gap-16 my-4 py-10 ml-8 mr-4'>
            {
                cartitem.map((cart)=>
            <AdmitDetails
            key={cart._id}
            cart={cart}> </AdmitDetails>)
            
            }
       </div>
        </div>
        
    );
};

export default AdmitPet;