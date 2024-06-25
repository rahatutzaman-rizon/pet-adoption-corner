import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import BorrowCard from "./BorrowCard";
//import BorrowCard from "./BorrowCard";

const BorrowBook = () => {
    const borrow=useLoaderData();
    console.log(borrow)
    return (
        <div>
            <Navbar></Navbar>

            <h2 className="text-3xl mt-6 text-center text-teal-300 font-bold">Borrow book list </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-16 gap-4 my-4 py-10 '>
            {
                borrow.map((pass,index)=>
            <BorrowCard
            key={index}
           pass={pass}> </BorrowCard>)
            
            }
       </div>
        </div>
    );
};

export default BorrowBook;