import { Link } from "react-router-dom";


const BloodRequestCard = ({pendingReq}) => {

    const  {_id, recipientName, hospitalName, donationTime, donationDate } = pendingReq;
    return (
            <div className="flex flex-col border rounded-lg shadow justify-center w-full px-6 mx-2">
				<div className="my-4">
					<p className="text-xl font-semibold">{recipientName}</p>
					<p>Donation Date: {donationTime} {donationDate}</p>
					<p>{hospitalName}</p>
				</div>
				<div className="flex items-center justify-center p-3  border-t-2">
					<Link to={`/blood-donation-details/${_id}`} className="border p-2 rounded shadow">View Request</Link >
				</div>
			</div>
       
    );
};

export default BloodRequestCard;