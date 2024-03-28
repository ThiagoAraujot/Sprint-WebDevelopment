import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Public from "../../components/Public/Public.jsx";
import Problem from "../../components/Problem/Problem.jsx";
import Negatives from "../../components/Negatives/Negatives.jsx";
import Gamification from "../../components/Gamification/Gamification.jsx";
import Positives from "../../components/Positives/Positives.jsx";
import Objective from "../../components/Objective/Objective.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Public />
      <Problem />
      <Negatives />
      <Gamification />
      <Objective />
      <Positives />
      <Footer />
    </>
  );
}

export default Home;
