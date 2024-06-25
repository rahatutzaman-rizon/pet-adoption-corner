import { useLoaderData } from "react-router-dom";
import CardShop from "./CardShop";

const Shop = () => {
  const all=useLoaderData();
  console.log(all)
  return (
    <div>
       <h3 className="text-center my-8 mb-4 text-3xl bg-teal-600 text-blue-200 mt-24">All Books</h3>
            <div   className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-16 gap-4 my-4 py-10 ml-20 mr-4 space-y-4'>
            {
            all.map((brand,index)=>
            <CardShop
            key={index}
            brand={brand}></CardShop> )
        }

   
</div>
    </div>
  );
};

export default Shop;