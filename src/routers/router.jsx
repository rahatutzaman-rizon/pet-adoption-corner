import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";

import { DashboardLayout } from "../Dashboard/DashboardLayout";

import Login from "../pages/Login";


import Dashboard from "../Dashboard/Dashboard";
import ManageBooks from "../Dashboard/ManageBooks";
//import EditBooks from "../Dashboard/EditBooks";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import ErrorPage from "../pages/shared/ErrorPage";


import Moredetails from "../pages/Home/Specific/Moredetails";


import PetListing from "../Pet/PetListing";
import AddPet from "../Dashboard/AddPet";
import MyPet from "../Dashboard/PetBoard/MyPet";


import CreateDonationsCampign from "../Dashboard/CreateDonationsCampign";
import MyDonation from "../Dashboard/PetBoard/MyDonation";
import AdmitPet from "../Pet/AdmitPet";
import DonationCampign from "../Pet/DonationCampign";
import Moredetail2 from "../pages/Home/Specific/Moredetail2";

import UpdatePage from "../Dashboard/PetBoard/UpdatePage";
import MyDonationCampaign from "../Dashboard/PetBoard/MyDonationCampaign";
import AdoptionRequest from "../Dashboard/PetBoard/AdoptionRequest";
import Users from "../Dashboard/PetBoard/Admin/Users";
import AllDonations from "../Dashboard/PetBoard/Admin/AllDonations";
import AllPets from "../Dashboard/PetBoard/Admin/AllPets";
import PetFoodPage from "../pages/Shop/Product";
import OrderTable from "../pages/Shop/Order";
import CampaignsPage from "../components/CampaignList";
import Payment from "../components/Payment";
import Success from "../components/Success";
import Cancel from "../components/Cancel";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('https://assignment-12-server-two-smoky.vercel.app/pet-listing'),
      },
      {
        path: "/petlisting",
        element: <PetListing></PetListing>,
        loader:()=>fetch('https://assignment-12-server-two-smoky.vercel.app/pet-listing'),

      }
      ,
   
 
      
      {
        path:"/adopt",
        element:<AdmitPet></AdmitPet>,
        loader:()=>fetch('https://assignment-12-server-two-smoky.vercel.app/adopt'),
      },

      {
        path:"/donation-campign",
        element:<DonationCampign></DonationCampign>,
        loader:()=>fetch('https://assignment-12-server-two-smoky.vercel.app/pet-listing'),
      },

      {
       path:"/donation-list",
       element:<CampaignsPage></CampaignsPage>

      }
,

{
  path:"/donation-list/:id",
  element:<Payment></Payment>

 },

 {
  path:"/success",
  element:<Success></Success>

 },
 {
  path: "/moredetail/:id",
  element:<Moredetails></Moredetails>,
  loader:({params})=> fetch(`https://assignment-12-server-two-smoky.vercel.app/moredetail/${params.id}`)  
},
{
  path: "/moredetail2/:id",
  element:<Moredetail2></Moredetail2>,
  loader:({params})=> fetch(`https://assignment-12-server-two-smoky.vercel.app/moredetail2/${params.id}`)  
},




{
  path:"cancel",
  element:<Cancel></Cancel> 


}
,

      {
        path:"/shop",
        element:<PetFoodPage></PetFoodPage>,
       
      },
     

    
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/admin/dashboard", element: <Dashboard></Dashboard>},
      { path: "/admin/dashboard/mydonation", element: <MyDonation></MyDonation> ,
      loader:()=> fetch('https://assignment-12-server-two-smoky.vercel.app/donation-detail'),
    },
      { path: "/admin/dashboard/manage", element: <ManageBooks /> },
      
      { path: "/admin/dashboard/add-pet", element: <AddPet></AddPet> },

      { path: "/admin/dashboard/my-pet", element: <MyPet></MyPet>,
      loader:()=> fetch('https://assignment-12-server-two-smoky.vercel.app/add-pet'), },
      { path: "/admin/dashboard/adoption", element: <AdoptionRequest></AdoptionRequest> ,
      loader:()=> fetch('https://assignment-12-server-two-smoky.vercel.app/pet-listing'),
    },
      { path: "/admin/dashboard/donation-campaign", element: <MyDonationCampaign></MyDonationCampaign>,
      loader:()=> fetch('https://assignment-12-server-two-smoky.vercel.app/donation-campaign'),
    },
      { path: "/admin/dashboard/create-donation-campaign", element:<CreateDonationsCampign></CreateDonationsCampign> },
     
       

      
    { path: "/admin/dashboard/add-pet/:id", element: <UpdatePage></UpdatePage>,
    loader: ({ params }) => fetch(`https://assignment-12-server-two-smoky.vercel.app/update-pet/${params.id}`)
  },

  { path: "/admin/dashboard/users", element: <Users></Users>,
  loader: () => fetch("https://assignment-12-server-two-smoky.vercel.app/users ")
  
}, 
{ path: "/admin/dashboard/order", element: <OrderTable></OrderTable>,
 
  
}, 


 { path: "/admin/dashboard/alldonations", element: <AllDonations></AllDonations>,
loader: () => fetch("https://assignment-12-server-two-smoky.vercel.app/adopt")
},  { path: "/admin/dashboard/allpets", element: <AllPets></AllPets>,
loader: () => fetch("https://assignment-12-server-two-smoky.vercel.app/pet-listing"),
},
    
    ],
  },
  
  

  {
    path: "login",
    element: <Login />
  },
  {
    path: "/create-user",
    element: <Signup/>
  },
  {
    path:"/logout",
    element: <Logout/>
  }
]);

export default router;