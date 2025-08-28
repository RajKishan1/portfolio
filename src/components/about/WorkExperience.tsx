import React from "react";

const WorkExperience = () => {
  return (
    <div id="experience" className="flex flex-col gap-5 mt-20">
      <h1 className="text-4xl font-bold text-white">Work Experience</h1>
      <div className="flex justify-between items-center pr-6">
        <div className="flex flex-col gap-2 ">
          <h3>DataVidhya CMS</h3>
          <p>Full Stack Intern</p>
        </div>
        <div className="text-neutral-400">2025</div>
      </div>
      <div className="text-neutral-400">
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            aliquid?
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            delectus.
          </li>
        </ul>
      </div>
      <img src="/me.png" className="h-32 w-56 " alt="" />
    </div>
  );
};

export default WorkExperience;
