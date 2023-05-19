import banner1 from "../../../assets/images/banner/5.jpg";
import banner2 from "../../../assets/images/banner/4.jpg";
import banner3 from "../../../assets/images/banner/6.jpg";
import banner4 from "../../../assets/images/banner/3.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] my-12 rounded-2xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full object-cover object-center" />
        <div className="absolute w-full h-full text-neutral-50 flex items-center top-0 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-20">
            <h2 className="text-5xl font-bold leading-tight">
              Affordable <br /> Price For <br /> Car Servicing
            </h2>
            <p className="capitalize my-8">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-7">
              <button className="bg-primaryOrange hover:outline outline-primaryOrange outline-2 hover:bg-transparent py-4 px-8 rounded-md font-semibold text-lg">
                Discover More
              </button>
              <button className="outline outline-2 hover:bg-neutral-50 hover:text-primaryOrange hover:outline-0 py-4 px-8 rounded-md font-semibold text-lg">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-20 bottom-10 gap-6">
          <a href="#slide4" className="btn btn-circle hover:bg-primaryOrange">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle hover:bg-primaryOrange">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute w-full h-full text-neutral-50 flex items-center top-0 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-20">
            <h2 className="text-5xl font-bold leading-tight">
              Affordable <br /> Price For <br /> Car Servicing
            </h2>
            <p className="capitalize my-8">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-7">
              <button className="bg-primaryOrange hover:outline outline-primaryOrange outline-2 hover:bg-transparent py-4 px-8 rounded-md font-semibold text-lg">
                Discover More
              </button>
              <button className="outline outline-2 hover:bg-neutral-50 hover:text-primaryOrange hover:outline-0 py-4 px-8 rounded-md font-semibold text-lg">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-20 bottom-10 gap-6">
          <a href="#slide1" className="btn btn-circle hover:bg-primaryOrange">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle hover:bg-primaryOrange">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute w-full h-full text-neutral-50 flex items-center top-0 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-20">
            <h2 className="text-5xl font-bold leading-tight">
              Affordable <br /> Price For <br /> Car Servicing
            </h2>
            <p className="capitalize my-8">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-7">
              <button className="bg-primaryOrange hover:outline outline-primaryOrange outline-2 hover:bg-transparent py-4 px-8 rounded-md font-semibold text-lg">
                Discover More
              </button>
              <button className="outline outline-2 hover:bg-neutral-50 hover:text-primaryOrange hover:outline-0 py-4 px-8 rounded-md font-semibold text-lg">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-20 bottom-10 gap-6">
          <a href="#slide2" className="btn btn-circle hover:bg-primaryOrange">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle hover:bg-primaryOrange">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute w-full h-full text-neutral-50 flex items-center top-0 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-20">
            <h2 className="text-5xl font-bold leading-tight">
              Affordable <br /> Price For <br /> Car Servicing
            </h2>
            <p className="capitalize my-8">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-7">
              <button className="bg-primaryOrange hover:outline outline-primaryOrange outline-2 hover:bg-transparent py-4 px-8 rounded-md font-semibold text-lg">
                Discover More
              </button>
              <button className="outline outline-2 hover:bg-neutral-50 hover:text-primaryOrange hover:outline-0 py-4 px-8 rounded-md font-semibold text-lg">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-20 bottom-10 gap-6">
          <a href="#slide3" className="btn btn-circle hover:bg-primaryOrange">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-primaryOrange">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
