import { TypeAnimation } from "react-type-animation";
import React from "react";
const HomeCV = () => {
  const handleScrollToAbout = (event: any) => {
    event.preventDefault();
    const section = document.querySelector("#about");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="arlo_tm_section" id="home">
      <div className="arlo_tm_hero_header_wrap">
        <div className="arlo_tm_universal_box_wrap">
          <div className="bg_wrap">
            <div className="overlay_image hero jarallax" data-speed="0.1"></div>
            <div className="overlay_color hero"></div>
          </div>
          <div className="content hero">
            <div className="inner_content">
              <div className="image_wrap">
                <img src="img/hero/avatar.jpg" alt="hero" />
              </div>
              <div className="name_holder">
                <h3>
                  Bùi <span>Ngọc Đại</span>
                </h3>
              </div>
              <div className="text_typing">
                <p>
                  I'm a&nbsp;
                  <TypeAnimation
                    {...({
                      sequence: [
                        "Freelancer",
                        2000,
                        "UI/UX Designer",
                        2000,
                        "React Developer",
                        2000,
                      ],
                      wrapper: "span",
                      speed: 50,
                      repeat: Infinity,
                    } as any)}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="arlo_tm_arrow_wrap bounce anchor">
            <a href="#" onClick={(event) => handleScrollToAbout(event)}>
              <i className="xcon-angle-double-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCV;
