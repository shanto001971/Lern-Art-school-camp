import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaRegWindowClose } from "react-icons/fa";


const AddFeedback = ({singleCard }) => {
    console.log(singleCard._id)
    const { register, handleSubmit } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const handelFeedBack = (data) => {
        const feedback = data.feedback;
        axiosSecure.patch(`/feedback/admin/${singleCard._id}`, { feedback })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'send feedback',
                        'success'
                    )
                    // refetch()
                }

            })



    }
    return (
        <div>
              <input type="checkbox" id={`my_modal_${singleCard._id}`} className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit(handelFeedBack)} className="modal-box">
                    <h3 className="font-bold text-lg">feedback</h3>
                    <textarea className="textarea textarea-info w-full" {...register("feedback")} name='feedback' placeholder="feedback"></textarea>
                    <div className="modal-action flex items-center">
                        <button>send feedback </button>
                        <label htmlFor={`my_modal_${singleCard._id}`} className="btn"><FaRegWindowClose /></label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFeedback;