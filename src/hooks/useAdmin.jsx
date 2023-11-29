import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()
    

    const {data : isAdmin} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
        const adminCheck =  await   axiosSecure.get(`/user/admin/${user.email}`)
            
            return adminCheck.data.admin;
        }
    })
    console.log(isAdmin);
    return [isAdmin]
};

export default useAdmin;