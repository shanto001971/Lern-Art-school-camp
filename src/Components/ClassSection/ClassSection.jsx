import { useClass } from "../../Hooks/useClass";
import ClassCard from "./ClassCard";


const ClassSection = () => {
    const [classData] = useClass()
    
    return (
        <div className="grid lg:grid-cols-3 gap-5 m-10">
            {
                classData.map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass}/>)
            }
            
        </div>
    );
};

export default ClassSection;