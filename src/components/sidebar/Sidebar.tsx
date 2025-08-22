import React from "react";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className="min-h-screen px-10 border p-4 gap-2.5 bg-[#F5F5F5] text-black flex flex-col justify-between items-center">
      <div className="flex flex-col items-center ">
        <div>
          <img src="/me.png" alt="my pic" className="rounded-full size-16" />
        </div>
        <div className="flex flex-col items-center pt-2">
          <h1 className="font-bold">Raj Kishan Verma</h1>
          <h1 className="text-sm">Frontend Developer</h1>
        </div>
      </div>
      <div>
        <Menu />
      </div>
      <div>
        <h5>Socials</h5>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>YouTube</p>
      </div>
      <div>
        <button className="bg-neutral-900 rounded-full font-semibold text-white px-4 py-3 text-sm">
          Read Resume
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
