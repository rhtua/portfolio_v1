import React from "react";
import "./style.css";
import { ReactComponent as Chakra } from "../../../images/chakra.svg";
import { ReactComponent as NextJS } from "../../../images/nextjs.svg";
import { ReactComponent as Figma } from "../../../images/figma.svg";
import { ReactComponent as Circle } from "../../../images/balls-circle.svg";
import Projects from "./projects";
import TabsRender from "../work-history";
import Tabs from "../work-history";

const Frameworks = () => {
  return (
    <div className="flex md:flex-col lg:flex-row gap-2 lg:mt-2 md:px-4 lg:px-0 items-center">
      <a
        className="flex cursor-pointer text-cyan-500 filter grayscale hover:filter-none transition-all w-6 h-6"
        title="Chakra UI"
        target="_blank"
        rel="noreferrer"
        href="https://chakra-ui.com/"
      >
        <Chakra />
      </a>
      <a
        className="flex cursor-pointer filter grayscale hover:filter-none transition-all h-6 w-4 filter grayscale"
        title="Figma"
        target="_blank"
        rel="noreferrer"
        href="https://figma.com/"
      >
        <Figma />
      </a>
      <a
        className="flex cursor-pointer w-6 filter contrast-0 hover:filter-none transition-all w-6 h-6"
        title="NextJS"
        target="_blank"
        rel="noreferrer"
        href="https://nextjs.org/"
      >
        <NextJS />
      </a>
    </div>
  );
};

const SkillsAndTools = () => {
  return (
    <div className="flex flex-col px-8 lg:flex-row w-full gap-10">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">TOP SKILLS</h3>
        <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center">
          <div className="flex w-36 h-36 select-none justify-center animateCircle items-center relative border-2 rounded-full p-2 border-purple-400 text-purple-300">
            <Circle />
            <h3 className="text-xl font-medium absolute text-black">React</h3>
          </div>
          <div className="flex w-36 h-36 select-none justify-center animateCircle items-center relative border-2 rounded-full p-2 border-pink-400 text-pink-400">
            <Circle />
            <h3 className="text-xl font-medium absolute text-black">
              Node
            </h3>
          </div>
          <div className="flex w-36 h-36 select-none justify-center animateCircle items-center relative border-2 rounded-full p-2 border-blue-400 text-blue-400">
            <Circle />
            <h3 className="text-xl font-medium absolute text-black">
              C Sharp
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        <h3 className="text-sm font-medium">MAIN TOOLS</h3>
        <div className="flex flex-col md:flex-row lg:flex-col gap-2">
          <div className="flex py-1 px-3 bg-orange-500 w-fit hover:pr-20 hover:bg-orange-600 transition-all duration-500">
            <h3 className="text-2xl font-extralight text-white">GitLab</h3>
          </div>
          <div className="flex py-1 px-3 bg-orange-500 w-fit hover:pr-10 transition-all duration-500">
            <h3 className="text-2xl font-extralight text-white truncate">
              VS Code
            </h3>
          </div>
          <div className="flex py-1 px-3 bg-orange-500 w-fit hover:pr-20 hover:bg-orange-400 transition-all duration-500">
            <h3 className="text-2xl font-extralight text-white">Jira</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Information = ({ data }) => {
  const projects = data?.allProjectsJson.edges;

  return (
    <div className="flex flex-col gap-10 bg-gray-100 lg:w-2/3">
      <div className="flex flex-col md:flex-row w-full h-52 md:h-24 lg:h-28 md:items-center">
        <div className="pl-8 flex flex-col md:w-1/2 gap-1">
          <h3 className="text-sm font-medium">COMPANY</h3>
          <h3 className="text-3xl font-extralight text-gray-700">Gazin Tech</h3>
          <div className="flex gap-1 mt-2">
            <div className="w-2 h-2 rounded bg-green-500 mt-1" />
            <h3 className="text-sm font-medium">AVAILABLE FOR HIRE</h3>
          </div>
        </div>
        <div className="pl-8 flex h-full lg:h-auto flex-col md:flex-row lg:flex-col md:w-1/2 gap-1 md:border-l-gray-300 md:border-l ">
          <div className="flex flex-col h-full lg:h-auto justify-between lg:justify-start border-t-gray-300 border-t md:border-t-0 pt-4 md:pt-0 mt-4 md:mt-0 mr-8 md:mr-0">
            <h3 className="text-sm font-medium">FOCUSED ON</h3>
            <h3 className="text-2xl sm:text-3xl font-light lg:font-extralight sm:pr-4 lg:pr-0 text-gray-700">
              Front End Development
            </h3>
          </div>
          <Frameworks />
        </div>
      </div>

      <SkillsAndTools />

      <div className="flex flex-col px-8 gap-4 mt-4">
        <h3 className="text-sm font-medium">ABOUT</h3>
      <div className="flex w-full h-[1px] bg-slate-300 mb-4 gap-4" />
        <h4 className="font-light">
          I am a creative, self-motivated developer who wants to see where this
          programming thing will take me. You’ll often see me contemplating what
          i’ll do, just to make sure that solves the problem. In addition to
          being a design and front-end enthusiast, I also love cooking, music
          and dogs.
        </h4>
        <h4 className="font-light">
          Professionally talking, I have worked with .NET and Angular but now
          I'm dedicated to NextJS and NestJS for an e-commerce B2B platform.
          Besides my programming skills, I'm currently aiming to become a
          Product Owner or Project Manager as soon as I get my Software
          Engineering degree.
        </h4>
      </div>

      <Projects data={projects} />

      <Tabs />
    </div>
  );
};

export default Information;
