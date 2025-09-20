import React from "react";

const page = () => {
  return (
    <div>
      {/* <PDFViewer /> */}
      <iframe
        src="/resume.pdf#toolbar=0&navpanes=0"
        className="w-full h-screen"
      >
        Resume
      </iframe>
    </div>
  );
};

export default page;
