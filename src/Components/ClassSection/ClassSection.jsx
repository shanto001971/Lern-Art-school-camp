import { useClass } from "../../Hooks/useClass";
import ClassCard from "./ClassCard";


const ClassSection = () => {
    const [classData] = useClass()

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-10">
            {
                classData.slice(0, 6).map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass} />)
            }

        </div>
    );
};

export default ClassSection;