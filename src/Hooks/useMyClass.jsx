import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";


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



    return [ClassCart, refetch]
};

export default useMyClass;