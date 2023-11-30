import { Eye, Pencil, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const MyDonationTable = ({donationRequest}) => {

    const axiosSecure = useAxiosSecure()

    const {_id, requesterName, recipientDistrict, recipientUpazila, donationDate, donationTime, status, donarInfo} = donationRequest


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
        <tbody>
                <tr >
                    <td >
                        <p>{requesterName}</p>
                    </td>
                    <td >
                        <p>{recipientDistrict},{recipientUpazila}</p>
                    </td>
                    <td >
                        <p>{donationDate}</p>
                        
                    </td>
                    <td >
                    <p >{donationTime} PM</p>
                    </td>
                    <td >
                        <p>{donarInfo? <>
                        <div>
                        <p>{donarInfo?.donarName}</p>
                        <p>{donarInfo?.donarEmail}</p>
                        </div>
                        </>: 'No One Donate yet'}</p>
                    </td>
                    <td >
                        <p>{status}</p>
                    </td>
                    <td >


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

export default MyDonationTable;