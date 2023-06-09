import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import GoogleLogin from "../SocalLogIn/GoogleLogin";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";


const Login = () => {
    const [hide, setHide] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { singInUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const froms = location.state?.from?.pathname || "/";
    const handelLogin = (event) => {
       console.log(event)
       

        // const from = event.target;
        // const email = from.email.value;
        // const password = from.password.value;
        // console.log(email, password)
        singInUser(event.email, event.password)
            .then(result => {
                setUser(result.user);

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'successfully LogIn',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(froms, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }
   

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form onSubmit={handleSubmit(handelLogin)} className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" name="email" {...register("email")} placeholder="email" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex justify-center items-center ">
                                <input type={hide ? "text" : "password"} name="password" {...register("password")} placeholder="password" className="input input-bordered" />
                                <span className="absolute right-14" onClick={() => setHide(!hide)}>{hide ?<FaEye />:<FaEyeSlash />}</span>
                            </div>
                           
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p>New hare to  <Link to="/singup" className='link mt-2'>SingUp</Link></p>
                    </div>
                    <GoogleLogin />

                </form>
               

            </div>
        </div>
    );
};

export default Login;
