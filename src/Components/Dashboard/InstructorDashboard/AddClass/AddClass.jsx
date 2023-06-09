import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { register, handleSubmit,reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const submit = (data) => {
        console.log(data.image[0])

        const formImage = new FormData();
        formImage.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formImage
        })
            .then(res => res.json())
            .then(Response => {
                if (Response.success) {
                    console.log(Response)
                    const imageURl = Response.data.display_url
                    const newClassItem = { className: data?.className, image: imageURl,InstructorName:data.InstructorName, email:user.email,availableSeats:data.AvailableSeats,status:data.status,  price: parseFloat(data.price)}

                    axiosSecure.post('/addClass', newClassItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire(
                                    'Good job!',
                                    'Added successfully',
                                    'success'
                                )
                            }
                        })
                }

            })
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="lg:flex gap-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Name name?</span>
                    </label>
                    <input type="text" {...register("className")} placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Pick a Image</span>
                    </label>
                    <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-xs" required/>
                </div>
            </div>
            <div className="lg:flex gap-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> your name?</span>
                    </label>
                    <input type="text" {...register("InstructorName")} placeholder="Type here" defaultValue={user.displayName} className="input input-bordered w-full max-w-xs" readOnly required/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="text" {...register("InstructorEmail")} placeholder="Type here" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly  required/>
                </div>
            </div>
            <div className="lg:flex gap-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="text" {...register("availableSeats")} placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" {...register("price")} placeholder="Type here" className="input input-bordered w-full max-w-xs" readOnly/>
                </div>

            </div>
            <div className="form-control w-full">


                <input type="text" {...register("status")} defaultValue='pending' placeholder="status will be pending" className="input input-bordered w-full" readOnly />
            </div>
            <button type="submit" className="w-full text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Class</button>
        </form>
    );
};

export default AddClass;