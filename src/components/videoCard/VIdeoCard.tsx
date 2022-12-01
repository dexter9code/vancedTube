import "../../styles/videCard.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

const VideoCard: React.FC = () => {
  const isLight = useSelector((state: RootState) => state.theme.activeLight);
  return (
    <Link to={`/video`} style={{ textDecoration: "none" }}>
      <div className="card">
        <img
          src="https://i.ytimg.com/vi/Kgzs0wuLpyI/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEcoNDAP&rs=AOn4CLCJCivtO66GrYQE_YTsd1ua8yOqqA"
          alt="img"
          className="card__thumbnail"
        />
        <div className="card__details">
          <img
            src="https://yt3.ggpht.com/sEN6G64mvmzhcNqYgzwH3TvuwLqvEaHP-TxyUgbB2J_tQUPXzLHrdvRLItpUqIRVp70oHf_AtQ=s68-c-k-c0x00ffffff-no-rj"
            alt="channel-logo"
            className="channel__thumbnail"
          />
          <div
            className={`card__details_about ${
              isLight && `card__details_about_light`
            }`}
          >
            <h1>lofi chill beats</h1>
            <h2>Mimi Lofi</h2>
            <p>
              45k views <span>●</span> 1 day ago
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
