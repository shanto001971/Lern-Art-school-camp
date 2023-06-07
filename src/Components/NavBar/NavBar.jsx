import { Link } from 'react-router-dom';

const NavBar = () => {

    const listItem = <>
    <div className="lg:flex gap-4">
    <Link><li>Home</li></Link>
    <Link><li>Class</li></Link>
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
                    <div className="">
                    <h1 className="btn btn-ghost normal-case text-xl">daisyUI</h1>
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
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;