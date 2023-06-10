

const ManageClassCard = ({ singleCard }) => {
    console.log(singleCard)
    
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={singleCard?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{singleCard?.className}</h2>
                <p>{singleCard?.InstructorName}</p>
                <p>{singleCard?.email}</p>
                <p>{singleCard?.AvailableSeats}</p>
                <p>price: ${singleCard?.price}</p>
                <p className="bg-green-300 w-20 p-1 text-center rounded-lg">{singleCard?.status}</p>
                <div className=" flex justify-around gap-3">
                    <button className="btn btn-primary btn-xs"> Approve</button>
                    <button className="btn btn-primary btn-xs">Deny</button>
                    <button className="btn btn-primary btn-xs">feedback</button>
                </div>
            </div>
        </div>
    );
};

export default ManageClassCard;