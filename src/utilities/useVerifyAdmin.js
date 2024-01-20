import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from "../utilities/useAxiosPublic"
import useAuth from "../utilities/useAuth"



const useVerifyAdmin = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const email = user?.email;

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users?email=${email}`)
            return res.data.role;
        }
    });
    return [isAdmin, isAdminLoading];

};

export default useVerifyAdmin;