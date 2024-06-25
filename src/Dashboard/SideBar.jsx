
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards, HiOutlineCloudUpload } from 'react-icons/hi';
import img from '../../src/assets/awardbooks.png'

import { useContext, useEffect, useState } from 'react';

import Navbar from '../pages/shared/Navbar';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../contexts/AuthProvider';

const SideBar = () => {

  const [role,setRole]=useState("");
 const{user}=useContext(AuthContext)
  const getUsers= async()=>{
const res=await axios.get("https://assignment-12-server-two-smoky.vercel.app/users")
return res;
  }
  

  const {data,isLoading}=useQuery({
    queryKey:["users"],
    queryFn:getUsers
  })

  useEffect(()=>{
 const seeUsers=data?.data?.filter(check=>check.email==user?.email)
 const userType=seeUsers?.map(items=>setRole(items.role))

  },[data,user])

  if(isLoading){
    return <h2>loading.....</h2>
  }

  console.log(user?.email,role)

  return (
    <div className=''>
    <Navbar className=""></Navbar>
      <Sidebar aria-label="Sidebar with content separator example" className='md:hidden md:block mt-20 '>
        <Sidebar.Logo
          href="/"
          img={img}
          className='w-10 h-10 rounded-full'
          imgAlt="Flowbite logo"
        >
          <p>
            {user?.displayName || "Demo User" }
          </p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/admin/dashboard"
              icon={HiChartPie}>
              <p>
                Dashboard
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/mydonation"
              icon={HiOutlineCloudUpload}
            >
              <p>
                My Donation
              </p>
            </Sidebar.Item>

            <Sidebar.Item
              href="/admin/dashboard/donation-campaign"
              icon={HiOutlineCloudUpload}
            >
              <p>
                My Donations Campign
              </p>
            </Sidebar.Item>

            <Sidebar.Item
              href="/admin/dashboard/create-donation-campaign"
              icon={HiInbox}
            >
              <p>
              Create Donate Camp
              </p>
            </Sidebar.Item>


            <Sidebar.Item
              href="/admin/dashboard/my-pet"
              icon={HiInbox}
            >
              <p>
                My Pet
              </p>
            </Sidebar.Item>
            
            <Sidebar.Item
              href="/admin/dashboard/add-pet"
              icon={HiInbox}
            >
              <p>
               Add pet
              </p>
            </Sidebar.Item>


            <Sidebar.Item
              href="/admin/dashboard/adoption"
              icon={HiInbox}
            >
              <p>
               Adoption Request
              </p>
            </Sidebar.Item>
            
            
        {

            role==="admin" && <>
          <Sidebar.Item
              href="/admin/dashboard/users"
              icon={HiUser}
            >
              <p>
             Users
              </p>
            </Sidebar.Item>
          
            <Sidebar.Item
              href="/admin/dashboard/alldonations"
              icon={ HiSupport}
            >
              <p>
             All Donations
              </p>
            </Sidebar.Item>

            <Sidebar.Item
              href="/admin/dashboard/allpets"
              icon={ HiSupport}
            >
              <p>
              All Pets
              </p>
            </Sidebar.Item>
          </>
        }

         
      
           
            <Sidebar.Item
              href="/logout"
              icon={HiTable}
            >
              <p>
                Log out
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
           
           
           
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
     
    </div>
  )
}

export default SideBar