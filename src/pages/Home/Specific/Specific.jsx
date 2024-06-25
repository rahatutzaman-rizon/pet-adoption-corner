import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";
import SpecificCard from "./SpecificCard";
import Navbar from "../../shared/Navbar";





const Specific = () => {
    const specificbrand=useLoaderData();
    const {id}=useParams();
    const [brands,setBrands]=useState();
    console.log(specificbrand)

     
     
   
  
    useEffect(()=>{
        const findBrand = specificbrand?.filter(data => data.category ==id )
         setBrands(findBrand);
     },[id,specificbrand]);
     console.log(brands);

    //  const {rating,category,description,photo,price}=brands;

    // useEffect(()=>{
    // fetch('https://technovative-store-server-6avhjdwj7-redwan-525s-projects.vercel.app/product')
    // .then(res=>res.json())
    // .then(data=>setProducts(data))
    // },[])

    // console.log(products);


    // const filterProduct = products.filter(product => product.brand===specificbrand.bname);
    // setProducts(filterProduct);
    // console.log(filterProduct)
    return (

        
     <div>
    <Navbar className="my-4"></Navbar>
    
  
    <h2 className="my-4 mb-4 text-3xl text-center">Poduct show:</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    {
    brands?.map((item,idx)=><SpecificCard key={idx} item={item}></SpecificCard>)
 }
    </div>
 


     </div> 

    );
};

export default Specific;