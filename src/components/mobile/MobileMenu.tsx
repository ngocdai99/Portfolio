import { useState } from "react";
import mobileLogo from "~/assets/img/logo/mobile_logo.png";
const MobileMenu = () => {
  const [activeTab, setActiveTab] = useState<string>("home");

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const style = {
    overflow: "hidden",
    display: openMenu ? "block" : "none",
    transition: "2s",
  };

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
    <div className="arlo_tm_mobile_header_wrap">
      <div className="main_wrap">
        <div className="logo">
          <a href="#">
            <img src={mobileLogo} alt="mobile_logo" />
          </a>
        </div>
        <div className="arlo_tm_trigger">
          <div
            className={
              openMenu
                ? "hamburger hamburger--collapse-r is-active"
                : "hamburger hamburger--collapse-r"
            }
          >
            <div className="hamburger-box">
              <div
                className="hamburger-inner"
                onClick={() => setOpenMenu((prev) => !prev)}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="arlo_tm_mobile_menu_wrap" style={style}>
        <div className="mob_menu">
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
      </div>
    </div>
  );
};

export default MobileMenu;
