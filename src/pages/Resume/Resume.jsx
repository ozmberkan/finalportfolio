import React from "react";

import cv from "~/assets/cv.pdf";

const Resume = () => {
  return (
    <div className="w-full">
      <embed
        src={cv}
        type="application/pdf"
        width="100%"
        height="700px"
        title="Embedded PDF Viewer"
      />
    </div>
  );
};

export default Resume;
