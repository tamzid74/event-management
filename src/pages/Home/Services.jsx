import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <h1 className="md:text-6xl text-2xl font-bold mt-10 text-center">Our Services</h1>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
