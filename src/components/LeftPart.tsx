import React, { useEffect, useState } from "react";
import desktopLogo from "~/assets/img/logo/desktop-logo.png";
import { isMobile } from "react-device-detect";
export interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}
const LeftPart: React.FC<IProps> = ({ hideLeftPart, setHideLeftPart }) => {
  const [activeTab, setActiveTab] = useState<string>("home");

  const handleClickTab = (tab: string, event: any) => {
    event.preventDefault();
    setActiveTab(tab);
    const section = document.querySelector(`#${tab}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      window.location.hash = tab;
    }, 500);
  };

 
  return (
    <div
      className={
        hideLeftPart === true
          ? "arlo_tm_leftpart_wrap opened"
          : "arlo_tm_leftpart_wrap"
      }
    >
      <div className="leftpart_inner">
        <div className="logo_wrap">
          <a href="#">
            <img src={desktopLogo} alt="desktop-logo" />
          </a>
        </div>
        <div className="menu_list_wrap">
          <ul className="anchor_nav">
            <li>
              <a
                href="#home"
                onClick={(e) => handleClickTab("home", e)}
                className={activeTab === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleClickTab("about", e)}
                className={activeTab === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleClickTab("skills", e)}
                className={activeTab === "skills" ? "active" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                onClick={(e) => handleClickTab("experiences", e)}
                className={activeTab === "experiences" ? "active" : ""}
              >
                Experiences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleClickTab("projects", e)}
                className={activeTab === "projects" ? "active" : ""}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={(e) => handleClickTab("contact", e)}
                className={activeTab === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="leftpart_bottom">
          <div className="social_wrap">
            <ul>
              <li>
                <a href="#">
                  <i className="xcon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="xcon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="xcon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="xcon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="xcon-behance"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {!isMobile && (
          <a
            className={
              hideLeftPart === true ? "arlo_tm_resize opened" : "arlo_tm_resize"
            }
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setHideLeftPart(!hideLeftPart);
            }}
          >
            <i
              className={
                hideLeftPart === true
                  ? "xcon-angle-left opened"
                  : "xcon-angle-left"
              }
            ></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default LeftPart;
