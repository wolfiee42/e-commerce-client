import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../utilities/useAxiosPublic";
import { LiaEdit } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";


const Manageproduct = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allProducts, isLoading, refetch } = useQuery({
        queryKey: ["manageProducts"],
        queryFn: async () => {
            const res = await axiosPublic.get('/manageproducts')
            return res.data;
        }
    });


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
                            allProducts?.map((product, ind) => <><tr key={ind}>
                                <td>{ind + 1}</td>
                                <td><img src={product?.image} className="h-14 w-14 rounded-md" alt="" /></td>
                                <td>{product?.name}</td>
                                <td>{product?.classification}</td>
                                <td>$ {product?.price}</td>
                                <td> <button className="btn hover:bg-green-400 hover:text-white"><LiaEdit className="text-xl" /></button></td>
                                <td><button className="btn hover:bg-red-500 hover:text-white"> <MdDeleteOutline className="text-xl" /></button></td>
                            </tr></>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manageproduct;