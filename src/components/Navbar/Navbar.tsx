"use client";
import React, { useState } from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const d = new Date();
  const date = d
    .toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })
    .normalize();
  const [time, setTime] = useState<string>();
  setTimeout(() => {
    setTime(date);
  }, 1000);

  return (
    <div className="sticky top-0 w-full py-5 px-6 flex justify-between items-center bg-gradient-to-t from-transparent to-[#0a0a0a] z-50">
      <p>India / Asia</p>
      <NavMenu />
      <p className="text-sm w-20"> {time}</p>
    </div>
  );
};

export default Navbar;
