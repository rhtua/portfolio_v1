import React from "react";
import "./style.css";

const Profile = () => {
  return (
    <div className="flex lg:w-1/3 flex-col px-8 lg:px-14 lg:border-r lg:border-gray-300 justify-between">
      <div className="flex flex-col lg:sticky gap-4 top-0 lg:mb-20">
        <h2 className="font-extralight text-gray-600 text-xl md:text-2xl">
          FullStack Developer
        </h2>
        <div className="flex lg:flex-col text-4xl sm:text-5xl">
          <h2 className="font-bold">Arthur&nbsp;</h2>
          <h2 className="font-bold">Oliveira</h2>
        </div>
        <div className="flex">
          <div className="dev-picture h-40 w-40 md:h-56 md:w-56 lg:h-40 lg:w-40" />
          <div className="dev-picture-background h-40 w-40 md:h-56 md:w-56 lg:h-40 lg:w-40" />
        </div>
        <div className="flex flex-col gap-2 location">
          <div className="flex gap-1">
            <div className="px-5 py-1 bg-slate-900 location-icon" />
            <h3 className="text-xl px-6 h-full bg-slate-900 leading-relaxed pt-1">
              Paraná, BR
            </h3>
          </div>
          <h4 className="text-xs font-medium uppercase">
            Realocation can be discussed
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-1 my-10 lg:mb-0">
        <h3 className="font-medium">FIND ME AT</h3>
        <div className="flex">
          <a
            className="icon linkedin"
            href="https://www.linkedin.com/in/rhtua/"
            aria-label="Linkedin"
          />
          <a
            className="icon instagram"
            href="https://www.instagram.com/irhtua/"
            aria-label="Instagram"
          />
          <a
            className="icon github"
            href="https://github.com/rhtua"
            aria-label="Github"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
