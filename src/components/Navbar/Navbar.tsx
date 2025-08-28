import React from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const d = new Date();
  // const date = d.toLocaleDateString();
  const time = d.toLocaleTimeString().normalize();
  return (
    <div className="sticky top-0 w-full py-5 px-6 flex justify-between items-center bg-gradient-to-t from-transparent to-[#0a0a0a] z-50">
      <p>India / Asia</p>
      <NavMenu />
      <p className="text-sm"> {time}</p>
    </div>
  );
};

export default Navbar;
