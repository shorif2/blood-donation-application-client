import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useDonation = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    
   const {data: donation=[]} = useQuery({
        queryKey: ['donation'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/donationRequests')
            return res.data
        }
   })
   return [donation]
};

export default useDonation;