
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Cube, Eye, Pencil, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Table from "./components/Table";




const AllDonationRequest = () => {
	const axiosSecure = useAxiosSecure();
	const [filterData, setFilterData] = useState('');
	const [request, setRequest] = useState([])

	useEffect(() => {
		axiosSecure.get(`/donation-requests`)
			.then(result => {
				setRequest(result.data);
			})
			.catch(err => {
				console.log(err);
			})
	}, [axiosSecure])

	const handleChange = async (e) => {
		e.preventDefault()
		const temp = e.target.value

		setFilterData(temp);

		await axiosSecure.get(`/donation-requests/${temp}`)
			.then(result => {
				setRequest(result.data);
			})
			.catch(err => {
				console.log(err);
			})

	}
	console.log(request);

	return (
		<div>
			<div className="flex justify-between">
				<h2 className="text-2xl font-semibold">
					All Blood Donation Request
				</h2>

				<select onChange={handleChange} name="filter" className="bg-gray-50 border border-gray-300  rounded block p-2">
					<option defaultValue="">All Request</option>
					<option value="Pending">Pending</option>
					<option value="Inprogress">Inprogress</option>
					<option value="Done">Done</option>
					<option value="Canceled">Canceled</option>
				</select>
			</div>

			<div className="bg-white mt-6 rounded">
				<div className="container p-2 mx-auto sm:p-4 ">
					<div className="overflow-x-auto">
						<table className="min-w-full text-xs">
							<thead className="dark:bg-gray-700">
								<tr className="text-left">
									<th className="p-3">Name</th>
									<th className="p-3">Location</th>
									<th className="p-3">Date</th>
									<th className="p-3">Time</th>
									<th className="p-3 text-right">donar info</th>
									<th className="p-3 text-center">Status</th>
									<th className="p-3 text-center">Action</th>
								</tr>
							</thead>
						{request.map (req => <Table key={req._id} req={req} ></Table>)}
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllDonationRequest;