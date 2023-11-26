import {  Eye, Pencil, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Table = ({req}) => {

    // eslint-disable-next-line react/prop-types
    const {requesterName, requesterEmail, recipientName, hospitalName, recipientDistrict, recipientUpazila, fullAddress, donationDate, donationTime, message, status} = req


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
                        <p>will added</p>
                    </td>
                    <td className="p-3 text-right">
                        <p>{status}</p>
                    </td>
                    <td className="text-right">
                        <div className="flex justify-center items-center gap-4">
                            <button className="hover:text-green-500">
                                <Pencil size={24} />
                            </button>
                            <button className="hover:text-red-500">
                                <Trash size={24} />
                            </button>

                            <Link className="hover:text-red-500"><Eye size={24} /></Link>
                        </div>


                    </td>
                </tr>

            </tbody>
    );
};

export default Table;