import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Details = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const service = services.find((service) => service.id == id);
  console.log(service);
  const { name, image, description, price } = service;
  return (
    <div
      className="max-w-6xl mx-auto border p-5 min-h-screen"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <img className="w-full" src={image} alt="" />
      <div className="flex items-center">
      <h1 className="text-4xl font-bold mt-2">{name}</h1>
        <span className="mt-6 text-green-600 text-base font-bold">({price})</span>
      </div>
      <p className="text-[#706F6F] font-semibold mt-2">{description}</p>
      <Link to="/">
        <button
          className="btn btn-sm btn-secondary mt-4"
          data-aos="zoom-out-down"
        >
          <FaArrowLeft></FaArrowLeft>Back to our services
        </button>
      </Link>
    </div>
  );
};

export default Details;
