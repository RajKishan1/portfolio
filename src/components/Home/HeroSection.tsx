import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-10 pt-32">
      <h1 className="text-6xl font-bold text-white text-center">
        Building bridges between design and code
      </h1>
      <h4 className="text-2xl font-medium text-neutral-400 text-center">
        I'm Selene, a design engineer at , where I craft intuitive user
        experiences. After hours, I build my own projects.
      </h4>
      <div className="flex items-center justify-center gap-2.5 border-[1px] border-neutral-800 rounded-full px-1 py-1.5">
        <img className="rounded-full size-8" src="/me.png" alt="" />
        <p className="text-sm">About - Raj Kishan</p>
      </div>
    </div>
  );
};

export default HeroSection;
