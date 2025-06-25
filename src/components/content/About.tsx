import { TypeAnimation } from "react-type-animation";
import avatar3 from "~/assets/img/about/avatar3.jpg";
import myCV from "~/assets/CV_Bui_Ngoc_Dai.pdf";
const About = () => {
  return (
    <div className="arlo_tm_section relative" id="about" style={{paddingTop: 100}}>
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Main informations about me</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
              <div className="leftbox">
                <div
                  className="about_image_wrap parallax"
                  data-relative-input="true"
                >
                  <div className="image layer" data-depth="0.1">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner" data-img-url={avatar3}
                    style={{backgroundImage: `url(${avatar3})`}}
                    >

                    </div>
                  </div>
                  <div className="border layer" data-depth="0.2">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner"></div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>
                    I'm Bùi Ngọc Đại... I'm a&nbsp;
                    <TypeAnimation
                      {...({
                        sequence: [
                          "React Developer",
                          2000,
                          "UI/UX Designer",
                          2000,
                          "Freelancer",
                          2000,
                        ],
                        wrapper: "span",
                        speed: 50,
                        repeat: Infinity,
                      } as any)}
                    />
                  </h4>
                </div>
                <div className="definition">
                  <p>
                    Hi! My name is <strong>Bùi Ngọc Đại</strong>.<br />
                    I’m a frontend developer specializing in React Native,
                    Express.js, MongoDB, and Google APIs.
                    <br /> <br />
                    I enjoy creating user-friendly mobile experiences and
                    continuously learning new technologies.
                    <br /> <br />
                    If you're looking for someone who cares about mobile
                    development and works hard,
                    <br />I would be excited to collaborate with you!
                  </p>
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span>
                        <label>Birthday:</label> 26.04.1999
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Mail:</label>{" "}
                        <a href="mailto:ngocdaibui99@gmail.com">
                          ngocdaibui&#64;gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Gender:</label> Male
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>City:</label> Ho Chi Minh City, Vietnam
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Github:</label>{" "}
                        <a href="https://github.com/ngocdai99">
                          https://github.com/ngocdai99
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Study:</label> FPL Ho Chi Minh Campus
                      </span>
                    </li>

                    <li>
                      <span>
                        <label>Major:</label> Mobile App Development
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Degree:</label> Bachelor
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>GPA:</label> 3.9/4
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="buttons_wrap">
                  <ul>
                    <li>
                      <a href={myCV} download>
                        <span>Download CV</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
