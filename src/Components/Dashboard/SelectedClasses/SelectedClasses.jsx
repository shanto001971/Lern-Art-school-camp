import { Link } from "react-router-dom";
import useMyClass from "../../../Hooks/useMyClass";
import SelectedClassRow from "./SelectedClassRow";


const SelectedClasses = () => {
    const [ClassCart, refetch] = useMyClass();
    // console.log(ClassCart)
    const total = ClassCart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className="">
            <div className="flex justify-around mb-4">
                <h1>Total Items {ClassCart.length}</h1>
                <h1>Total Price: ${total}</h1>
                <Link to='/dashboard/payment'><button className="btn btn-primary btn-xs">Pay</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ClassCart.map(singleItem=><SelectedClassRow key={singleItem._id} singleItem={singleItem}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;