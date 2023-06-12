import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaFileExport, FaFileImport } from 'react-icons/fa';
import { LuSunMoon } from 'react-icons/lu';
import { IoMdMoon } from 'react-icons/io';



const NavBar = () => {
    const { user, LogOutUser,setBtnToggle } = useContext(AuthContext);
    const [toggle, setToggle] = useState(true);
    setBtnToggle(toggle)
    const logOut = () => {
        LogOutUser()
            .then((result) => {
                console.log(result)
            })
            .catch(() => { })
    }

    const listItem = <>
        <div className="lg:flex gap-4">
            <Link to='/'><li>Home</li></Link>
            <Link to='/class'><li>Classes</li></Link>
            <Link to='/instructor'><li>Instructors</li></Link>
            {user && <Link to='/dashboard'><li>Dashboard</li></Link>}
        </div>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            listItem
                        }
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img src="https://www.pngkey.com/png/full/69-692033_art-craft-logo-arts-and-crafts-logo-png.png" alt="" className='w-16 ' />
                    <h1 className="btn btn-ghost normal-case text-xl lg:block hidden">Learn Art<span className='text-2xl font-thin'>&</span>craft</h1>
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
                <div className="m-10 w-10">
                    {
                        toggle ? <h1  onClick={()=>setToggle(!toggle)}><LuSunMoon className='w-10  lg:block hidden'></LuSunMoon></h1 > : <h1 onClick={()=>setToggle(!toggle)}><IoMdMoon className='w-10' /></h1>
                    }
                </div>
                {
                    user && <img src={user.photoURL} alt="" className='rounded-full w-10 mr-3' />
                }
                {
                    user ?
                        <NavLink onClick={logOut} className=" text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center gap-2">LogOut <FaFileExport className='' /></NavLink>
                        :
                        <NavLink to='/login' className=" text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center gap-2">LogIn <FaFileImport /></NavLink>
                }
            </div>
        </div>
    );
};

export default NavBar;