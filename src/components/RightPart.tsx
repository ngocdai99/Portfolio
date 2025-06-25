import React from "react";
import About from "./content/About";
import Contact from "./content/Contact";
import Experiences from "./content/Experiences";
import HomeCV from "./content/HomeCV";
import Projects from "./content/Projects";
import Skills from "./content/Skills";
import { IProps } from "./LeftPart";

const RightPart: React.FC<IProps> = ({ hideLeftPart, setHideLeftPart }) => {
  return (
    <div
      className={
        hideLeftPart === true ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"
      }
    >
      <div className="rightpart_inner">
        <HomeCV />

        {/* <!-- ABOUT --> */}
        <About />
        {/* <!-- /ABOUT --> */}

        {/* <!-- SKILLS --> */}
        <Skills />
        {/* <!-- /SKILLS --> */}

        {/* <!-- EXPERIENCES --> */}
        <Experiences />
        {/* <!-- /EXPERIENCES --> */}

        {/* <!-- PROJECTS --> */}
        <Projects />
        {/* <!-- /PROJECTS --> */}

        {/* <!-- CONTACT & FOOTER --> */}
        <Contact />
        {/* <!-- /CONTACT & FOOTER --> */}
      </div>
    </div>
  );
};

export default RightPart;
