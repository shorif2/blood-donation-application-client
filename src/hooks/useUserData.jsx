import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserData = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()
    

    const {data : myBioData} = useQuery({
        queryKey: [user?.email],
        queryFn: async()=>{
        const bio =  await   axiosSecure.get(`/myInfo/${user.email}`)
            
            return bio.data[0];
        }
    })
    console.log(myBioData);
    return [myBioData]
};

export default useUserData;