import {  useEffect, useState } from "react";


import MyDonationTable from "../../pages/Dashboard/MyDonationRequests/MyDonationTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
// import MyDonationTable from "./MyDonationTable";

const DonarDashboard = () => {
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
	}


    return (
        <div className="mt-6">
            
            <div className="mb-6 ">
            <div className="bg-white">
            <div className="flex justify-between py-6 px-4">
				<h2 className="text-2xl font-semibold">
					Recently Donation Request
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
        <div className="flex justify-center mb-6">
        {
			request.length === 0 ? <>
			<div className="h-[200px] w-full flex justify-center items-center bg-white py-6">
				<p className="text-2xl font-semibold text-center"> You have Not Create Donation <br /> Request Yet</p>
			</div>
			</>:
			<>
			<Link to='/dashboard/my-donation-requests' className="btn btn-outline">See More</Link >
			</>
		}
        </div>
        </div>
    );
};

export default DonarDashboard;