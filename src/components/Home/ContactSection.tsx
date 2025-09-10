import React from "react";

const ContactSection = () => {
  return (
    <div className="py-5 md:py-10 px-5 md:px-20 bg-zinc-200 dark:bg-zinc-950 rounded-xl border dark:border-neutral-800 flex flex-col items-center justify-center gap-2.5 my-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        Leave a message or feedback for me
      </h1>
      <p className="text-neutral-500 text-center">
       You'll also get my weekly publish about
        <br className="block md:hidden" /> creativity and engineering
      </p>
      <form action="" className="flex flex-col gap-3 mt-5">
        <span className="w-full flex flex-col md:flex-row gap-2 ">
          <input
            type="text"
            className=" flex-1 border border-zinc-400 dark:border-neutral-800 px-4 py-2 rounded-xl"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="flex-1 border border-zinc-400 dark:border-neutral-800 px-4 py-2 rounded-xl"
            placeholder="Your Email"
          />
        </span>
        <textarea
          name=""
          id=""
          placeholder="Your Message"
          className=" border border-zinc-400 dark:border-neutral-800 px-4 py-2 rounded-xl overflow-hidden"
        ></textarea>
        <input
          type="submit"
          className="bg-zinc-800 dark:bg-neutral-100  font-bold text-white dark:text-black  px-4 py-2 rounded-xl"
        />
      </form>
    </div>
  );
};

export default ContactSection;
