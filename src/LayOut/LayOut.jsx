import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';


const LayOut = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default LayOut;