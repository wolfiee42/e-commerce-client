/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import useAxiodPublic from "../../utilities/useAxiosPublic"
import toast, { Toaster } from 'react-hot-toast';
import useAuth from "../../utilities/useAuth"

const SingleProducts = ({ product }) => {
    const axiosPublic = useAxiodPublic();
    const { _id, name, price, image, desc } = product;
    const [wishlist, setwishlist] = useState(false);
    const { user } = useAuth();
    const email = user?.email;

    const wishlistedItem = { email, _id, name, price, image, desc }


    const handleWishlist = () => {
        setwishlist(!wishlist);
        axiosPublic.post('/wishlists', wishlistedItem)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Added to Wishlist!', {
                        icon: '👏',
                    });
                }
            })
    }

    return (
        <div className="w-[350px] bg-[#E0F5EB] py-5 rounded-md hover:shadow-lg">
            <img src={image} className="w-[300px] h-[300px] mx-auto rounded-md" alt="" />
            <div className="flex item-center justify-between text-xl font-semibold px-8 pt-2">
                <h3>{name}</h3>
                <h3>$ {price}</h3>
            </div>
            <p className="px-8 py-2">{desc}</p>
            <div className="flex items-center justify-center mt-5 gap-2">
                <button className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#636940] lg:bg-[#636940] text-white lg:text-white border-b-2 lg:border-b-2 border-[#474A2C] lg:border-[#474A2C] lg:hover:bg-[#555A36] hover:border-none lg:hover:border-none">Add to Cart</button>
                <button onClick={handleWishlist} className={`uppercase btn btn-xs md:btn-sm lg:btn ${!wishlist ? 'bg-[#636940] lg:bg-[#636940] border-[#474A2C] lg:border-[#474A2C] lg:hover:bg-[#555A36]' : 'bg-[#9bdeac] lg:bg-[#9bdeac] border-[#59a96a] lg:border-[#59a96a] lg:hover:bg-[#4C945C]'}  text-white lg:text-white border-b-2 lg:border-b-2   hover:border-none lg:hover:border-none`}>{wishlist ? <FaHeart className="text-xl text-red-600 " /> : <FaHeart className="text-xl " />}</button>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default SingleProducts;