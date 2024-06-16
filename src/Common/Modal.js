import React from "react";
import img from "../Images/createaccount.png";

const Modal = ({ onClose, openSignInModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-[780px]">
        <div className="flex justify-between items-center pb-3 mb-5">
          <h3 className="text-xl font-semibold">Create Account</h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              height={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#121212"
                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
              />
            </svg>
          </button>
        </div>
        <span className="bg-green-100 text-green-700 font-semibold py-2 px-2 rounded-xl max-lg:hidden">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now!
        </span>
        <div className="flex max-lg:flex-col gap-14 max-lg:gap-5">
          <div className="mt-4 w-1/2 max-lg:w-full">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md w-full py-2 px-3 mb-3"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md w-full py-2 px-3 mb-3"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md w-full py-2 px-3 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-md w-full py-2 px-3 mb-3"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border rounded-md w-full py-2 px-3 mb-3"
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600">
              Create Account
            </button>
            <div className="mt-4 flex flex-col gap-3">
              <button className="flex gap-2 items-center border border-gray-300 rounded-md py-2 px-4 w-full mr-2 justify-center">
                <svg
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#0984e1"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                  />
                </svg>
                Sign up with Facebook
              </button>
              <button className="flex items-center border border-gray-300 rounded-md py-2 px-4 w-full justify-center gap-2">
                <svg height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="#000000" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                Sign up with Google
              </button>
            </div>
          </div>
          <div className="mt-3 w-1/2 max-lg:w-full">
            <div className="text-center">Already have an account? <button onClick={openSignInModal} className="text-blue-600 font-semibold">Sign in</button></div>
            <img src={img} className=" max-lg:hidden" alt="" />
            <div className="text-sm text-gray-500 mt-5">By signing up, you agree to our Terms & conditions,<button className="font-bold">Privacy Policy</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
