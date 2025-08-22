import React from "react";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-[15%] border p-4 gap-2.5 bg-neutral-50 text-black flex flex-col justify-between">
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
      <div>
        <button className="bg-neutral-900 rounded-full font-semibold text-white px-4 py-3 text-sm">
          Read Resume
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
