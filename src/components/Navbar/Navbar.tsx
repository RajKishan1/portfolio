import React from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full py-5 px-6 flex justify-between items-center bg-gradient-to-t from-transparent to-black">
      <p>India / Asia</p>
      <NavMenu />
      <p>Time</p>
    </div>
  );
};

export default Navbar;
