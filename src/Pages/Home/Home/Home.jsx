import { useLocation } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import CallToAction from "../CallToAction/CallToAction";
import Products from "../Products/Products";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#services") {
      // Scroll to the services section when the component mounts
      scroller.scrollTo("servicesSection", {
        smooth: true,
        duration: 500,
      });
    }
  }, [location]);
  return (
    <div className="max-w-7xl container mx-auto">
      <Banner />
      <About />
      <Services />
      <CallToAction />
      <Products />
    </div>
  );
};

export default Home;
