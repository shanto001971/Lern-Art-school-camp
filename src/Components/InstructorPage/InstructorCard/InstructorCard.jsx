

const InstructorCard = ({ singleInstructor }) => {
    // console.log(singleInstructor)
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={singleInstructor.image} alt="instructor" className="w-full h-64"/></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {singleInstructor.name}</h2>
                <p>Email: {singleInstructor.email}</p>
                
            </div>
        </div>
    );
};

export default InstructorCard;