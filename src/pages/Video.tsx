import "../styles/video.css";
import VideoComp from "../components/videoCard/VideoComp";

const VideoPage: React.FC = () => {
  return (
    <main className="video">
      <div className="video__content">
        <VideoComp />
      </div>
      <div className="video__recommendation">recommendation</div>
    </main>
  );
};

export default VideoPage;
