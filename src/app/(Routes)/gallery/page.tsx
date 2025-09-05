import React from "react";
interface prop {
  height: string;
  src: string;
}
const ImgDiv = ({ height, src }: prop) => {
  return (
    <div className={`rounded-lg overflow-hidden ${height} w-full`}>
      <img src={src} className={`object-cover w-full h-full`} alt="" />
    </div>
  );
};
const page = () => {
  return (
    <div className="px-2 md:px-30 lg:60 flex flex-col gap-10 ">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col  gap-2 w-full md:w-1/2">
          <ImgDiv src="/fort.jpeg" height="h-[300px]" />
          <ImgDiv src="/me.png" height="h-[500px]" />
          <ImgDiv src="/namo.jpg" height="h-[300px]" />
          <ImgDiv src="/ocean.jpg" height="h-[600px]" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col  gap-2">
          <ImgDiv src="/canon.jpg" height="h-[600px]" />
          <ImgDiv src="/cloud.jpg" height="h-[300px]" />
          <ImgDiv src="/stage.jpg" height="h-[500px]" />
          <ImgDiv src="/kol.jpg" height="h-[300px]" />
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold">Books</h1>
        <div></div>
      </div>
    </div>
  );
};

export default page;
