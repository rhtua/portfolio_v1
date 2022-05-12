import React from "react";
import "./style.css";
import { ReactComponent as PointerRight } from "../../../images/pointer-right.svg";

const lista = [
  {
    role: "Software Analysis and Development",
    company: "GazinTech",
    companyLink: "https://gazintech.com.br/",
    period: "August  2021 - Now",
    work: [
      "Develop and maintain major features for company's B2B e-commerce",
      "Focused on the improving and standardize the front-end ",
      "Worked with a variety of different languages and frameworks such as Typescript, NextJS, NodeJS and more",
    ],
  },
  {
    role: "FullStack Developer",
    company: "Benner",
    companyLink: "https://benner.com.br/",
    period: "June 2019 - August 2021",
    work: [
      "From intern to full time developer in five months",
      "Maintained and incremented many products",
      "Adapted to work with proprietary technology",
      "Worked with a variety of different languages and frameworks such as JavaScript, C#, .Net, WebForms and more",
    ],
  },
];

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(0);

  return (
    <div className="flex flex-col px-8">
      <h3 className="text-sm font-medium">WORK</h3>
      <div className="flex w-full h-[1px] bg-slate-300 mb-8 mt-2" />
      <div className="flex w-full flex-col lg:flex-row max-w-screen-md">
        <div className="flex flex-col-reverse lg:flex-row shrink">
          <div
            className="flex bg-gray-400 list mb-6 lg:mb-0 lg:mobile-list"
            style={{
              height: lista.length * 40 + "px",
              width: "100%",
            }}
          >
            <div
              className="h-[2px] bg-orange-400 transition-all mobile-item duration-300 lg:item"
              style={{
                width: 100 / lista.length + "%",
                marginTop: openTab * 40 + "px",
                marginLeft: (100 / lista.length) * openTab + "%",
              }}
            />
          </div>
          <ul className="flex lg:flex-col list-none" role="tablist">
            {lista.map(({ company }, index) => {
              return (
                <li
                  key={index}
                  className="flex text-center whitespace-nowrap hover:bg-gray-200 w-full"
                >
                  <a
                    className={
                      "text-md capitalize pl-2 pr-5 py-2 leading-normal transition-all text-left w-full  " +
                      (openTab === index ? "text-orange-600" : "text-slate-900")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(index);
                    }}
                    data-toggle="tab"
                    href="#"
                    role="tablist"
                  >
                    {company}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative flex flex-col min-w-0 break-words w-full">
          <div className="px-4 flex-auto">
            <div className="tab-content tab-space transition-all">
              {lista.map(
                ({ role, company, companyLink, period, work }, index) => {
                  return (
                    <div
                      key={index}
                      className={openTab === index ? "block" : "hidden"}
                    >
                      <h2 className="text-2xl">
                        {role} &nbsp;
                        <a href={companyLink} className="text-orange-500">
                          @{company}
                        </a>
                      </h2>
                      <h2 className="text-sm py-1 font-light">{period}</h2>
                      {work.map((value) => (
                        <div className="flex mt-2 transition-all">
                          <div className="flex w-4 mr-2 justify-start items-start text-orange-500 shrink-0">
                            <PointerRight />
                          </div>
                          <div className="flex font-light">{value}</div>
                        </div>
                      ))}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
