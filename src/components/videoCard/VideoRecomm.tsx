import "../../styles/videoRecomm.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const VideoRecomm: React.FC = () => {
  const isLight = useSelector((state: RootState) => state.theme.activeLight);
  return (
    <div className="Rec__card">
      <img
        src="https://i.ytimg.com/vi/Kgzs0wuLpyI/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEcoNDAP&rs=AOn4CLCJCivtO66GrYQE_YTsd1ua8yOqqA"
        alt="img"
        className="Rec__thumbnail"
      />
      <div className="Rec__details">
        <div
          className={`Rec__details_about ${
            isLight && `Rec__details_about_light`
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
  );
};

export default VideoRecomm;
