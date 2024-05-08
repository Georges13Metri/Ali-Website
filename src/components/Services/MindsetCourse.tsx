import Image from "next/image";
import React from "react";

const MindsetCourse = () => {
  return (
    <div className="flex justify-center items-start pt-10 h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 ">Mindset Course</h1>
        <div className="flex items-center justify-center mb-6">
          <Image alt="tenor" src="/tenor.gif" width={400} height={100} />
        </div>
        <div className="ml-4 text-lg font-semibold text-gray-700 animate-pulse">
          Coming Soon...
        </div>
        <p className="text-gray-600">
          Stay tuned for updates on our upcoming mindset course!
        </p>
      </div>
    </div>
  );
};

export default MindsetCourse;
