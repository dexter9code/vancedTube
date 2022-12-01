import "../../styles/navbar.css";
import { HiOutlineUserCircle, HiOutlineSearch } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const NavbarComp: React.FC = () => {
  const isLight = useSelector((state: RootState) => state.theme.activeLight);
  return (
    <nav className="navbar">
      <div
        className={`navbar__contents ${isLight && `navbar__contents_light`}`}
      >
        <div className="navbar__actions">
          <input type="text" placeholder="search" />
          <HiOutlineSearch color={isLight ? "#000" : "#fff"} />
        </div>
        <button
          type="button"
          className={`navbar__btn_login ${
            isLight && `navbar__btn_login_light`
          }`}
        >
          <HiOutlineUserCircle /> Sign in
        </button>
      </div>
    </nav>
  );
};

export default NavbarComp;
