

const ClassCard = ({singleClass}) => {
    console.log(singleClass)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={singleClass?.Image} alt="Shoes" className="h-64"/></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-sans">{singleClass?.Name}</h2>
                <p className="text-2xl font-thin">Instructor Name: {singleClass?.InstructorName}</p>
                <p className="text-lg">Available Seats: {singleClass?.AvailableSeats}</p>
                <p className="text-lg">Price: ${singleClass?.Price}</p>
                <div className="card-actions justify-center">
                <button type="button" className="w-full text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Select</button>
                    
                </div>
            </div>
        </div>
    );
};

export default ClassCard;