import * as React from "react";
import Resume from "../components/resume/resume";
import { graphql } from "gatsby";
import { useState } from "react";

const Intro = () => {
  function initialScroll() {
    setShowIntro(false);
  }

  const [showintro, setShowIntro] = useState(true);

  return (
    <section
      className={`
        flex w-screen font-medium flex-col justify-center items-center text-center text-4xl rounded transition-all duration-500 ${
          showintro ? "h-screen" : "h-0"
        }`}
    >
      <h1 className="lg:text-6xl 2xl:text-8xl">
        Hi, my name is
        <span className="text-orange-500 font-semibold"> Arthur</span>
      </h1>
      <h1 className="lg:text-6xl 2xl:text-8xl">I'm a Developer.</h1>
      <div className="flex h-10" />
      <button
        className={` button-hover pb-1 pt-2 px-4 border-2 border-orange-500 rounded-md justify-center cursor-pointer relative transition-all duration-100 ${
          showintro ? "flex" : "invisible"
        }`}
        onClick={() => initialScroll()}
      >
        <div
          className={`bg-gradient-to-r from-orange-500 to-amber-500 w-0 h-full absolute transition-all left-0 top-0 z-0${
            showintro ? "flex" : "invisible"
          }`}
        />
        <span className={`z-50 text-xl ${showintro ? "flex" : "invisible"}`}>
          Know More
        </span>
      </button>
    </section>
  );
};

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <footer className="footer footer-center justify-center flex p-10 bg-slate-900 text-gray-100">
      <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-between text-center">
        <p>© {year} - All rights reserved</p>
        <a className="text-gray-100 text-2xl font-medium md:text-3xl select-none pt-1">
          arthur<span className="text-orange-500 text-2xl md:text-4xl">.</span>
        </a>
      </div>
    </footer>
  );
};

const IndexPage = ({ data }) => {
  return (
    <main>
      <title>Arthur Oliveira</title>

      <Intro />

      <div className="flex main-container" id="resume">
        <Resume data={data} />
      </div>

      <Footer />
    </main>
  );
};

export const query = graphql`
  query MyQuery {
    allProjectsJson {
      edges {
        node {
          id
          github
          figma
          description
          technologies
          img {
            childImageSharp {
              id
              gatsbyImageData(
                aspectRatio: 1.77777777778
                layout: CONSTRAINED
                transformOptions: { fit: FILL }
              )
            }
          }
          title
          extension
        }
      }
    }
  }
`;

export default IndexPage;
