import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure()
    const [data, setData] = useState([])

    axiosSecure.get('/PaymentHistory')
        .then(res => setData(res.data))

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>transactionId</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((payData, i) => <tr key={payData._id}>
                                <th>{i+1}</th>
                                <td>Email : {payData.email}</td>
                                <td>{payData.transactionId}</td>
                                <td>Price: {payData.price}</td>
                                <td>{payData.date}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;