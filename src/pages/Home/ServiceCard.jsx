import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceCard = ({ service }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { id, name, image, price, description } = service;
  return (
    <div
      data-aos="fade-up"
      className="card bg-base-100 shadow-xl"
    >
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 150)}...</p>
        <p className="bg-[#E4c59e] w-full font-semibold p-2 rounded-xl">
          {price}
        </p>
        <div className="card-actions">
          <Link to={`/services/${id}`}>
            <button className="btn btn-primary btn-sm" data-aos="zoom-in-up">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.node,
};
