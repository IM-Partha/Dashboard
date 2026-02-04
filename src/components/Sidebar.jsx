import { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { PiRobotThin } from "react-icons/pi";
import LOGO from "../images/logo.png";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoEllipsisHorizontal } from "react-icons/io5";

const Sidebar = ({ open }) => {
  const [showSub, setShowSub] = useState(false);
  const [ai, setAi] = useState(false);
  const [ecommerce, setEcommerce] = useState(false);

  return (
    <aside
      className={`fixed top-15  md:top-0 left-0 bg-white border-r border-gray-200
    ${open ? "w-0 md:w-20" : "w-64 "}
     h-screen  overflow-y-auto
    overscroll-contain
    transition-all duration-300
    z-40
  `}
    >
      <div
        className={`flex items-center mt-0 md:mt-5 px-4 ${open ? "justify-center" : "gap-3"}`}
      >
        <img className="hidden md:block h-10 w-10" src={LOGO} alt="logo" />
        {!open && (
          <span className=" hidden md:block text-2xl font-medium whitespace-nowrap">Admin</span>
        )}
      </div>
      {/* Menu 0 */}
      <div className="mt-5 px-3">
        <div
          className={`flex items-center rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300
          ${open ? "justify-center p-3" : "gap-3 px-4 py-3"}`}
        >
          {open ? <IoEllipsisHorizontal /> : "Menu"}
        </div>
      </div>
      {/* Mens 1*/}
      <div className="mt-2 px-3">
        <div
          className={`flex items-center rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300
          ${open ? "justify-center p-3" : "gap-3 px-4 py-3"}`}
        >
          <HiOutlineSquares2X2 className="text-2xl text-gray-500" />
          {!open && (
            <span
              onClick={() => setShowSub(!showSub)}
              className="w-full flex items-center justify-between text-base font-medium text-gray-700"
            >
              Dashboard
              <IoIosArrowUp
                className={`text-2xl text-gray-500 transition-all duration-300 ${showSub ? "rotate-180" : "rotate-0"}`}
              />
            </span>
          )}
        </div>
        {/* Sub Menu */}
        {!open && (
          <div
            className={`ml-9 overflow-hidden transition-all duration-300
          ${showSub ? "max-h-96 mt-2" : "max-h-0"}`}
          >
            <div className="flex flex-col gap-1 text-sm text-gray-600">
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Ecommerce
              </span>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Analytics
              </span>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Marketing
              </span>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                CRM
              </span>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Stocks
              </span>
              <div className="flex justify-between items-center hover:bg-gray-100">
                <span className="cursor-pointer rounded-md px-3 py-2 ">
                  SaaS
                </span>
                <span className="bg-[#d1fadf] mr-5 col-[#12b76a] px-2 py-1 font-medium text-[12px] rounded-2xl">
                  NEW
                </span>
              </div>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Logistics
              </span>
            </div>
          </div>
        )}
      </div>
      {/* Mens 2*/}
      <div className="mt-2 px-3">
        <div
          className={`flex items-center hover:bg-gray-100 transition-all duration-300
          rounded-lg cursor-pointer ${open ? "justify-center p-3" : "gap-3 px-4 py-3"}`}
        >
          <PiRobotThin className="text-2xl text-gray-500" />
          {!open && (
            <span
              onClick={() => setAi(!ai)}
              className="w-full flex items-center justify-between text-base font-medium text-gray-700"
            >
              Ai Assistant
              <IoIosArrowUp
                className={`text-2xl text-gray-500 transition-all duration-300 ${ai ? "rotate-180" : "rotate-0"}`}
              />
            </span>
          )}
        </div>
        {!open && (
          <div
            className={`ml-9 overflow-hidden transition-all duration-300 
              ${ai ? "max-h-40" : "max-h-0"}`}
          >
            <div className="flex flex-col gap-1 text-sm text-gray-600">
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Text Generator
              </span>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Image Generator
              </span>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Code Generator
              </span>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Video Generator
              </span>
            </div>
          </div>
        )}
      </div>
      {/* Mens 3*/}
      <div className="mt-2 px-3">
        <div
          onClick={() => setEcommerce(!ecommerce)}
          className={`flex items-center hover:bg-gray-100 transition-all duration-300
          rounded-lg cursor-pointer ${open ? "justify-center p-3" : "gap-3 px-4 py-3"}`}
        >
          <AiOutlineShoppingCart className="text-2xl text-gray-500" />
          {!open && (
            <div className="w-full flex justify-center items-center">
              <span className="w-full flex items-center justify-between text-base font-medium text-gray-700">
                Ecommerce
                <span className="bg-[#d1fadf] col-[#12b76a] px-2 py-[1px] font-medium text-[12px] rounded-2xl">
                  NEW
                </span>
                <IoIosArrowUp
                  className={`text-2xl text-gray-500 transition-all duration-300 ${
                    ecommerce ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </div>
          )}
        </div>
        {!open && (
          <div
            className={`ml-9 overflow-hidden transition-all duration-300 
              ${ecommerce ? "max-h-40" : "max-h-0"}`}
          >
            <div className="flex flex-col gap-1 text-sm text-gray-600">
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Products
              </span>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Billing
              </span>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Invoice
              </span>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Single Invoice
              </span>
              <span className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                Transaction
              </span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
