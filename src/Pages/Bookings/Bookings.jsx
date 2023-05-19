import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import image from "../../assets/images/services/4.jpg";
import Swal from "sweetalert2";
import BookingItem from "./BookingItem";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const url = `https://car-doctor-server-ten-psi.vercel.app/bookings?email=${user?.email}`;
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          handleLogout();
          navigate("/");
        }
        // console.log(data);
      });
  }, [url, navigate, handleLogout]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-server-ten-psi.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleStatusChange = (id, newStatus) => {
    fetch(`https://car-doctor-server-ten-psi.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // Swal.fire(
          //   "Modification Successful",
          //   `${data?.[0]?.title}`,
          //   "success"
          // );
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = newStatus;
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
        console.log(data);
      });
  };

  return (
    <div className="max-w-7xl container mx-auto">
      <div className="relative w-full rounded-xl">
        <img
          src={image}
          className="w-full object-cover object-center md:h-72 h-52 rounded-xl"
        />
        <div className="absolute w-full h-full top-0 flex items-center bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)] rounded-lg">
          <h2 className="text-4xl font-bold text-white ml-24">Order List</h2>
        </div>
        <div className="absolute w-[296px] bottom-0 md:left-[40%] left-[10%] bg-primaryOrange text-center transform rounded-t-md">
          <p className="text-lg text-white p-2 font-medium">Home/Bookings</p>
        </div>
      </div>
      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full">
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingItem
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleStatusChange={handleStatusChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
