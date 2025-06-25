import LeftPart from "~/components/LeftPart";
import MobileMenu from "~/components/mobile/MobileMenu";
import PreLoader from "~/components/PreLoader";
import RightPart from "~/components/RightPart";
import { FloatButton } from "antd";
import { useState } from "react";
const Portfolio = () => {
  const [hideLeftPart, setHideLeftPart] = useState(true);
  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>

      {/* <!-- PRELOADER --> */}
      <PreLoader />
      {/* <!-- /PRELOADER --> */}

      {/* <!-- MOBILE MENU --> */}
      <MobileMenu />
      {/* <!-- /MOBILE MENU --> */}

      {/* <!-- CONTENT --> */}
      <div className="arlo_tm_content">
        {/* <!-- LEFTPART --> */}
        <LeftPart
          hideLeftPart={hideLeftPart}
          setHideLeftPart={setHideLeftPart}
        />
        {/* <!-- /LEFTPART --> */}

        {/* <!-- RIGHTPART --> */}
        <RightPart
          hideLeftPart={hideLeftPart}
          setHideLeftPart={setHideLeftPart}
        />
        {/* <!-- /RIGHTPART --> */}
        <FloatButton.BackTop tooltip={() => <div>Scroll To Top</div>} />
        {/* <a className="arlo_tm_totop" href="#"></a> */}
      </div>
    </div>
  );
};

export default Portfolio;
