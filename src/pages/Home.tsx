import { useState } from "react";
import NavbarComp from "../components/sideNav/NavbarComp";
import SideNavComp from "../components/sideNav/SideNavComp";
import "../styles/home.css";

const HomePage: React.FC = () => {
  const [isLight, setIsLight] = useState(false);

  const changeDarkHandler = () => {
    setIsLight((prevValue) => !prevValue);
  };

  return (
    <div className={`home ${isLight && `home__light`}`}>
      <SideNavComp changeDarkHandler={changeDarkHandler} isLight={isLight} />
      <main className="home__main">
        <NavbarComp />
        <div>video card</div>
      </main>
      <h1>e</h1>
    </div>
  );
};

export default HomePage;
