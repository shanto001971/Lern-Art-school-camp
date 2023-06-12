
import ClassSection from "../ClassSection/ClassSection";
import Instructor from "../HomePageInstroctor/Instructor";
import BannerSlider from "../Page/Slider/BannerSlider";




const Home = () => {
    return (
        <div >
            <BannerSlider />
            <ClassSection />
            <Instructor />
        </div>
    );
};

export default Home;