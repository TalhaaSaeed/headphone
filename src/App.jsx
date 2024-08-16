import NavBar from "../src/components/NavBar/NavBar";
import Hero from "../src/components/Hero/Hero";
import Services from "./components/Services/Services";
import { UpdateFollower } from "react-mouse-follower";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          <NavBar />
          <Hero />
        </UpdateFollower>
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "black",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          <Services />
        </UpdateFollower>
        <Banner />
        <BannerText />
        <Blogs />
        <Footer />
      </main>
    </>
  );
};

export default App;
