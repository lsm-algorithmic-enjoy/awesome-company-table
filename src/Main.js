import React, { useState } from "react";
import LeftNavBar from "./components/PC/LeftNavbar";
import GetContent from "./components/PC/GetContent";
import GetMobileContent from "./components/Mobile/GetMobilecContent";
import MobileNavBar from "./components/Mobile/MobileNavbar";
import { useMediaQuery } from "react-responsive";

const Main = () => {
  const [selectedMenuKeys, setSelectedMenuKeys] = useState(["0"]);
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
      query: "(max-width:600px)",
    });
    return <>{isMobile && children}</>;
  };

  const Pc = ({ children }) => {
    const isPc = useMediaQuery({
      query: "(min-width:601px)",
    });
    return <>{isPc && children}</>;
  };

  return (
    <>
      <Mobile>
        <MobileNavBar
          selectedMenuKeys={selectedMenuKeys}
          setSelectedMenuKeys={setSelectedMenuKeys}
        />
        <GetMobileContent menuKey={selectedMenuKeys[0]} />
      </Mobile>
      <Pc>
        <LeftNavBar
          selectedMenuKeys={selectedMenuKeys}
          setSelectedMenuKeys={setSelectedMenuKeys}
        />
        <GetContent menuKey={selectedMenuKeys[0]} />
      </Pc>
    </>
  );
};

export default Main;
