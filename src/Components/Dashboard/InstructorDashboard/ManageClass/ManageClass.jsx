import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import ManageClassCard from "./ManageClassCard";


const ManageClass = () => {
    const [data, setData] = useState([])
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/class')
            .then(res => {
                setData(res.data)
            })
    }, [axiosSecure])

    return (
        <div className="grid grid-cols-2 gap-2">
            {
                data.map(singleCard => <ManageClassCard key={singleCard._id} singleCard={singleCard} />)
            }
        </div>
    );
};

export default ManageClass;