import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";


const AddClass = () => {
    const {user}=useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit =(data)=>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="lg:flex gap-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Name name?</span>
                    </label>
                    <input type="text" {...register("className")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Pick a Image</span>
                    </label>
                    <input {...register("File")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div className="lg:flex gap-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> your name?</span>
                    </label>
                    <input type="text" {...register("InstructorName")} placeholder="Type here" defaultValue={user.displayName} className="input input-bordered w-full max-w-xs" readOnly />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="text" {...register("InstructorEmail")} placeholder="Type here" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly/>
                </div>
            </div>
            <div className="lg:flex gap-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="text" {...register("AvailableSeats")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" {...register("price")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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