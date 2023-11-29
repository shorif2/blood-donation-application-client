import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDonar = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })

            return res.data

        }
    })






    // useEffect(() => {
	// 	axiosSecure.get('/users')
	// 		.then(result => {
	// 			setUsers(result.data);
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 		})
	// }, [axiosSecure])
    return (
        <div>
            
        </div>
    );
};

export default useDonar;