import { NavTabs } from "../models/constants";
import { NavLink } from "react-router-dom";
import footer from "../assets/footer.jpg";
import Logo from "../assets/logo.jpg";
import Email from "../assets/email.gif";
import Location from "../assets/Location.gif";
import Phone from "../assets/phone-call.gif";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative text-white mt-10 ">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-bottom opacity-50 z-0"
        style={{ backgroundImage: `url(${footer})` }}
      ></div>

      {/* Overlay (optional for darkening) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Footer content */}
      <div className="relative z-10 container mx-auto px-4 py-10">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div>
            <h1 className="text-2xl font-bold text-yellow-400 flex items-center gap-3 mb-3">
              <img src={Logo} alt="Logo" className="max-w-[50px]" />
              Armstrong Gym
            </h1>
            <p className="text-xl px-5 mx-5">The only bad workout is the one that didn't happen. Train Hard, Live Strong</p>
          </div>

          {/* Footer Links */}
          <div className="justify-between md:grid grid-cols-2 gap-8">
            <div>
              <h2 className="md:flex text-xl font-semibold text-yellow-400 mb-3">
                Important Links
              </h2>
              <ul className="flex flex-col">
                {NavTabs?.map((navObj) => (
                  <NavLink
                    key={navObj?.name}
                    className={({ isActive }) =>
                      isActive ? "border-b-2 w-3 border-yellow-400" : ""
                    }
                    to={navObj?.to}
                  >
                    <li>{navObj?.name}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <a href="https://instagram.com">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://facebook.com">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 w-6">
                <img src={Location} className="rounded-sm" />
                <p>Mumbai, Maharashtra</p>
              </div>
              <div className="flex items-center gap-3 w-6">
                <img src={Phone} className="rounded-sm" />
                <p>+91 - 891234567</p>
              </div>
              <div className="flex items-center gap-3 w-6">
                <img src={Email} className="rounded-sm" />
                <p> Customer.care@Armstrong.in</p>
              </div>
              <br />
              <div>
                <h4 className="text-lg font-semibold text-yellow-400">
                  News Letter
                </h4>
                <p>
                  sign up for our mailing list to get latest updates and offers
                </p>
                <br />
                <input
                  type="email"
                  className="py-1 px-2 rounded-md"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="bg-violet-800 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded-lg transition duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
