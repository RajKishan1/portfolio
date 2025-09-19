import React from "react";
const Item = ({ techName }: { techName: string }) => {
  return (
    <div className="px-2.5 py-1 border border-stone-700 rounded-lg text-sm">
      {techName}
    </div>
  );
};
const TechnicalSkill = () => {
  return (
    <div id="skill" className="">
      <h1 className="text-4xl  font-bold mb-4 ">Technical Skills</h1>
      <h1></h1>
      <p>Languages</p>
      <div className=" flex flex-wrap gap-2  my-3">
        <Item techName="HTML" />
        <Item techName="CSS" />
        <Item techName="JavaScript" />
        <Item techName="TypeScript" />
        <Item techName="Tailwind" />
        <Item techName="C" />
        <Item techName="C++" />
      </div>
      <p>Technologies</p>
      <div className=" flex flex-wrap gap-2  my-3">
        {" "}
        <Item techName="React.Js" />
        <Item techName="Next.Js" />
        <Item techName="Figma" />
        <Item techName="GitHub" />
        <Item techName="Prisma" />
        <Item techName="Postgres" />
      </div>
      <img src="" alt="" />
    </div>
  );
};

export default TechnicalSkill;
