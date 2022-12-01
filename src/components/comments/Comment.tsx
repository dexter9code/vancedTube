import "../../styles/comment.css";
import Comments from "./Comments";

const Comment: React.FC = () => {
  return (
    <div className="comment">
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
