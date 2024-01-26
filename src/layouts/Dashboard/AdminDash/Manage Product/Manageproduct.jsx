import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../utilities/useAxiosPublic";
import { LiaEdit } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Manageproduct = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allProducts, isLoading, refetch } = useQuery({
        queryKey: ["manageProducts"],
        queryFn: async () => {
            const res = await axiosPublic.get('/manageproducts')
            return res.data;
        }
    });


    const handleDelete = _id => {
        axiosPublic.delete(`/deleteitem?id=${_id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.error("Item has been Deleted.")
                    refetch();
                }
            })
    }

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
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts?.map((product, ind) => <tr key={product._id}>
                                <td>{ind + 1}</td>
                                <td><img src={product?.image} className="h-14 w-14 rounded-md" alt="" /></td>
                                <td>{product?.name}</td>
                                <td>{product?.classification}</td>
                                <td>$ {product?.price}</td>
                                <td>
                                    <Link to={`/dashboard/admin/manageproduct/updateproduct?id=${product?._id}`} className="btn hover:bg-green-400 hover:text-white"><LiaEdit className="text-xl" /></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(product?._id)} className="btn hover:bg-red-500 hover:text-white"> <MdDeleteOutline className="text-xl" /></button>
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

export default Manageproduct;