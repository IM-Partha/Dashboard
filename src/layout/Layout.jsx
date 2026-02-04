import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    const [open,setOpen]=useState(false)
    console.log(open)
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={open} setOpen={setOpen}/>
      <div className={`flex-1 transition-all duration-300 ${open? "md:ml-20 lg:ml-20" : " md:ml-64 lg:ml-64"} `}>
        <Header open={open} setOpen={setOpen}/>
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
