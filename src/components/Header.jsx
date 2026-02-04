import React, { useState } from "react";
import { CgMenuLeftAlt, CgProfile } from "react-icons/cg";
import { GoMoon } from "react-icons/go";
import { IoIosArrowUp, IoIosSearch } from "react-icons/io";
import {
  IoEllipsisHorizontal,
  IoInformationCircleOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import LOGO from "../images/logo.png";
import "./Style.css";

const Header = ({ open, setOpen }) => {
  const [profile, setProfile] = useState(false);
  const [profilebar, setProfilebar] = useState(false);

  return (
    <>
      {/* MAIN HEADER */}
      <header className="top-0 left-0 w-full py-1 bg-white shadow z-500">
        <nav className="flex items-center justify-between gap-4 px-4 py-3">
          {/* LEFT */}
          <div className="flex items-center gap-5">
            {/* Mobile menu */}
            <div className="md:hidden">
              {open ? (
                <div className="border w-10 h-10  flex justify-center items-center rounded-lg border-gray-200">
                  <CgMenuLeftAlt
                    onClick={() => setOpen(false)}
                    className="text-2xl cursor-pointer text-gray-500"
                  />
                </div>
              ) : (
                <div className="border w-10 h-10  flex justify-center items-center rounded-lg border-gray-200 bg-gray-100">
                  <MdOutlineClose
                    onClick={() => setOpen(true)}
                    className="text-2xl cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <CgMenuLeftAlt
                onClick={() => setOpen(!open)}
                className="text-2xl cursor-pointer"
              />
            </div>

            {/* Search */}
            <div className="relative hidden md:block w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 pl-10 pr-4 outline-none border border-gray-300
                focus:ring-2 focus:ring-blue-500 rounded-2xl bg-white"
              />
              <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
            </div>
          </div>
          {/* center Text */}
          <div>
            <div className="flex justify-center items-center gap-1 md:hidden">
              <img className="h-10 w-10" src={LOGO} />
              <span className="font-normal">Dashboard</span>
            </div>
          </div>
          {/* center Text */}
          {/* RIGHT DESKTOP */}
          <div className="hidden md:flex items-center gap-5">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center">
              <GoMoon className="text-2xl cursor-pointer" />
            </div>
            <div className="w-12 h-12 rounded-full border flex items-center justify-center">
              <IoNotificationsOutline className="text-2xl cursor-pointer" />
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <CgProfile className="text-2xl" />
              <span onClick={() => setProfile((prev) => !prev)}>Partha</span>
              <IoIosArrowUp
                className={`transition duration-300 ${
                  profile ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>

          {/* MOBILE MORE */}
          <div className="block md:hidden">
            <IoEllipsisHorizontal
              onClick={() => {
                setProfilebar((prev) => !prev);
                setProfile(false);
              }}
              className="text-2xl cursor-pointer"
            />
          </div>
        </nav>
      </header>

      {/* MOBILE TOP BAR */}
      <div
        className={`${
          profilebar ? "block" : "hidden"
        } bg-white shadow px-5 py-3 md:hidden`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <GoMoon className="text-[20px] cursor-pointer" />
            </div>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <IoNotificationsOutline className="text-[20px] cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CgProfile className="text-2xl" />
            <span
              onClick={() => {
                setProfile((prev) => !prev);
                setProfilebar(true);
              }}
              className="cursor-pointer"
            >
              Partha
            </span>
            <IoIosArrowUp
              className={`transition duration-300 ${
                profile ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* DESKTOP DROPDOWN */}
      <div
        className={`hidden ${
          profile ? "md:block" : "md:hidden"
        } absolute md:right-20 md:top-20 bg-white shadow-lg py-5 px-4 rounded-2xl w-64`}
      >
        <ProfileContent />
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`${
          profile && profilebar ? "block" : "hidden"
        } md:hidden absolute top-[140px] z-40 right-2 bg-white shadow-lg py-5 px-4 rounded-2xl w-64`}
      >
        <ProfileContent />
      </div>
    </>
  );
};

const ProfileContent = () => (
  <>
    <div className="mb-4">
      <p className="text-[16px] font-medium text-[#344054]">Partha Debnath</p>
      <span className="text-[14px] text-[#667085]">
        parthadebnath161@gmail.com
      </span>
    </div>

    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-2 cursor-pointer">
        <CgProfile className="text-[20px]" />
        <span>Edit Profile</span>
      </li>
      <li className="flex items-center gap-2 cursor-pointer">
        <IoSettingsOutline className="text-[20px]" />
        <span>Account Settings</span>
      </li>
      <li className="flex items-center gap-2 cursor-pointer">
        <IoInformationCircleOutline className="text-[20px]" />
        <span>Help & Info</span>
      </li>
    </ul>
  </>
);

export default Header;
