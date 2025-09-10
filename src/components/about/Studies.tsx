import React from "react";
interface prop {
  title: string;
  subtitle: string;
  time?: string;
}
const Module = ({ time, title, subtitle }: prop) => {
  return (
    <div className="w-full flex flex-col gap-0.5 my-6">
      <span className="flex justify-between items-center">
        {" "}
        <h5 className="max-sm:text-[18px] text-[22px] font-semibold ">{title}</h5>
        <p className="max-sm:text-[14px] text-neutral-800 dark:text-neutral-400">
          {time}
        </p>
      </span>
      <p className="text-[16px] md:text-[18px] text-neutral-800 dark:text-neutral-400 font-normal">
        {subtitle}
      </p>
    </div>
  );
};
const Studies = () => {
  return (
    <div id="studies" className="my-20 w-full md:pr-6 lg:pr-12">
      <h1 className="text-4xl font-bold">Studies</h1>
      <Module
        time="2025-Present"
        title="IGNOU"
        subtitle="Master of Computer Application"
      />
      <Module
        time="2022-2025"
        title="JNC University "
        subtitle="Bachelor of Computer Application "
      />
      <Module title="RK Mission School" subtitle="Intermediate"/>
    </div>
  );
};

export default Studies;
