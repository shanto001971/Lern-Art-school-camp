import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaWallet,FaHome } from 'react-icons/fa';

const Dashboard = () => {
    const isAdmin = false;
    const isInstructors = true;
    const isStudents = false
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {
                        isAdmin && <>
                            <li><NavLink to='/dashboard/'>Manage Classe</NavLink></li>
                            <NavLink to='/dashboard/'><li>Manage Users</li></NavLink>
                            <li><a>Sidebar Item 2</a></li>
                        </>
                    }
                    {
                        isInstructors &&
                        <>
                            <NavLink to='/dashboard/addClass' className='px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans'><li>Add a Class</li></NavLink>
                            <NavLink to='/dashboard/myClass' className='px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans' ><li>My Classes</li></NavLink>
                        </>
                    }

                    {
                     isStudents&&   
                        <>
                       
                           

                            <Link to='/' className='px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans flex items-center gap-1' > <FaHome/><li>Home</li></Link>
                            <Link to='/dashboard/selectedClasses' className='px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans' ><li>My Selected Classes</li></Link>
                            <NavLink to='/dashboard/' className='px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans'><li>My Enrolled Classes</li></NavLink>
                            <NavLink to='/dashboard/' className='px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans flex items-end gap-1 '><FaWallet/><li> Payment</li></NavLink>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;