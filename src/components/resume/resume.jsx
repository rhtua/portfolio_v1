import React from "react";

const Resume = () => {
  return (
    <>
      <div className="flex bg-red-300 w-screen h-20"></div>
      <div className="flex w-screen min-h-screen justify-center">
        <div className="flex flex-grow flex-col lg:flex-row max-w-screen-2xl ">
          <div className="flex lg:w-1/3 flex-col">
            <h2 className="font-extralight text-gray-600 text-3xl">
              FullStack Developer
            </h2>
            <h2 className="font-semibold text-6xl">Arthur</h2>
            <h2 className="font-semibold text-6xl">Oliveira</h2>
          </div>
          <div className="flex bg-lime-600 lg:w-2/3">a</div>
        </div>
      </div>
    </>
  );
};

export default Resume;
