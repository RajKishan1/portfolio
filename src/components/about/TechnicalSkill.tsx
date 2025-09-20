import React from "react";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact, FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiCplusplus,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { PiFileCppDuotone } from "react-icons/pi";
const Item = ({ techName }: { techName: string }) => {
  return <div>{techName}</div>;
};
const Class =
  "px-2.5 py-1 flex flex-row-reverse gap-1.5 items-center border border-stone-700 rounded-lg text-sm hover:scale-105 transition-all duration-200 hover:rounded-xl";
const TechnicalSkill = () => {
  return (
    <div id="skill" className="">
      <h1 className="text-4xl  font-bold mb-4 ">Technical Skills</h1>
      <h1></h1>
      <p>Languages</p>
      <div className=" flex flex-wrap items-center gap-2  my-3">
        <div className={Class}>
          <Item techName="HTML" />
          <IoLogoHtml5 />
        </div>
        <div className={Class}>
          <Item techName="CSS" />
          <IoLogoCss3 />
        </div>
        <div className={Class}>
          <Item techName="JavaScript" />
          <SiJavascript />
        </div>
        <div className={Class}>
          <Item techName="TypeScript" />
          <SiTypescript />
        </div>
        <div className={Class}>
          <Item techName="Tailwind" />
          <SiTailwindcss />
        </div>
        <div className={Class}>
          <Item techName="C" />
          <SiCplusplus />
        </div>
        <div className={Class}>
          <Item techName="C++" />
          <PiFileCppDuotone />
        </div>
      </div>
      <p>Technologies</p>
      <div className=" flex flex-wrap gap-2  my-3">
        <div className={Class}>
          <Item techName="React.Js" />
          <FaReact />
        </div>
        <div className={Class}>
          <Item techName="Next.Js" />
          <SiNextdotjs />
        </div>{" "}
        <div className={Class}>
          <Item techName="Figma" />
          <FiFigma />
        </div>{" "}
        <div className={Class}>
          <Item techName="GitHub" />
          <FaGithub />
        </div>{" "}
        <div className={Class}>
          <Item techName="Prisma" />
          <SiPrisma />
        </div>{" "}
        <div className={Class}>
          <Item techName="Postgres" />
          <SiPostgresql />
        </div>{" "}
      </div>
      <img src="" alt="" />
    </div>
  );
};

export default TechnicalSkill;
