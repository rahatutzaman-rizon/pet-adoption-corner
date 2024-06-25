import { Link } from "react-router-dom";


const CardShop = ({brand}) => {
    const{name,author,rating,category,image}=brand;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
   <button className="btn btn-success">{author}</button>
   <button className="btn btn-danger">{category}</button>
   <button className="btn btn-info">{rating}</button>

    <div className="card-actions">
    <Link to="">Update button</Link>
      <button className="btn btn-primary">Update button</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardShop;