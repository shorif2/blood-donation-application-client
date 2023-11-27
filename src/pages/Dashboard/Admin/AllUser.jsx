import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AllUserTable from "./AllUserTable";


const AllUser = () => {
	const axiosSecure = useAxiosSecure();
	const [users, setUsers] = useState();

	useEffect(() => {
		axiosSecure.get('/users')
			.then(result => {
				setUsers(result.data);
			})
			.catch(error => {
				console.log(error);
			})
	}, [axiosSecure])
	return (
		<div>
			<h2 className="text-2xl font-semibold">
				All Users
			</h2>

			{/* table */}
			<div className="bg-white mt-6 rounded">
				<div className="container p-2 mx-auto sm:p-4 ">
					<div className="overflow-x-auto">
						<table className="min-w-full text-xs">
							<thead className="dark:bg-gray-700">
								<tr className="text-left">
									<th className="p-3">Avatar</th>
									<th className="p-3">Email</th>
									<th className="p-3">Name</th>
									<th className="p-3">Status</th>
									<th className="p-3 text-right">Role</th>
									<th className="p-3 text-center">Action</th>
								</tr>
							</thead>
							{users?.map(user => <AllUserTable key={user._id} user={user}></AllUserTable>)}
						</table>
					</div>
				</div>
			</div>
			<div className="flex justify-center space-x-1 bg-white py-6">
				<button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
					<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
						<polyline points="15 18 9 12 15 6"></polyline>
					</svg>
				</button>
				<button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400">1</button>
				<button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800" title="Page 2">2</button>
				<button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800" title="Page 3">3</button>
				<button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800" title="Page 4">4</button>
				<button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
					<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
						<polyline points="9 18 15 12 9 6"></polyline>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default AllUser;