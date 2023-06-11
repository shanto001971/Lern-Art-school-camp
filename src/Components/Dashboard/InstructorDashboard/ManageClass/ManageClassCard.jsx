
// import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
// import { FaRegWindowClose } from "react-icons/fa";
// import { useForm } from "react-hook-form";
import { useState } from "react";
import AddFeedback from "./AddFeedback";




const ManageClassCard = ({ singleCard, refetch}) => {
    // const [id ,setId]=useState('')

    console.log(singleCard)
    const [axiosSecure] = useAxiosSecure()
    // const { register, handleSubmit } = useForm();

    const handelStatus = (status) => {
        // console.log(status)
        axiosSecure.patch(`/updateClassStatus/admin/${singleCard._id}`, { status })
            .then(res => {
                console.log(res.data)
            })
    }
    // console.log(id)
    // const handelFeedBack = (data) => {


    //     const feedback = data.feedback;
    //     console.log(singleCard._id)
    //     axiosSecure.patch(`/feedback/admin/${id}`, { feedback })
    //         .then(res => {
    //             console.log(res.data)
    //             if (res.data.modifiedCount > 0) {
    //                 Swal.fire(
    //                     'Good job!',
    //                     'send feedback',
    //                     'success'
    //                 )
    //             }

    //         })



    // }

    


    return (
        <div className="">
            <AddFeedback
                key={singleCard._id}
                singleCard={singleCard}
            ></AddFeedback>
            {/* <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit(handelFeedBack)} className="modal-box">
                    <h3 className="font-bold text-lg">feedback</h3>
                    <textarea className="textarea textarea-info w-full" {...register("feedback")} name='feedback' placeholder="feedback"></textarea>
                    <div className="modal-action flex items-center">
                        <button>send feedback </button>
                        <label htmlFor="my_modal_6" className="btn"><FaRegWindowClose /></label>
                    </div>
                </form>
            </div> */}


            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={singleCard?.image} alt="Shoes" className="h-40 w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">className: {singleCard?.className}</h2>
                    <p>InstructorName: {singleCard?.InstructorName}</p>
                    <p>Email: {singleCard?.email}</p>
                    <p>AvailableSeats:  {singleCard?.AvailableSeats}</p>
                    <p>price: ${singleCard?.price}</p>
                    <p className={singleCard.feedback === "denied" ? "bg-red-300 w-20 p-1 text-center rounded-lg" : 'bg-green-300 w-20 p-1 text-center rounded-lg'}>{singleCard?.status}</p>
                    <div className=" flex justify-around gap-3">
                        <button onClick={() => handelStatus('Approve')} disabled={singleCard?.status == 'Approve' || singleCard?.status == 'denied'} className="btn btn-primary btn-xs"> Approve</button>
                        <button onClick={() => handelStatus('denied')} disabled={singleCard?.status == 'Approve' || singleCard?.status == 'denied'} className="btn btn-primary btn-xs">Deny</button>
                        <label  disabled={singleCard.feedback} htmlFor="my_modal_6" className="btn btn-xs bg-green-300">feedback</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageClassCard;