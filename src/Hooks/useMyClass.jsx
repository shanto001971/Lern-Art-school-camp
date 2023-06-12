import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";




const useMyClass = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: ClassCart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure(`/mySelectedClass?email=${user?.email}`)
            return res.data;
        },
    })

    // useEffect(() => {


    //     axiosSecure.get(`/mySelectedClass?email=${user?.email}`)
    //         .then(res => setClassCart(res.data))
    // }, [axiosSecure, user.email])



    return [ClassCart,refetch]
};

export default useMyClass;