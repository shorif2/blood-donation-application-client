import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import BloodRequestCard from "./BloodRequestCard";


const BloodRequestPage = () => {

    const axiosSecure = useAxiosSecure();
	// const [filterData, setFilterData] = useState('');
	const [pendingRequests, setPendingRequests] = useState([])
    const request = "Pending"

	useEffect(() => {
		axiosSecure.get(`/pending-requests/${request}`)
			.then(result => {
				setPendingRequests(result.data);
                
			})
			.catch(err => {
				console.log(err);
			})
	}, [axiosSecure])
    console.log(pendingRequests);
    return (
        <div>
           <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
		<p className="p-2 text-sm font-medium tracki text-center uppercase">Development team</p>
		<h1 className="text-4xl font-bold leadi text-center sm:text-5xl">The talented people behind the scenes</h1>


		<div className="grid grid-cols-4 justify-center gap-6  mt-20">
        
			{
                pendingRequests?.map(pendingReq => <BloodRequestCard key={pendingReq._id} pendingReq={pendingReq}></BloodRequestCard>)
            }
		</div>
	</div>
</section>
        </div>
    );
};

export default BloodRequestPage;