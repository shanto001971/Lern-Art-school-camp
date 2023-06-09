import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {

    const { googleLogin, setUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const froms = location.state?.from?.pathname || "/";

    const handelGoogleLogIn = () => {
        googleLogin()
            .then((result) => {
                setUser(result.user)
                navigate(froms, { replace: true });
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center p-5">
                <button onClick={handelGoogleLogIn} className="btn btn-circle btn-outline">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;