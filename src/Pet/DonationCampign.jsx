import { useLoaderData } from "react-router-dom";
import DonationCamCard from "./DonationCamCard";


const DonationCampign = () => {
    const donationCampaigns=useLoaderData();

    return (
        <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
      {donationCampaigns.map((campaign,idx) => (
        <DonationCamCard key={idx}
         campaign={campaign} />
      ))}
    </div>
    );
};

export default DonationCampign;