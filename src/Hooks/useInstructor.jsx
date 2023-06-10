import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";



const useInstructor = () => {
    const [instructors, seInstructors] = useState({})
    console.log(instructors)
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/users/instructors/${user?.email}`)
            .then(res => seInstructors(res.data.instructor))
    }, [axiosSecure,user.email])
    return [instructors]
    


};

export default useInstructor;