import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import AboutUsContainer from "../components/about-us-section/AboutUsContainer";
import {GoAlertFill} from "react-icons/go";
import GoalsSection from "../components/goals-section/GoalsSection";

const Home = () => {
    return (
        <main>
            <Header />
            <Banner />
            <AboutUsContainer />
            <GoalsSection />
        </main>
    )
};

export default Home;
