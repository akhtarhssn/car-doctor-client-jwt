import { useLoaderData } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Booking = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookingService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;

    const order = {
      service_id: _id,
      service_title: title,
      service_image: img,
      customerName: name,
      price,
      email,
      phone,
      bookingDate: date,
      message,
      status: "Pending",
    };

    fetch("https://car-doctor-server-ten-psi.vercel.app/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Booking Successful", `${title}`, "success");
        }
      });

    console.log(order);
  };

  return (
    <div className="max-w-7xl container mx-auto ">
      <div className="relative w-full rounded-xl">
        <img
          src={img}
          className="w-full object-cover object-center md:h-72 h-52 rounded-xl"
        />
        <div className="absolute w-full h-full top-0 flex items-center bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)] rounded-lg">
          <h2 className="text-4xl font-bold text-white ml-24">
            Booking: {title}
          </h2>
        </div>
        <div className="absolute w-[296px] bottom-0 md:left-[40%] left-[10%] bg-primaryOrange text-center transform rounded-t-md">
          <p className="text-lg text-white p-2 font-medium">Home/Booking</p>
        </div>
      </div>
      <div className="bg-[#F3F3F3] my-32 rounded-xl">
        <form className="card-body p-24" onSubmit={handleBookingService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="form-control w-full">
                <input
                  name="name"
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Full Name"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control w-full">
                <input
                  name="date"
                  type="datetime-local"
                  placeholder="Date"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control w-full">
                <input
                  name="phone"
                  type="phone"
                  placeholder="Your Phone"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control w-full">
                <input
                  name="email"
                  type="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="w-full mb-5">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="textarea textarea-bordered textarea-lg w-full"
                  rows={3}
                />
              </div>
              <div className="form-control mt-6">
                <button className="py-4 bg-primaryOrange rounded-lg text-neutral-50 font-semibold text-xl">
                  Confirm Order
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full px-7">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Order Summary:
                </h2>
                <div className="border p-8 rounded-md border-black divide-y divide-stone-400 space-y-7">
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      <img src={img} alt={title} className="rounded h-24" />
                      <div className="flex flex-col justify-between">
                        <div>
                          <p className="text-lg font-semibold">{title}</p>
                          <p>Qty: 1</p>
                        </div>
                        <div>
                          <p>${price}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <IoIosClose className="text-3xl" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between my-5">
                      <p>Subtotal</p>
                      <p className="text-right">${price}</p>
                    </div>
                    <div className="flex justify-between my-5">
                      <p>Shipping</p>
                      <p className="text-right">$0</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between my-5">
                      <p className="text-lg font-semibold">Order Total</p>
                      <p className="text-right text-lg font-semibold">
                        ${price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
