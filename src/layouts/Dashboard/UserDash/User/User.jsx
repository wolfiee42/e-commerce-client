import { useEffect, useState } from "react";
import useAuth from "../../../../utilities/useAuth"
import useAxiosPublic from "../../../../utilities/useAxiosPublic"
const User = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { displayName, photoURL, email } = user;
    const [userr, setUserr] = useState({});
    useEffect(() => {
        axiosPublic.get(`/users?email=${email}`)
            .then(res => {
                setUserr(res?.data);
            })
    }, [axiosPublic, email])
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-3 bg-[#E6E8D9] min-h-[400px] m-5 rounded-md grid grid-cols-3 items-center ">
                <div className="col-span-2 py-5 px-10 space-y-5 mx-auto">
                    <h1 className="text-2xl font-semibold">{displayName}</h1>
                    <p className="text-lg font-medium">{email}</p>
                    <p className="text-lg font-medium">Designation : {userr.role}</p>
                </div>
                <div className="col-span-1 mx-auto">
                    <img src={photoURL} className="w-[150px] h-[150px] rounded-full" alt="" />
                </div>
            </div>
            <div className="col-span-2 bg-[#E6E8D9] min-h-[400px] m-5 rounded-md flex items-center justify-center">
                <p className="text-2xl flex font-semibold">User since : {userr?.date?.split('T')[1].split(".")[0]}<span className="text-transparent text-xs">Gotcha</span>{userr?.date?.split('T')[0]}</p>
            </div>
        </div>
    );
};

export default User;