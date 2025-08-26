import React from "react";

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-5 mt-20">
      <h1 className="text-4xl font-bold text-white">Work Experience</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 ">
          <h3>DataVidhya CMS</h3>
          <p>Full Stack Intern</p>
        </div>
        <div>2025</div>
      </div>
      <div>
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
