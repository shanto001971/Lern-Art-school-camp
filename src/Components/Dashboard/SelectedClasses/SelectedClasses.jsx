
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
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>InstructorName</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ClassCart.map(singleItem=><SelectedClassRow key={singleItem._id} singleItem={singleItem} refetch={refetch} price={total}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;