import "../../styles/comment.css";
import Comments from "./Comments";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Comment: React.FC = () => {
  const isLight = useSelector((state: RootState) => state.theme.activeLight);
  return (
    <div className={`comment ${isLight && `comment__light`}`}>
      <div className="comment__actions">
        <img
          className="comment__channel_thumbnail"
          src="https://yt3.ggpht.com/sEN6G64mvmzhcNqYgzwH3TvuwLqvEaHP-TxyUgbB2J_tQUPXzLHrdvRLItpUqIRVp70oHf_AtQ=s68-c-k-c0x00ffffff-no-rj"
          alt="avator-logo"
        />
        <input
          className="comment__actions_input"
          type="text"
          placeholder="Add a comment..."
        />
      </div>
      <Comments />
      <Comments />
      <Comments />
      <Comments />
    </div>
  );
};

export default Comment;
