import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const LastSection = () => {

    AOS.init({
       
        disable: false, 
        startEvent: 'DOMContentLoaded', 
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate', 
        useClassNames: false, 
        disableMutationObserver: false, 
        debounceDelay: 50, 
        throttleDelay: 99, 
        
      
        
        offset: 120,
        duration: 400, 
        easing: 'ease', 
        once: false, 
        mirror: false, 
        anchorPlacement: 'top-bottom', 
      
      });
    return (
        <div style={{
            backgroundImage: `url("https://cdn.shopify.com/s/files/1/0222/5930/files/country-kids-preschool-arts-crafts_4522c0c7-2bf1-4a9f-a9e3-d1db60cd3eb3_480x480.jpg?v=1656324220")`
        }} className="w-full bg-no-repeat  bg-cover lg:p-10 m-20  rounded-lg" >
            <h1 className="text-5xl font-sans mb-5" data-aos="fade-down"> Art and Craft School</h1>
            <p className="text-xl w-full" data-aos="fade-right">The Artisans Haven is an esteemed art and craft school <br /> 
            dedicated to fostering creativity and nurturing the artistic talents of individuals <br />
            </p>
            <NavLink to='/' className="w-28 mt-5 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center gap-2">Explore</NavLink>
        </div>
    );
};

export default LastSection;