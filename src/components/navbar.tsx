import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavTabs } from "../models/constants";
import Logo from "../assets/logo.jpg";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
    <nav className="bg-amber-400 text-white p-4 shadow fixed w-full z-50" >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-3">
          <img
            src={Logo}
            alt="b1"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-2xl sm:text-3xl font-bold">Armstrong Gym</span>
        </div>

        {/* Mobile view Only */}
        <button
          onClick={toggleMenu}
          className="text-3xl md:hidden focus:outline-none">
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-6 items-center">
          {NavTabs?.map((navObj) => (
            <NavLink
              key={navObj?.name}
              className={({ isActive }) =>
                isActive ? "border-b-2 border-red-600" : ""
              }
              to={navObj?.to}>
              <li>{navObj?.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          {NavTabs?.map((navObj) => (
            <NavLink
              key={navObj?.name}
              className={({ isActive }) =>
                isActive ? "border-b-2 border-red-600" : ""
              }
              to={navObj?.to}
              onClick={() => setMenuOpen(false)} // Close menu on click
              >
              <li>{navObj?.name}</li>
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
    </>
  );
};

export default Navbar;
