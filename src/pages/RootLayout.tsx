import { Outlet } from "react-router-dom";
import NavbarComp from "../components/sideNav/NavbarComp";
import SideNavComp from "../components/sideNav/SideNavComp";
import "../styles/rootlayout.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const RootLayout: React.FC = () => {
  const isLight = useSelector((state: RootState) => state.theme.activeLight);
  console.log(isLight);
  return (
    <>
      <div className={`root ${isLight && `layout__light`}`}>
        <SideNavComp />
        <main className="root__main">
          <NavbarComp />
          <div className="root__wrapper">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default RootLayout;
