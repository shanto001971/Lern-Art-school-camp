import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const ClassCard = ({ singleClass }) => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [isAdmin] = useAdmin();
    const [instructors] = useInstructor();
    
    const navigate = useNavigate();
    const location = useLocation();

    const handelAddToClass = (Item, isUser) => {
        console.log(Item)
        if (user && user.email) {
            const classItem = { ClassId: Item._id, email: isUser.email, price: Item.Price, image: Item.Image, name: Item.Name, InstructorName: Item.InstructorName }

            // fetch('https://summar-school-server-shanto001971.vercel.app/mySelectedClass', {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(classItem)
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.insertedId) {
            //             // refetch()
            //             Swal.fire({
            //                 position: 'top-center',
            //                 icon: 'success',
            //                 title: 'Added your Class',
            //                 showConfirmButton: false,
            //                 timer: 1500
            //             })
            //         } else {
            //             Swal.fire({
            //                 title: 'Please login to Select',
            //                 icon: 'warning',
            //                 showCancelButton: true,
            //                 confirmButtonColor: '#3085d6',
            //                 cancelButtonColor: '#d33',
            //                 confirmButtonText: 'Login now'
            //             }).then((result) => {
            //                 if (result.isConfirmed) {
            //                     navigate('/login', { state: { from: location } })
            //                 }
            //             })
            //         }

            //     })

            axiosSecure.post('/mySelectedClass', { classItem })
                .then(res => {
                    if (res.data.insertedId) {
                        // refetch()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Added your Class',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else {
                        Swal.fire({
                            title: 'Please login to Select',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Login now'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/login', { state: { from: location } })
                            }
                        })
                    }
                })



        }
    }




    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={singleClass?.Image} alt="Shoes" className="h-64" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-sans">{singleClass?.Name}</h2>
                <p className="text-2xl font-thin">Instructor: {singleClass?.InstructorName}</p>
                <p className="text-lg">Available Seats: {singleClass?.AvailableSeats}</p>
                <p className="text-lg">Price: ${singleClass?.Price}</p>
                <div className="card-actions justify-center">
                    <button disabled={singleClass.AvailableSeats === 0 || isAdmin || instructors} onClick={() => handelAddToClass(singleClass, user)} type="button" className="w-full text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Select</button>

                </div>
            </div>
        </div>
    );
};

export default ClassCard;