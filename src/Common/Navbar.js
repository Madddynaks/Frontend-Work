import React from "react";
import img from "../Images/whole.png";

const Navbar = ({ openModal }) => {
  return (
    <nav className="bg-white shadow-md py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className=" max-lg:hidden" src={img} alt="Logo" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
            className="bg-gray-100 border w-[350px] rounded-full py-2 px-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 max-lg:hidden"
          />
        </div>
        <div className="flex items-center">
          <button onClick={openModal} className="ml-4 font-semibold">
            Create account. <span className="text-blue-700 max-lg:mr-3">It’s free!</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
