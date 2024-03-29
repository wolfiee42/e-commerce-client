/* eslint-disable react/prop-types */
import toast, { Toaster } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../../../utilities/useAxiosPublic";



const WishedProductSingle = ({ product }) => {

    const axiosPublic = useAxiosPublic();

    const { _id, email, image, name, price, desc } = product;

    const handleDelete = () => {
        axiosPublic.delete(`/wishlist?email=${email}&id=${_id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.error("Item Removed from Wishlist");
                    window.location.reload();
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
            <div className="flex items-center justify-center mt-5 gap-2">
                <button className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#636940] lg:bg-[#636940] text-white lg:text-white border-b-2 lg:border-b-2 border-[#474A2C] lg:border-[#474A2C] lg:hover:bg-[#555A36] hover:border-none lg:hover:border-none">Add to Cart</button>

                <button onClick={handleDelete} className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#636940] lg:bg-[#636940] text-white lg:text-white border-b-2 lg:border-b-2 border-[#474A2C] lg:border-[#474A2C] lg:hover:bg-red-600 hover:border-none lg:hover:border-none"> <MdDelete className="text-xl" /> </button>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default WishedProductSingle;