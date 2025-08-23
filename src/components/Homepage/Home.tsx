import React from "react";
import ProjectCard from "./ProjectCard";

const Home = () => {
  return (
    <div className="p-16 pl-32 flex flex-col items-center bg-red-400">
      <div className="w-3/4 bg-green-300">
        <h1 className="text-4xl font-extrabold text-neutral-900">
          Namastey! I'm Raj Kishan.
        </h1>
        <p className="w-1/2 py-6  text-lg text-neutral-800 font-medium">
          I'm a full-stack developer that loves building products and web apps
          that can impact millions of lives
        </p>
      </div>
      <div className="w-3/4 bg-green-600">
        <p className="text-neutral-800 text-2xl font-bold text-left">
          What I've been working on
        </p>
        <div>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
