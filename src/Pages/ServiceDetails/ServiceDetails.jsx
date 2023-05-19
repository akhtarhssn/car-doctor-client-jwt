import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { title } = service;
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default ServiceDetails;
