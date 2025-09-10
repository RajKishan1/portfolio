import React from "react";

const WorkExperience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col gap-5 mt-20 w-full max-sm:pr-0 md:pr-6 lg:pr-12 "
    >
      <h1 className="text-4xl font-bold ">Work Experience</h1>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-1 ">
          <h3 className="text-xl font-bold">DataVidhya</h3>
          <p className="text-blue-400 text-sm">Full Stack Intern</p>
        </div>
        <div className="text-neutral-800 dark:text-neutral-400 text-sm">April-June 2025</div>
      </div>
      <div className="text-neutral-800 dark:text-neutral-400 w-full">
        <ul className="w-full text-sm">
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
      <img src="/me.png" className="h-32 w-full md:w-56 " alt="" />
    </div>
  );
};

export default WorkExperience;
