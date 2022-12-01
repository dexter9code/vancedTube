import "../styles/video.css";
import VideoComp from "../components/videoCard/VideoComp";
import VideoRecomm from "../components/videoCard/VideoRecomm";
import Comment from "../components/comments/Comment";

const VideoPage: React.FC = () => {
  return (
    <main className="video">
      <div className="video__content">
        <VideoComp />
        <Comment />
      </div>
      <div className="video__recommendation">
        <VideoRecomm />
      </div>
    </main>
  );
};

export default VideoPage;
