/* eslint-disable react/prop-types */

import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../../../utilities/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const SingleCartItem = ({ product, email, refetch }) => {
    
    const axiosPublic = useAxiosPublic();

    const { _id, image, name, price, desc } = product;
    const handleDelete = () => {
        axiosPublic.delete(`/cart?email=${email}&id=${_id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    toast.error("Item removed from Cart");
                    refetch();
                }
            })
    }


    return (
        <div className="w-[270px] bg-[#E0F5EB] py-5 rounded-md hover:shadow-lg">
            <img src={image} className="w-[220px] h-[150px] mx-auto rounded-md" alt="" />
            <div className="flex item-center justify-between text-base font-semibold px-8 pt-2">
                <h3>{name}</h3>
                <h3>$ {price}</h3>
            </div>
            <p className="px-8 py-2 text-sm">{desc}</p>
            <div className="flex justify-end pr-6">
                <button onClick={handleDelete} className="uppercase btn btn-xs bg-[#636940] lg:bg-[#636940] text-white lg:text-white border-b-2 lg:border-b-2 border-[#474A2C] lg:border-[#474A2C] lg:hover:bg-red-600 hover:border-none lg:hover:border-none"> <MdDelete className="text-lg" /> </button>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default SingleCartItem;