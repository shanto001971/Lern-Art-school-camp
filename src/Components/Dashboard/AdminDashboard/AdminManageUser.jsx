import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const AdminManageUser = () => {
    const [data, setData] = useState([])
    //     const {user}=useAuth()

    //     const { data: classItem = [], isLoading: loading , refetch} = useQuery({
    //         queryKey: ['user'],
    //         queryFn: async () => {
    //             const res = await fetch(`https://summar-school-server-shanto001971.vercel.appuser?email=${user.email}`)
    //             return res.json();
    //         }

    //     });
    // console.log(classItem)

    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/user')
            .then(res => {
                setData(res.data)
            })
    }, [axiosSecure])

    const handelRoleUpdate = (role, id) => {
        console.log(role, id)
        axiosSecure.patch(`/updateRole/admin/${id}`, { role })
            .then(res => {
                console.log(res.data)
                if (res?.data?.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Admin Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((singleUser, index) => <tr key={singleUser._id}>
                            <th>{index + 1}</th>
                            <td>{singleUser?.name}</td>
                            <td className="btn btn-xs bg-blue-400 flex">{singleUser?.role}</td>
                            <td>{singleUser?.email}</td>
                            <button disabled={singleUser.role == 'instructor'} className="btn btn-xs" onClick={() => handelRoleUpdate('instructor', singleUser._id)}>Make instructor</button>
                            <button disabled={singleUser.role == 'admin'} className="btn btn-xs ml-2" onClick={() => handelRoleUpdate('admin', singleUser._id)}>Make Admin</button>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdminManageUser;