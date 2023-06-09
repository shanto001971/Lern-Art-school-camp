import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const isAdmin = false;
    const isInstructors = false;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
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
                            <NavLink to='/dashboard/'><li>Add a Class</li></NavLink>
                            <NavLink to='/dashboard/'><li>My Classes</li></NavLink>
                        </>
                    }

                    {
                        
                        <>
                       
                            <li><a>Students </a></li>

                            <Link to='/dashboard/selectedClasses'><li>My Selected Classes</li></Link>
                            <NavLink to='/dashboard/'><li>My Enrolled Classes</li></NavLink>
                            <NavLink to='/dashboard/'><li>Payment</li></NavLink>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;