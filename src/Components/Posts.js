import React, { useContext } from "react";
import img from "../Images/picture.png";
import Narrow from "../Common/Narrow";
import DropdownMenu from "../Common/DropdownMenu";
import LocationInput from "../Common/LocationInput";
import profile from "../Images/profile.jpg";
import img1 from "../Images/new.avif";
import img2 from "../Images/img3.jpg";
import { JoinedContext } from "../Contexts/JoinedContext";

export default function Posts() {
  const { joined } = useContext(JoinedContext);
  return (
    <Narrow>
      <div className="flex mt-10 gap-20">
        <div>
          <div className="w-[50vw] max-lg:w-full border border-gray-300 rounded-xl">
            <img src={img} className="rounded-t-xl" alt="" />
            <div className="px-5 mt-5">
              <span className="text-lg text-gray-600 font-semibold">
                Article
              </span>
              <div className="flex max-lg:flex-col justify-between gap-60 max-lg:gap-2 mt-3 mb-3">
                <h1 className="text-2xl font-bold max-lg:text-lg">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h1>
                <DropdownMenu />
              </div>
              <span className="text-xl text-gray-600 max-lg:text-base">
                I've worked in UX for the better part of a decade. From now on,
                I plan to...
              </span>
              <div className="flex justify-between mt-10 mb-5">
                <div className="flex gap-5">
                  <svg
                    height={30}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                  <span className="text-xl font-bold max-lg:text-lg">
                    Sarthak Kamra
                  </span>
                </div>
                <div className="flex gap-8">
                  <div className="flex gap-2">
                    <svg
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="my-auto"
                    >
                      <path
                        fill="#c2c2c2"
                        d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                      />
                    </svg>
                    <span className="text-gray-700 my-auto">1.4k views</span>
                  </div>
                  <div className="bg-gray-200 p-3 rounded-full">
                    <svg
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="my-auto"
                    >
                      <path
                        fill="#474747"
                        d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 w-[50vw] max-lg:w-full border border-gray-300 rounded-xl">
            <img src={img1} className="rounded-t-xl w-full" alt="" />
            <div className="px-5 mt-5">
              <span className="text-lg text-gray-600 font-semibold">
                Education
              </span>
              <div className="flex max-lg:flex-col justify-between gap-60 max-lg:gap-2 mt-3 mb-3">
                <h1 className="text-2xl font-bold max-lg:text-lg">
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </h1>
                <DropdownMenu />
              </div>
              <span className="text-xl text-gray-600 max-lg:text-base">
                I've worked in UX for the better part of a decade. From now on,
                I plan to...
              </span>
              <div className="flex justify-between mt-10 mb-5">
                <div className="flex gap-5">
                  <svg
                    height={30}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                  <span className="text-xl font-bold max-lg:text-lg">
                    Sarah West
                  </span>
                </div>
                <div className="flex gap-8">
                  <div className="flex gap-2">
                    <svg
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="my-auto"
                    >
                      <path
                        fill="#c2c2c2"
                        d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                      />
                    </svg>
                    <span className="text-gray-700 my-auto">1.4k views</span>
                  </div>
                  <div className="bg-gray-200 p-3 rounded-full">
                    <svg
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="my-auto"
                    >
                      <path
                        fill="#474747"
                        d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 w-[50vw] max-lg:w-full border border-gray-300 rounded-xl">
            <img src={img2} className="rounded-t-xl w-full" alt="" />
            <div className="px-5 mt-5">
              <span className="text-lg text-gray-600 font-semibold">
                Meetup
              </span>
              <div className="flex max-lg:flex-col justify-between gap-60 max-lg:gap-2 mt-3 mb-3">
                <h1 className="text-2xl font-bold max-lg:text-lg">
                  Finance & Investment Elite Social Miser @Lujiazui
                </h1>
                <DropdownMenu />
              </div>
              <div className="flex mb-5 gap-10">
                <div className="flex gap-2">
                  <svg
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#669eff"
                      d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"
                    />
                  </svg>
                  <span className="text-gray-500 font-semibold">
                    Fri, 12 Oct, 2018
                  </span>
                </div>
                <div className="flex gap-2">
                  <svg
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="#74C0FC"
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                    />
                  </svg>
                  <span className="text-gray-500 font-semibold">
                    Ahemedabad, India
                  </span>
                </div>
              </div>
              {/* <span className="text-xl text-gray-600 max-lg:text-base">
                I've worked in UX for the better part of a decade. From now on,
                I plan to...
              </span> */}
              <button className="w-full text-red-600 border border-gray-400 py-2 rounded-lg font-semibold">
                Visit Website
              </button>
              <div className="flex justify-between mt-10 mb-5">
                <div className="flex gap-5">
                  <svg
                    height={30}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                  <span className="text-xl font-bold max-lg:text-lg">
                    Ronal Jones
                  </span>
                </div>
                <div className="flex gap-8">
                  <div className="flex gap-2">
                    <svg
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="my-auto"
                    >
                      <path
                        fill="#c2c2c2"
                        d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                      />
                    </svg>
                    <span className="text-gray-700 my-auto">1.4k views</span>
                  </div>
                  <div className="bg-gray-200 p-3 rounded-full">
                    <svg
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="my-auto"
                    >
                      <path
                        fill="#474747"
                        d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 w-[50vw] max-lg:w-full border border-gray-300 rounded-xl">
            <div className="px-5 mt-5">
              <span className="text-lg text-gray-600 font-semibold">Job</span>
              <div className="flex max-lg:flex-col justify-between gap-60 max-lg:gap-2 mt-3 mb-3">
                <h1 className="text-2xl font-bold max-lg:text-lg">
                  Software Developer
                </h1>
                <DropdownMenu />
              </div>
              <div className="flex mb-5 gap-10">
                <div className="flex gap-2">
                  <svg
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#74C0FC"
                      d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z"
                    />
                  </svg>
                  <span className="text-gray-500 font-semibold">
                    Innovaccer Analytics Private Ltd.
                  </span>
                </div>
                <div className="flex gap-2">
                  <svg
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="#74C0FC"
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                    />
                  </svg>
                  <span className="text-gray-500 font-semibold">
                    Noida, India
                  </span>
                </div>
              </div>
              {/* <span className="text-xl text-gray-600 max-lg:text-base">
                I've worked in UX for the better part of a decade. From now on,
                I plan to...
              </span> */}
              <button className="w-full text-green-600 border border-gray-400 py-2 rounded-lg font-semibold">
                Apply on TimesJobs
              </button>
              <div className="flex justify-between mt-10 mb-5">
                <div className="flex gap-5">
                  <svg
                    height={30}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                  <span className="text-xl font-bold max-lg:text-lg">
                    Joseph Gray
                  </span>
                </div>
                <div className="flex gap-8">
                  <div className="flex gap-2">
                    <svg
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="my-auto"
                    >
                      <path
                        fill="#c2c2c2"
                        d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                      />
                    </svg>
                    <span className="text-gray-700 my-auto">1.4k views</span>
                  </div>
                  <div className="bg-gray-200 p-3 rounded-full">
                    <svg
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="my-auto"
                    >
                      <path
                        fill="#474747"
                        d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-lg:hidden">
          <LocationInput />
          {!joined && (
            <div className="mt-14">
              <div className="flex items-center justify-center gap-3">
                <svg
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#878787"
                    d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                  />
                </svg>
                <span className="text-xl">RECOMMENDED GROUPS</span>
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="flex">
                    <img src={profile} className="h-[100px]" alt="" />
                    <span className="my-auto font-semibold text-xl">
                      Leisure
                    </span>
                  </div>
                  <div className="my-auto bg-gray-300 py-2 px-5 rounded-xl font-semibold">
                    Follow
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <img src={profile} className="h-[100px]" alt="" />
                    <span className="my-auto font-semibold text-xl">
                      Leisure
                    </span>
                  </div>
                  <div className="my-auto bg-gray-300 py-2 px-5 rounded-xl font-semibold">
                    Follow
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <img src={profile} className="h-[100px]" alt="" />
                    <span className="my-auto font-semibold text-xl">
                      Leisure
                    </span>
                  </div>
                  <div className="my-auto bg-gray-300 py-2 px-5 rounded-xl font-semibold">
                    Follow
                  </div>
                </div>
                <div className="text-right">
                  <button className="text-blue-600 font-semibold mt-4">
                    See more...
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Narrow>
  );
}
