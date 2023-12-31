import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaWallet, FaHome, FaUserEdit, FaMinus, FaBook, FaCheckCircle, FaAddressBook, FaAlignCenter} from 'react-icons/fa';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import useStudents from '../../Hooks/useStudents';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [Students] = useStudents();
    const [instructors] = useInstructor();

    console.log('student', Students)
    console.log('ins', instructors)



    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {
                        isAdmin &&
                        <>
                            <li><Link to='/'><FaHome />Home</Link></li>
                            <h1 className='text-2xl m-4'>Admin Dashboard</h1>
                            <li><NavLink to='/dashboard/manageClass'><FaMinus /> Manage Classe</NavLink></li>
                            <li><NavLink to='/dashboard/manageUser'><FaUserEdit /> Manage Users</NavLink></li>

                        </>
                    }
                    {
                        instructors &&
                        <>
                            <li><Link to='/'><FaHome />Home</Link></li>
                            <h1 className='text-2xl m-4'>Instructors Dashboard</h1>
                            <NavLink to='/dashboard/addClass' className=' px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans flex items-center gap-2'><FaAddressBook/> <li>Add a Class</li></NavLink>
                            <NavLink to='/dashboard/myClass' className='px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans flex items-center gap-2' ><FaAlignCenter/>  <li>My Classes</li></NavLink>
                        </>
                    }

                    {
                        Students &&
                        <>
                            <h1 className='text-2xl m-4'>Students Dashboard</h1>
                            <Link to='/' className='px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans flex items-center gap-1' > <FaHome /><li>Home</li></Link>
                            <Link to='/dashboard/selectedClasses' className='px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans flex items-center gap-2' ><FaCheckCircle/>  <li>My Selected Classes</li></Link>
                            <NavLink to='/dashboard/' className='px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans flex items-center gap-2'><FaBook/> <li>My Enrolled Classes</li></NavLink>
                            <NavLink to='/dashboard/PaymentHistory' className='px-5 py-2 bg-slate-400 rounded-lg mt-1 text-xl font-sans flex items-center gap-2'><FaWallet/>  <li> Payment History</li></NavLink>
                           
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;