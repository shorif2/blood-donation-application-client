import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useDonation = () => {
    const axiosSecure = useAxiosSecure()
   const {data: donation=[]} = useQuery({
        queryKey: ['donation'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/donation')
            return res.data
        }
   })
   return [donation]
};

export default useDonation;