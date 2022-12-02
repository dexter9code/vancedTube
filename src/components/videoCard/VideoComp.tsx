import "../../styles/videoComp.css";
import { BiLike, BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineDownload, MdPlaylistAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const VideoComp: React.FC = () => {
  const isLight = useSelector((state: RootState) => state.theme.activeLight);
  return (
    <>
      <div className={`video__content_video`}>
        <iframe
          src="https://www.youtube.com/embed/940zkaSoXFE"
          width={"100%"}
          height="720"
          style={{ border: 0 }}
          title="Youtube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h1
        className={`video__content_title ${
          isLight && `video__content_title_light`
        }`}
      >
        video-title
      </h1>
      <div className={`video__details ${isLight && `video__details_light`}`}>
        <div className="channel__info">
          <img
            className="channel__thumbnail"
            src="https://yt3.ggpht.com/sEN6G64mvmzhcNqYgzwH3TvuwLqvEaHP-TxyUgbB2J_tQUPXzLHrdvRLItpUqIRVp70oHf_AtQ=s68-c-k-c0x00ffffff-no-rj"
            alt="channel__icon"
          />
          <div className="channel__data">
            <div className="channel__name">lofi beats</div>
            <div className="channel__sub">455k subscribers</div>
          </div>
          <button className="channel__sub_btn">subscribe</button>
        </div>
        <div className="video__buttons">
          <div className="video__button">
            <BiLike size={20} /> like{" "}
          </div>
          <div className="video__button">
            <BiDislike size={20} />
            dislike
          </div>
          <div className="video__button">
            <RiShareForwardLine size={20} />
            share
          </div>
          <div className="video__button">
            <MdOutlineDownload size={20} />
            download
          </div>
          <div className="video__button">
            <MdPlaylistAdd size={20} />
            save
          </div>
        </div>
      </div>
      <div className="video__line" />
      <div
        className={`video__description ${
          isLight && `video__description_light`
        }`}
      >
        “Studying whether there’s life on Mars or studying how the universe
        began, there’s something magical about pushing back the frontiers of
        knowledge. That’s something that is almost part of being human, and I’m
        certain that will continue.” – Sally Ride Thank you all for watching and
        enjoying this compilation of lo-fi music!! Wish you happy time when
        listening ❤️️❤️️❤️️ If you like the video please subscribe and help us
        grow. Thank you so muchhh!!{" "}
      </div>
    </>
  );
};

export default VideoComp;
