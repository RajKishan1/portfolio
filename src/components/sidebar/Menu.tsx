import React from "react";
interface prop {
  text: string;
}
const Option = ({ text }: prop) => {
  return <div className="text-lg py-2 rounded-xl hover:bg-white hover:shadow-3xl px-10 ">{text}</div>;
};
const Menu = () => {
  return (
    <div className="flex flex-col gap-2">
      <Option text="Home" />
      <Option text="About" />
      <Option text="Projects" />
      <Option text="Articles" />
      <Option text="Contact" />
    </div>
  );
};

export default Menu;
