import "../../styles/comments.css";

const Comments: React.FC = () => {
  return (
    <div className="comments">
      <img
        className="comments__channel_thumbnail"
        src="https://yt3.ggpht.com/sEN6G64mvmzhcNqYgzwH3TvuwLqvEaHP-TxyUgbB2J_tQUPXzLHrdvRLItpUqIRVp70oHf_AtQ=s68-c-k-c0x00ffffff-no-rj"
        alt="avator-logo"
      />
      <div className="comments__description">
        <span className="comments__name">
          John Mayer
          <span className="comments__date">1 day ago</span>
        </span>
        <span className="comments__data">
          Pain is hard to withstand, but if you really want something, the pain
          you feel doesnt stop you, if you really want something, the only thing
          thats going to stop you from getting it is yourself
        </span>
      </div>
    </div>
  );
};

export default Comments;
