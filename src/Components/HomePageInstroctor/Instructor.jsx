import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import InstructorSectionCard from "./InstructorSectionCard/InstructorSectionCard";


const Instructor = () => {
    const [data, setData] = useState([])
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/instructor')
            .then(res => setData(res.data))
    }, [axiosSecure])

    return (
        <div className="text-center mt-24">
            <h1 className="uppercase text-3xl font-sans text-center">top 6 instructors</h1>
            <p className="text-xl font-thin">Whether working with beginners or advanced students,<br /> tailors their instruction to suit individual needs and learning styles.</p>
            <div className="grid lg:grid-cols-3 gap-4 m-10 mt-24">
                {
                    data.map(singleInstructor => <InstructorSectionCard key={singleInstructor._id} singleInstructor={singleInstructor} />)
                }
            </div>
        </div>
    );
};

export default Instructor;