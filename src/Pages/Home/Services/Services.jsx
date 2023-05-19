import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Element, scroller } from "react-scroll";

const Services = () => {
  useEffect(() => {
    // Check if the hash is present in the URL
    const hasServicesHash = window.location.pathname === "#services";
    if (hasServicesHash) {
      // Scroll to the target section when the component mounts
      scroller.scrollTo("servicesSection", {
        smooth: true,
        duration: 500,
      });
    }
  }, []);

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-ten-psi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Element name="servicesSection">
      <div className="my-20 p-5">
        <div className="text-center">
          <p className="font-semibold text-xl text-primaryOrange">Service</p>
          <h2 className="text-5xl font-bold my-5">Our Service Area</h2>
          <p className="text-neutral-400 capitalize">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don`t look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
        <div className="text-center">
          <button className="text-lg py-4 px-7 rounded-md border text-primaryOrange font-semibold hover:bg-primaryOrange hover:text-neutral-50 duration-300">
            More Services
          </button>
        </div>
      </div>
    </Element>
  );
};

export default Services;
