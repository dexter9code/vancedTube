import "../styles/home.css";
import VideoCard from "./../components/videoCard/VIdeoCard";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const HomePage: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.activeLight);
  return (
    <main className="home">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </main>
  );
};

export default HomePage;
