import NavbarComp from "../components/sideNav/NavbarComp";
import SideNavComp from "../components/sideNav/SideNavComp";
import "../styles/home.css";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <SideNavComp />
      <main className="home__main">
        <NavbarComp />
        <div>video card</div>
      </main>
      <h1>e</h1>
    </div>
  );
};

export default HomePage;
