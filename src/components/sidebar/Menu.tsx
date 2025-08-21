import React from "react";
interface prop {
  text: string;
}
const Option = ({ text }: prop) => {
  return <div>{text}</div>;
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
