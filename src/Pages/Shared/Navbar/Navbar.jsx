import logo from "../../../assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <div className="bg-base-100 md:py-6 py-2 max-w-7xl mx-auto">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="h-full" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#services" }}>Services</Link>
            </li>

            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end items-center space-x-5">
          <Link className="text-2xl hover:text-primaryOrange">
            <HiOutlineShoppingBag />
          </Link>
          <Link className="text-2xl hover:text-primaryOrange">
            <FiSearch />
          </Link>
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content p-5 shadow bg-base-100 rounded-md w-52 border"
              >
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <Link to="/bookings">My Bookings</Link>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="font-semibold hover:text-primaryOrange"
              >
                Login
              </Link>
              <button className="text-lg py-4 px-7 rounded-md border text-primaryOrange font-semibold hover:bg-primaryOrange hover:text-neutral-50 duration-300">
                Appointment
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
