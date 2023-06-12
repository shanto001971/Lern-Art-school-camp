
import ClassSection from "../ClassSection/ClassSection";
import Instructor from "../HomePageInstroctor/Instructor";
import BannerSlider from "../Page/Slider/BannerSlider";
import LastSection from "../Section/LastSection";




const Home = () => {
    return (
        <div >
            <BannerSlider />
            <ClassSection />
            <Instructor />
            <LastSection />
        </div>
    );
};

export default Home;