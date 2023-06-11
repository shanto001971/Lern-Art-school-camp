

const InstructorSectionCard = ({ singleInstructor }) => {
    // console.log(singleInstructor)
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={singleInstructor.image} alt="instructor" className="w-full h-64"/></figure>
            <div className="card-body">
                <h2 className="card-title">{singleInstructor.name}</h2>
                <p className="text-left">{singleInstructor.email}</p>
                
            </div>
        </div>
    );
};

export default InstructorSectionCard;