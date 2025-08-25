import React from "react";

const ContactSection = () => {
  return (
    <div className="py-10 px-20 rounded-xl border border-neutral-800 flex flex-col items-center justify-center gap-2.5 my-6">
      <h1 className="text-3xl font-bold ">Subscribe to Selene's Newsletter</h1>
      <p className="text-neutral-500">My weekly newsletter about creativity and engineering</p>
      <form action="" className="flex flex-col gap-3 mt-5">
        <span className="w-full flex gap-2 ">
          <input
            type="text"
            className="flex-1 border border-neutral-800 px-4 py-2 rounded-xl"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="flex-1 border border-neutral-800 px-4 py-2 rounded-xl"
            placeholder="Your Email"
          />
        </span>
        <textarea
          name=""
          id=""
          placeholder="Your Message"
          className=" border border-neutral-800 px-4 py-2 rounded-xl overflow-hidden"
        ></textarea>
        <input
          type="submit"
          className="bg-white font-bold text-black  px-4 py-2 rounded-xl"
        />
      </form>
    </div>
  );
};

export default ContactSection;
