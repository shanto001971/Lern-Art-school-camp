import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";


const useStudents = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [Students, setStudents] = useState([])
    // use axios secure with react query
    // const { data: isStudents =[], isLoading} = useQuery({
    //     queryKey: ['isStudents', user?.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/users/students/${user?.email}`);
    //         return res.data.instructors;
    //     }
    // })


    useEffect(() => {

        if (!!user?.email && !!localStorage.getItem('access-token')) {
            axiosSecure.get(`/users/students/${user?.email}`)
                .then(res => setStudents(res.data.students))
        }
    }, [axiosSecure, user.email])
    return [Students]
};

export default useStudents;