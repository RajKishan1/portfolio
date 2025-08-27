import React from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="w-full py-5 px-6 flex justify-between items-center">
      <p>India / Asia</p>
      <NavMenu />
      <p>Time</p>
    </div>
  );
};

export default Navbar;
