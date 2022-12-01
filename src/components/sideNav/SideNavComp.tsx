import "../../styles/sideNavbar.css";
import logo from "../../assets/svg/youtube_van.svg";
import {
  MdOutlineHome,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineMusicNote,
  MdLocalMovies,
  MdOutlineLocalFireDepartment,
  MdOutlineSettings,
  MdOutlinedFlag,
  MdHelpOutline,
  MdOutlineFeedback,
} from "react-icons/md";
import { AiOutlineCompass, AiOutlineTrophy } from "react-icons/ai";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineUserCircle } from "react-icons/hi";

interface AppProps {
  changeDarkHandler: () => void;
  isLight: boolean;
}

const SideNavComp: React.FC<AppProps> = ({ changeDarkHandler, isLight }) => {
  return (
    <main className={`sidenav ${isLight && `sidenav__dark`}`}>
      <div className="sidenav__contents">
        <div className="sidenav__contents_logo">
          <img src={logo} alt="logo" className="sidenav__logo" />
          <h2>vancedTube</h2>
        </div>
        <div className="sidenav__items">
          <MdOutlineHome size={18} />
          <p>home</p>
        </div>
        <div className="sidenav__items">
          <MdOutlineSubscriptions size={18} />
          <p>subscriptions</p>
        </div>
        <div className="sidenav__items">
          <AiOutlineCompass size={18} />
          <p>explore</p>
        </div>
        <div className="sidenav__line" />
        <div className="sidenav__items">
          <MdOutlineVideoLibrary size={18} />
          <p>library</p>
        </div>
        <div className="sidenav__items">
          <MdHistory size={18} />
          <p>history</p>
        </div>
        <div className="sidenav__line" />
        <div className="sidenav__login">
          <p>Sign in to like videos, comment, and subscribe.</p>
          <button className="btn__login">
            <HiOutlineUserCircle size={18} />
            Sign in
          </button>
        </div>
        <div className="sidenav__line" />
        <h2 className="sidenav__title">Explore</h2>
        <div className="sidenav__items">
          <MdOutlineLocalFireDepartment size={18} />
          <p>trending</p>
        </div>
        <div className="sidenav__items">
          <MdOutlineMusicNote size={18} />
          <p>music</p>
        </div>
        <div className="sidenav__items">
          <AiOutlineTrophy size={18} />
          <p>sports</p>
        </div>
        <div className="sidenav__items">
          <SiYoutubegaming size={18} />
          <p>gaming</p>
        </div>
        <div className="sidenav__items">
          <MdLocalMovies size={18} />
          <p>movies</p>
        </div>
        <div className="sidenav__line" />
        <div className="sidenav__items">
          <MdOutlineSettings size={18} />
          <p>setting</p>
        </div>
        <div className="sidenav__items">
          <MdOutlinedFlag size={18} />
          <p>report</p>
        </div>
        <div className="sidenav__items">
          <MdHelpOutline size={18} />
          <p>help</p>
        </div>
        <div className="sidenav__items" onClick={changeDarkHandler}>
          <MdOutlineFeedback size={18} />
          <p>send feedback</p>
        </div>
      </div>
    </main>
  );
};

export default SideNavComp;
