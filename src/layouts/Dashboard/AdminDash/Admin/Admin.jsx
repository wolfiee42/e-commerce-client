import useAuth from '../../../../utilities/useAuth';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../../../utilities/useAxiosPublic';



const Admin = () => {
    const { user } = useAuth();
    const { email, displayName, photoURL } = user;
    const axiosPublic = useAxiosPublic();


    const { data: admin, isLoading } = useQuery({
        queryKey: ["Admin"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/singleuser?email=${user?.email}`);
            return res.data;
        }
    });


    if (isLoading) {
        return <div className="w-full h-screen flex items-center justify-center"> <span className="loading loading-dots loading-lg"></span></div>
    }


    return (
        <div className="grid grid-cols-5">
            <div className="col-span-3 bg-[#E6E8D9] min-h-[400px] m-5 rounded-md grid grid-cols-3 items-center shadow-lg">
                <div className="col-span-2 py-5 px-10 space-y-5 mx-auto">
                    <h1 className="text-2xl font-semibold">{displayName}</h1>
                    <p className="text-lg font-medium">{email}</p>
                    <p className="text-lg font-medium">Designation : {admin?.role}</p>
                </div>
                <div className="col-span-1 mx-auto">
                    <img src={photoURL} className="w-[150px] h-[150px] rounded-full" alt="" />
                </div>
            </div>
            <div className="col-span-2 bg-[#E6E8D9] min-h-[400px] m-5 rounded-md flex items-center justify-center shadow-lg">
                <p className="text-2xl flex font-semibold">User since : {admin?.date?.split('T')[1].split(".")[0]}<span className="text-transparent text-xs">Gotcha</span>{admin?.date?.split('T')[0]}</p>
            </div>
        </div>
    );
};

export default Admin;