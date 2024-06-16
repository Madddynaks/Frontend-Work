import React, { useContext, useState } from "react";
import { JoinedContext } from "../Contexts/JoinedContext";

const NavigationBar = () => {
  const {joined , setJoined} = useContext(JoinedContext);
  const [tab , setTab] = useState("Posts");
  return (
    <div className="flex justify-between mt-10">
      <div className="flex gap-5">
        <button onClick={() => setTab("Posts")} className={` ${tab === "Posts" ? "text-blue-700 font-semibold" : "text-gray-500"} text-xl`}>All Posts(32)</button>
        <button onClick={() => setTab("Articles")} className={` ${tab === "Articles" ? "text-blue-700 font-semibold" : "text-gray-500"} text-xl max-lg:hidden`}>Article</button>
        <button onClick={() => setTab("Event")} className={` ${tab === "Event" ? "text-blue-700 font-semibold" : "text-gray-500"} text-xl max-lg:hidden`}>Event</button>
        <button onClick={() => setTab("Education")}className={` ${tab === "Education" ? "text-blue-700 font-semibold" : "text-gray-500"} text-xl max-lg:hidden`}>
          Education
        </button>
        <button onClick={() => setTab("Job")} className={` ${tab === "Job" ? "text-blue-700 font-semibold" : "text-gray-500"} text-xl max-lg:hidden`}>Job</button>
      </div>
      <div className="flex max-lg:hidden gap-10">
        <div>
          <button className="bg-gray-200 text-lg text-black font-semibold py-2 px-5 rounded-lg flex gap-2">
            <svg
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="my-auto"
            >
              <path
                fill="#000000"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
            <span>Write a Post</span>
          </button>
        </div>
        <div>
          <button
            onClick={() => setJoined(!joined)}
            className={`${
              joined === true
                ? "bg-blue-500"
                : "bg-white border border-gray-400 text-black"
            } flex gap-2 py-2 px-5 rounded-lg text-white font-semibold`}
          >
            {!joined && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                viewBox="0 0 512 512"
              >
                <path
                  fill="#000000"
                  d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
              </svg>
            )}
            {joined && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                viewBox="0 0 640 512"
              >
                <path
                  fill="#ffffff"
                  d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                />
              </svg>
            )}
            {joined && <div>Join group</div>}
            {!joined && <div>Leave Group</div>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
