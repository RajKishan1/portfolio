import React from "react";
interface prop {
  title: string;
  subtitle: string;
}
const Module = ({ title, subtitle }: prop) => {
  return (
    <div className="flex flex-col gap-1 my-4">
      <h5 className="text-xl font-bold ">{title}</h5>
      <p className="text-sm text-neutral-500 font-normal">{subtitle}</p>
    </div>
  );
};
const Studies = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-white font-bold">Studies</h1>
      <Module
        title="Jan Nayak Chandrasekhar University"
        subtitle="Bachelor of Computer Application"
      />
      <Module title="RK Mission School " subtitle="Intermediate" />
    </div>
  );
};

export default Studies;
