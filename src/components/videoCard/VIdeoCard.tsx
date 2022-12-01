import "../../styles/videCard.css";

const VideoCard: React.FC = () => {
  return (
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
        <div className="card__details_about">
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

export default VideoCard;
