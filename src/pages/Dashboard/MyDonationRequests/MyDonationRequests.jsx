import {  useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import MyDonationTable from "./MyDonationTable";


const MyDonationRequests = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure();
	const [request, setRequest] = useState([])
  

	useEffect( () => {
    const email = user.email;
    
		axiosSecure.get(`/user-donation-request/${email}`)
			.then(result => {
				setRequest(result.data);
			})
			.catch(err => {
				console.log(err);
			})
      
	}, [user, axiosSecure])
  
  

	const handleChange = async (e) => {
		e.preventDefault()
    const email = user.email;
		const temp = e.target.value
    console.log(temp);
    axiosSecure.get(`/user-donation-request/${email}`)
			.then(result => {
				setRequest(result.data);
			})
        const res2 = request.filter(item => item.status === temp)
				setRequest(res2);
        console.log(res2);
	}
  
    return (
        <div>
            <div>
            <div className="flex justify-between">
				<h2 className="text-2xl font-semibold">
					My Blood Donation Request
				</h2>

				<select onChange={handleChange} name="filter" className="bg-gray-50 border border-gray-300  rounded block p-2">
					<option defaultValue="">All Request</option>
					<option value="Pending">Pending</option>
					<option value="Inprogress">Inprogress</option>
					<option value="Done">Done</option>
					<option value="Canceled">Canceled</option>
				</select>
			</div>
            </div>

            <div className="bg-white mt-6">
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
    <tr>
									<th >Name</th>
									<th >Location</th>
									<th >Date</th>
									<th >Time</th>
									<th>donar info</th>
									<th >Status</th>
									<th>Action</th>
								</tr>
    </thead>
    {
      request.map(donationRequest => <MyDonationTable key={donationRequest._id} donationRequest={donationRequest} ></MyDonationTable>)
    }
  </table>
</div>
            </div>
        </div>
    );
};

export default MyDonationRequests;