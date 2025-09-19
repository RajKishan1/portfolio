import React from "react";

const page = () => {
  return (
    <div className="h-[75vh]">
      <h1 className="text-3xl font-bold text-center">Welcome to Admin Panel</h1>
      <div className="flex max-w-4xl mx-auto justify-around mt-10">
        <div className="border border-red-900 rounded-xl bg-teal-900 px-5 py-4">
          <h1 className="text-xl font-semibold">Gallery Section</h1>
        </div>
        <div className="border border-red-900 rounded-xl bg-red-300 px-5 py-4">
          <h1 className="text-xl font-semibold">Blog Section</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
