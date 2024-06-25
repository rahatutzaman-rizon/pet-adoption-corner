import { useLoaderData } from "react-router-dom";

const MyDonationCampaign = () => {
     const campaign=useLoaderData();
  
    return (
        <div>
             <div>
            <div className="container mx-auto mt-24">
      <table className="min-w-full bg-cyan-300  border border-gray-300">
        <thead>
          <tr>
            
            <th className="py-2 px-4 border-b">Pet Name</th>
            <th className="py-2 px-4 border-b">Donated totalPages Amount</th>
            <th className="py-2 px-4 border-b">Maximum donation amount</th>
            <th className="py-2 px-4 border-b"> Last Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaign.map((campaign,idx) => (
            <tr key={idx}>
              
              <td className="py-2 px-4 border-b">{campaign.name}</td>
              <td className="py-2 px-4 border-b">{campaign.total}</td>
              <td className="py-2 px-4 border-b">{campaign.max}</td>
              <td className="py-2 px-4 border-b">{campaign.date}</td>
              <td className="py-2 px-4 border-b">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>View details</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg"></h3>
    <h3>  Donar Name :{campaign.donar}</h3>
       <h3> Donate amount :{campaign.give} </h3>
        
    <div className="modal-action">
      <form method="dialog">
  
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
        </div>
    );
};

export default MyDonationCampaign;