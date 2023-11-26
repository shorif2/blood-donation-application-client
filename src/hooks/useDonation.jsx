import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useDonation = () => {
    const axiosSecure = useAxiosSecure()
    
   const {data: allRequests=[]} = useQuery({
        queryKey: ['donation'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/donation-requests')
            return res.data
        }
   })
   return [allRequests]
};

export default useDonation;