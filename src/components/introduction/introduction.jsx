import React from "react";
import ButtonHover from "../buttons/button-hover";

const Introduction = () => {
  return (
    <div className="flex w-screen h-screen font-medium flex-col justify-center items-center text-center">
      <h1 className="text-6xl 2xl:text-8xl">
        Hi, my name is
        <span className="text-orange-500 font-semibold"> Arthur</span>
      </h1>
      <h1 className="text-6xl 2xl:text-8xl">I'm a Developer.</h1>
      <div className="flex h-10" />
      <ButtonHover />
    </div>
  );
};

export default Introduction;
