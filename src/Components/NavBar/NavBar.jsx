import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from "../../AuthProvider/AuthProvider";


const NavBar = () => {
    const {user,LogOutUser}=useContext(AuthContext);
    // console.log(user)
    const logOut =()=>{
        LogOutUser()
        .then((result)=>{
            console.log(result)
        })
        .catch(()=>{})
    }

    const listItem = <>
    <div className="lg:flex gap-4">
    <Link><li>Home</li></Link>
    <Link><li>Class</li></Link>
    {user&&<Link to='/dashboard'><li>Dashboard</li></Link>}
    </div>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           {
                            listItem
                           }
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="https://www.pngkey.com/png/full/69-692033_art-craft-logo-arts-and-crafts-logo-png.png" alt="" className='w-16' />
                    <h1 className="btn btn-ghost normal-case text-xl">Learn Art<span className='text-2xl font-thin'>&</span>craft</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {
                        listItem
                       }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user&& <img src={user.photoURL} alt="" className='rounded-full w-10 mr-3'/>
                    }
                    {
                        user?<button onClick={logOut}><NavLink className="w-24 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">LogOut</NavLink></button>:<NavLink to='/login' className="w-24 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">LogIn</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;