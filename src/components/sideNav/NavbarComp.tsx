import "../../styles/navbar.css";
import { HiOutlineUserCircle, HiOutlineSearch } from "react-icons/hi";

interface AppProps {
  isLight: boolean;
}

const NavbarComp: React.FC<AppProps> = ({ isLight }) => {
  return (
    <nav className="navbar">
      <div className="navbar__contents">
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
