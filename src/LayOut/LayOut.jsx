import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const LayOut = () => {
    const { btnToggle } = useContext(AuthContext);
    return (
        <div data-theme={btnToggle ? "light" : "dark"}>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default LayOut;