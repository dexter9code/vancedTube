import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "../components/sideNav/NavbarComp";
import SideNavComp from "../components/sideNav/SideNavComp";
import "../styles/rootlayout.css";

const RootLayout: React.FC = () => {
  const [isLight, setIsLight] = useState(false);

  const changeDarkHandler = () => {
    setIsLight((prevValue) => !prevValue);
  };
  return (
    <>
      <div className={`home ${isLight && `home__light`}`}>
        <SideNavComp changeDarkHandler={changeDarkHandler} isLight={isLight} />
        <main className="home__main">
          <NavbarComp isLight={isLight} />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
