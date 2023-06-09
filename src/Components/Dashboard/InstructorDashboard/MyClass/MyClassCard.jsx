

const MyClassCard = ({ classItem }) => {
    console.log(classItem)
    return (
        <tr>
                        
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={classItem?.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{classItem.className}</div>
                    
                </div>
            </div>
        </td>
        <td>
           {
            classItem.InstructorName
           }
            
        </td>
        <td className="btn btn-ghost btn-xs mt-5 text-red-400">{classItem.status}</td>
        <th>
            <button className="btn btn-ghost btn-xs">Update</button>
        </th>
    </tr>
    );
};

export default MyClassCard;