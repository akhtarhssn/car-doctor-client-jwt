import calendar from "../../../assets/icons/calender.svg";
import phone from "../../../assets/icons/phone.svg";
import location from "../../../assets/icons/location.svg";

const CallToAction = () => {
  return (
    <div className="bg-[#151515] px-16 py-24 rounded-xl  grid grid-cols-1 md:grid-cols-3">
      <div className="text-white flex gap-5 items-center">
        <img src={calendar} alt="Opening hours Calendar icon" />
        <div>
          <p className="">We are open monday-friday</p>
          <h4 className="text-2xl font-bold">7:00 am - 9:00 pm</h4>
        </div>
      </div>
      <div className="text-white flex gap-5 items-center">
        <img src={phone} alt="Our phone Number icon" />
        <div>
          <p className="">Have a question?</p>
          <a href="tel:+2546 251 2658" className="text-2xl font-bold">
            +2546 251 2658
          </a>
        </div>
      </div>
      <div className="text-white flex gap-5 items-center">
        <img src={location} alt="Our location icon" />
        <div>
          <p className="">Need a repair? our address</p>
          <h4 className="text-2xl font-bold">Liza Street, New York</h4>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
