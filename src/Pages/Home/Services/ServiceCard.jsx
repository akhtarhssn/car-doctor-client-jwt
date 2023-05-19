import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // console.log(service);
  const { _id, img, title, price } = service;
  return (
    <div className="card border border-neutral-200 hover:shadow-2xl  duration-300 flex flex-col justify-between">
      <figure className="p-5">
        <img src={img} alt="Shoes" className="rounded-xl object-cover h-full" />
      </figure>
      <div className="px-5">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <div className="mb-5 flex justify-between items-center">
          <p className="text-primaryOrange text-lg font-semibold">
            Price: ${price}
          </p>
          <Link to={`/booking/${_id}`}>
            <button className="text-primaryOrange hover:border border-primaryOrange rounded-full p-3">
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
