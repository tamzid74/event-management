import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <h1 className="text-6xl font-bold text-center mt-10">Our Services</h1>
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
