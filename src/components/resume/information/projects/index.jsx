import React from "react";
import "./style.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ReactComponent as GithubIcon } from "../../../../images/github-icon.svg";
import { ReactComponent as FigmaIcon } from "../../../../images/figma-icon.svg";

const Projects = ({ data }) => {
  return (
    <div className="flex flex-col px-8 2xl:mr-10 ">
      <h3 className="text-sm font-medium">PROJECTS</h3>
      <div className="flex w-full h-[1px] bg-slate-300 mt-2 mb-4 gap-4" />
      {data.map(({ node: p }, i) => {
        const reverse = i % 2 !== 0;
        return (
          <div
            key={p.title}
            className={` my-4 lg:my-8 flex flex-col lg:flex-row w-full h-72 md:h-full relative ${
              reverse ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`flex flex-col gap-3 rounded-2xl lg:rounded-none justify-center py-4 lg:py-0 lg:justify-start min-h-full card bg-stone-700 lg:bg-transparent bg-opacity-80 absolute z-50 ${
                reverse
                  ? "lg:ml-80 2xl:ml-96 2xl:pl-20 lg:items-end"
                  : "lg:mr-80 2xl:mr-96 2xl:pr-20"
              }`}
            >
              <h3 className="px-8 lg:px-0 text-2xl font-medium lg:font-light text-orange-350 lg:text-black">
                {p.title}
              </h3>
              <div className="flex flex-col gap-3 py-4 px-8 lg:shadow-lg shadow-orange-700/30 lg:bg-orange-350">
                <h3 className="text-md font-medium lg:font-light text-slate-100 lg:text-gray-800">
                  {p.description}
                </h3>
              </div>
              <div className="flex pl-8 lg:px-2 gap-4 text-orange-350 lg:text-gray-700 font-light text-sm flex-wrap">
                {p.technologies.map((value, index) => (
                  <h3 key={index}>{value}</h3>
                ))}
              </div>
              <div className="flex gap-4 text-slate-100 lg:text-gray-800 font-light text-sm px-8 lg:px-2">
                <a
                  href={p.github}
                  className="hover:text-orange-500 transition-all duration-400"
                  title="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                </a>
                <a
                  href={p.figma}
                  className="hover:text-orange-500 transition-all duration-200"
                  title="Figma"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FigmaIcon />
                </a>
              </div>
            </div>
            <div className="flex lg:w-2/3 grayscale h-full hover:filter-none lg:hover:scale-105 hover:drop-shadow-lg transition-all duration-300 max-h-80">
              <GatsbyImage
                alt="img"
                image={getImage(p.img)}
                objectFit="cover"
                imgClassName="rounded-2xl lg:rounded-none"
                objectPosition="top"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
