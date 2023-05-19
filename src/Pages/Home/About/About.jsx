import about from "../../../assets/images/about_us/about.png";

const About = () => {
  return (
    <div className="hero rounded-2xl my-20">
      <div className="hero-content flex-col space-y-5 lg:space-y-0 lg:flex-row items-center p-10">
        <div className="lg:w-1/2 p-0 md:p-5">
          <img src={about} alt="About us image" />
        </div>
        <div className="lg:w-1/2  text-center md:text-left">
          <p className="text-xl font-bold text-primaryOrange">About Us</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            We are qualified <br /> & of experience <br /> in this field
          </h2>
          <div className="text-neutral-400 text-sm md:text-lg space-y-5 my-5">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which don`t look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomized words which don`t look even slightly
              believable.
            </p>
          </div>
          <button className="bg-primaryOrange hover:outline outline-primaryOrange outline-2 hover:bg-transparent py-4 px-8 rounded-md duration-300 text-lg text-base-100 hover:text-neutral-800 font-bold mt-8">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
