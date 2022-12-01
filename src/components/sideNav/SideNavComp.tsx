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
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { toggleLightMode } from "../../reducers/themeSlice/themeSlice";
import { Link } from "react-router-dom";

const SideNavComp: React.FC = () => {
  const light = useSelector((state: RootState) => state.theme.activeLight);
  const dispatch = useDispatch();
  return (
    <main className={`sidenav ${light && `sidenav__dark`}`}>
      <div className="sidenav__contents">
        <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
          <div className="sidenav__contents_logo">
            <img src={logo} alt="logo" className="sidenav__logo" />
            <h2>vancedTube</h2>
          </div>
        </Link>
        <div className="sidenav__items">
          <MdOutlineHome size={20} />
          <p>home</p>
        </div>
        <div className="sidenav__items">
          <MdOutlineSubscriptions size={20} />
          <p>subscriptions</p>
        </div>
        <div className="sidenav__items">
          <AiOutlineCompass size={20} />
          <p>explore</p>
        </div>
        <div className="sidenav__line" />
        <div className="sidenav__items">
          <MdOutlineVideoLibrary size={20} />
          <p>library</p>
        </div>
        <div className="sidenav__items">
          <MdHistory size={20} />
          <p>history</p>
        </div>
        <div className="sidenav__line" />
        <div className="sidenav__login">
          <p>Sign in to like videos, comment, and subscribe.</p>
          <button className={`btn__login ${light && `btn__login_light`}`}>
            <HiOutlineUserCircle size={20} />
            Sign in
          </button>
        </div>
        <div className="sidenav__line" />
        <h2 className="sidenav__title">Explore</h2>
        <div className="sidenav__items">
          <MdOutlineLocalFireDepartment size={20} />
          <p>trending</p>
        </div>
        <div className="sidenav__items">
          <MdOutlineMusicNote size={20} />
          <p>music</p>
        </div>
        <div className="sidenav__items">
          <AiOutlineTrophy size={20} />
          <p>sports</p>
        </div>
        <div className="sidenav__items">
          <SiYoutubegaming size={20} />
          <p>gaming</p>
        </div>
        <div className="sidenav__items">
          <MdLocalMovies size={20} />
          <p>movies</p>
        </div>
        <div className="sidenav__line" />
        <div className="sidenav__items">
          <MdOutlineSettings size={20} />
          <p>setting</p>
        </div>
        <div className="sidenav__items">
          <MdOutlinedFlag size={20} />
          <p>report</p>
        </div>
        <div className="sidenav__items">
          <MdHelpOutline size={20} />
          <p>help</p>
        </div>
        <div
          className="sidenav__items"
          onClick={() => dispatch(toggleLightMode())}
        >
          <MdOutlineFeedback size={18} />
          <p>send feedback</p>
        </div>
      </div>
    </main>
  );
};

export default SideNavComp;
