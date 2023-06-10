import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";



const SingUp = () => {
    const [err, setErr] = useState('')
    const { createUser, setUser, updateProfileUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate()


    const submit = data => {
        console.log(data);
        createUser(data?.email, data?.password)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
                const user = { name: data.name, email: data.email, role: 'students' }
                updateProfileUser(data.name, data.photoUrl)
                    .then(() => {
                        axiosSecure.post('/user', user)
                            .then(res => {

                                if (res.data.insertedId) {

                                    Swal.fire(
                                        'Good job!',
                                        'SingIn Successfully',
                                        'success'
                                    )
                                }
                                navigate('/')
                            })
                    })
                    .catch(() => { })
            })
            .catch(err => {
                setErr(err.message)
            })
    };


    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sing Up!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(submit)} className="">
                        <div className="form-control">

                            <input type="text" {...register("name")} name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" {...register("photoUrl")} placeholder="PhotoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" {...register("email")} name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,

                            })}
                                name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'minLength' && <span>password mast be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span>password under be 20 characters</span>}
                        </div>
                        <div className="form-control">
                            <input type="text" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,

                            })}
                                name="password" placeholder="Confirmpassword" className="input input-bordered" />
                            {errors.password?.type === 'minLength' && <span>password mast be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span>password under be 20 characters</span>}
                        </div>
                        <div className="form-control">
                            <button type="submit" className="btn btn-primary">SingUp</button>
                        </div>

                    </form>
                    <p>{err}</p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;