import { CurrencyCircleDollar, HandsPraying, UsersThree } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminDash = () => {

    const axiosSecure = useAxiosSecure();
	const [users, setUsers] = useState();
    const [request, setRequest] = useState([])

	useEffect(() => {
		axiosSecure.get('/users')
			.then(result => {
				setUsers(result.data);
			})
			.catch(error => {
				console.log(error);
			})
	}, [axiosSecure])

    
	
	

	useEffect(() => {
		axiosSecure.get(`/donation-requests`)
			.then(result => {
				setRequest(result.data);
			})
			.catch(err => {
				console.log(err);
			})
	}, [axiosSecure])


    return (
        <div className="w-full grid grid-cols-3 gap-6 mt-6">
                <div className="flex justify-center flex-col items-center p-10 bg-green-300 space-y-2">
                <UsersThree  size={50} />
                <div className="text-center">
                <p className="text-5xl font-bold">{users?.length}</p>
                <p className="text-xl font-medium pt-2">Total User</p>
                </div>
                </div>
                <div className="flex justify-center flex-col items-center p-10 bg-green-400 space-y-2">
                <CurrencyCircleDollar size={50} />
                <div className="text-center">
                <p className="text-5xl font-bold">28.7k</p>
                <p className="text-xl font-medium pt-2">Total funding</p>
                </div>
                </div>
                <div className="flex justify-center flex-col items-center p-10 bg-green-500 space-y-2">
                <HandsPraying size={50} />
                <div className="text-center">
                <p className="text-5xl font-bold">{request?.length}</p>
                <p className="text-xl font-medium pt-2">Donation request</p>
                </div>
                </div>
            </div>
    );
};

export default AdminDash;