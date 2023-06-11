import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import MyClassCard from "./MyClassCard";




const MyClass = () => {
    const [data, setData] = useState([])
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/myAddClass?email=${user?.email}`)
            .then(res => {
                setData(res.data)

            })
    }, [axiosSecure, user.email])

    
    return (
        <>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Class Name</th>
                                <th>InstructorName</th>
                                <th>Status</th>
                                <th>Feedback</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(classItem => <MyClassCard key={classItem._id} classItem={classItem} />)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default MyClass;