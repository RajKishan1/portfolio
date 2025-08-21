import React from "react";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className="w-[15%] border p-4 gap-2.5">
      <div className="flex ">
        <div>
          <img src="/me.png" alt="my pic" className="rounded-full size-12" />
        </div>
        <div>
          <h1>Raj Kishan Verma</h1>
          <h1>Developer</h1>
        </div>
      </div>
      <div>
        <Menu />
      </div>
      <div>
        <h5>Socials</h5>
        
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
