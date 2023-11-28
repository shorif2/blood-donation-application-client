import {  Eye, Pencil, Trash } from "@phosphor-icons/react";

import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const Table = ({req}) => {
    const axiosSecure = useAxiosSecure()

    // eslint-disable-next-line react/prop-types
    const {_id, requesterName, requesterEmail, recipientName, hospitalName, recipientDistrict, recipientUpazila, fullAddress, donationDate, donationTime, message, status, donarInfo} = req

    const handleDelete = (id)=>{
        console.log(id);
        axiosSecure.delete(`/donation-requests/${id}`)
        .then(() =>{
            toast.success('Delete Success')
        })
        .catch(error =>{
            console.log(error);
        })

    }

    return (
            <tbody className="overscroll-auto">
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="p-3">
                        <p>{requesterName}</p>
                    </td>
                    <td className="p-3">
                        <p>{recipientDistrict},{recipientUpazila}</p>
                    </td>
                    <td className="p-3">
                        <p>{donationDate}</p>
                        
                    </td>
                    <td className="p-3">
                    <p className="dark:text-gray-400">{donationTime} PM</p>
                    </td>
                    <td className="p-3 text-right">

                        {
                            donarInfo? <div className="flex flex-col"><p>{donarInfo?.donarName}</p> <p>{donarInfo?.donarEmail}</p></div>: '----'
                        }
                    
                    </td>
                    <td className="p-3 text-right">
                        <p>{status}</p>
                    </td>
                    <td className="text-right">


                        <div className="flex justify-center items-center gap-4">
                            <Link to={`/dashboard/update-donation-request/${_id}`} 
                            className="hover:text-green-500">
                                <Pencil size={24}/>
                            </Link>


                            <button onClick={()=>handleDelete(_id)} className="hover:text-red-500">
                                <Trash size={24} />
                            </button>

                            <Link to={`/blood-donation-details/${_id}`}className="hover:text-red-500"><Eye size={24} /></Link>
                        </div>


                    </td>
                </tr>

            </tbody>
    );
};

export default Table;