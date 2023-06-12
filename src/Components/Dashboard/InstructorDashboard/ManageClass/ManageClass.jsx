import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import ManageClassCard from "./ManageClassCard";
import { useQuery } from "@tanstack/react-query";




const ManageClass = () => {
    const [data, setData] = useState([])
    const [axiosSecure] = useAxiosSecure()
    // const [id, setId] = useState();
    // console.log(id)
    useEffect(() => {
        axiosSecure.get('/class')
            .then(res => {
                setData(res.data)
            })
    }, [axiosSecure])

    // const { data: data, refetch } = useQuery({
    //     queryKey: ['data'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://summar-school-server-shanto001971.vercel.app/class`)
    //         const data = await res.json();
    //         setData(data);
    //         return data;
    //     }
    // })



    return (
        <div className="grid grid-cols-2 gap-2">
            {
                data.map(singleCard => <ManageClassCard key={singleCard._id} singleCard={singleCard}  />)
            }
        </div>
    );
};

export default ManageClass;