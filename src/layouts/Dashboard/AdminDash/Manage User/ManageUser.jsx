import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../utilities/useAxiosPublic";
import { FaUser } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

const ManageUser = () => {

    const axiosPublic = useAxiosPublic();
    const { data: allUsers, isLoading, refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allusers')
            return res.data
        }
    });


    const handleDelete = email => {
        axiosPublic.delete(`/deleteuser?email=${email}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.error('User has been removed from website!')
                    refetch();
                }
            })
    };


    const handleRole = email => {
        axiosPublic.patch(`/usersinformation?email=${email}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('User Upgraded to Admin');
                    refetch();
                }
            })
    };


    if (isLoading) {
        return <div className="w-full h-screen flex items-center justify-center"> <span className="loading loading-dots loading-lg"></span></div>
    }

    return (
        <div className="m-10">
            <div></div>
            <div className="overflow-x-auto border-2 rounded-lg p-5">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial Num</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((consumer, ind) => <tr key={consumer._id}>
                                <td>{ind + 1}</td>
                                <td>{consumer?.email}</td>
                                <td>{consumer.name}</td>
                                <td><img src={consumer?.profilePicture} className="h-14 w-14 rounded-md" alt="" /></td>
                                <td>
                                    {
                                        consumer?.role === "Admin" ? <button className="btn"><FaUserTie className="text-xl" /></button> : <button onClick={() => handleRole(consumer?.email)} className="btn hover:bg-green-400 hover:text-white">< FaUser className="text-xl" /></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(consumer?.email)} className="btn hover:bg-red-500 hover:text-white"> <MdDeleteOutline className="text-xl" /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default ManageUser;