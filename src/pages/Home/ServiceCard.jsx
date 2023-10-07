import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
  const { id, name, image, price, description } = service;
  return (
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt={name} className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 150)}....</p>
          <p className="bg-[#E4c59e] w-full font-semibold p-2 rounded-xl">
            {price}
          </p>
          <div className="card-actions">
            <Link to={`/services/${id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
  );
};

export default ServiceCard;
