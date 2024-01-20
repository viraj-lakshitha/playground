import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: FC = () => {
  const router = useLocation();

  return (
    <div className="bg-blue-950 flex justify-between min-w-screen text-white p-5 h-15">
      <h1 className="uppercase font-bold">React Base</h1>
      <div className="flex gap-2">
        <Link
          className={`${
            router.pathname === "/" ? "underline" : "hover:underline"
          }`}
          to={"/"}
        >
          Home
        </Link>
        <Link
          className={`${
            router.pathname === "/register" ? "underline" : "hover:underline"
          }`}
          to={"/register"}
        >
          Register
        </Link>
        <Link
          className={`${
            router.pathname === "/login" ? "underline" : "hover:underline"
          }`}
          to={"/login"}
        >
          Login
        </Link>
        <Link
          className={`${
            router.pathname === "/contact-us" ? "underline" : "hover:underline"
          }`}
          to={"/contact-us"}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
