import {  Link, useParams } from "react-router-dom";


const SpecificCard = ({item}) => {
  const {id}=useParams();
  console.log(item)
    const {_id,image,name,author,category,rating}=item;
   
    return (
   

       




            <div className="card w-72 bg-base-100 shadow-xl content-center  ml-24 my-8">
  <img  className="w-36 ml-12"  src={image} alt="" />
 
  <div className="card-body ">
   
  <h2 className="text-2xl bg-teal-300 text-center"> Name : {name}</h2>
    
    <h2 className="text-xl bg-blue-400 text-gray-600"> Author Name : {author}</h2>
      <div className="btn btn-info">{category}</div>
   
    
    <div className="card-actions justify-center">
       
      <div className="btn btn-warning ">rating : {rating}</div>
    

    <div className="">
    <button className="btn btn-outline btn-success "> 
    <Link to={`/moredetail/${_id}`}> Details 
    </Link></button>
      
    </div>
    </div>
  </div>
</div>
        
    );
};

export default SpecificCard;