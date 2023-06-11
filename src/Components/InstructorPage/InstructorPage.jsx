import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import InstructorCard from "./InstructorCard/InstructorCard";


const InstructorPage = () => {
    const [data, setData] = useState([])
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/instructor')
            .then(res => setData(res.data))
    }, [axiosSecure])
// console.log(data)
    return (
        <div className="grid grid-cols-3 gap-3 m-10">
            {
                data.map(singleInstructor=><InstructorCard key={singleInstructor._id} singleInstructor={singleInstructor}/>)
            }
        </div>
    );
};

export default InstructorPage;