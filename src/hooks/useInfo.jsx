
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInfo = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();
    const {email} = user
    
    const {data: myBio={}} = useQuery({
         queryKey: ['info'],
         queryFn: async ()=>{
            try {
                const res = await axiosSecure.get(`/myInfo/${email}`);
                return res.data;
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
         }
    })
    return [myBio]
 };

export default useInfo;