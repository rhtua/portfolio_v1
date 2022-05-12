import React from "react";
import Profile from "./profile";
import Information from "./information";
import "./style.css";

const Resume = ({ data }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center bg-gray-100">
      <div className="flex w-screen h-16 items-center justify-between px-8 shadow-sm">
        <a className="text-slate-900 text-2xl font-medium md:text-3xl select-none pt-1">
          arthur<span className="text-orange-500 text-2xl md:text-4xl">.</span>
        </a>
        <a
          className="bg-orange-500 pt-2 pb-1 px-4 rounded-2xl text-gray-50 text-sm lg:text-md transition-all duration-200 raise"
          href="mailto:contato@rhtua.com.br"
        >
          Contact Me
        </a>
      </div>
      <div className="flex flex-grow flex-col lg:flex-row container mx-auto my-8">
        <Profile />
        <Information data={data} />
      </div>
    </div>
  );
};

export default Resume;
