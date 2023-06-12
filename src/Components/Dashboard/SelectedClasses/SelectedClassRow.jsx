import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const SelectedClassRow = ({ singleItem, refetch }) => {


    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/mySelectedClass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={singleItem.image} alt="" className="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{singleItem?.name}</div>

                    </div>
                </div>
            </td>
            <td>
                InstructorName: {singleItem.InstructorName}
            </td>
            <td>{singleItem.price}</td>
            <th className="flex gap-3">
                <Link to='/dashboard/payment'><button className="btn btn-primary btn-xs">Pay</button></Link>
                <button onClick={() => handelDelete(singleItem._id)} className="btn btn-ghost btn-xs">Remove</button>
            </th>
        </tr>
    );
};

export default SelectedClassRow;