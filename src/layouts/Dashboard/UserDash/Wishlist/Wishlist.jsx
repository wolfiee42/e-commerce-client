import useAuth from "../../../../utilities/useAuth";
import useAxiosPublic from "../../../../utilities/useAxiosPublic"
import { useEffect, useState } from "react";
import Stats from "./stats/Stats";
import WishedProductSingle from "./WishedProductSingle";




const Wishlist = () => {

    const axiosPublic = useAxiosPublic();
    const [totalProduct, setTotalProduct] = useState();
    const { user } = useAuth();
    const email = user?.email;
    const [listedProduct, setWishedProduct] = useState();

    useEffect(() => {
        axiosPublic.get('/totalproductcount')
            .then(res => {
                setTotalProduct(res.data.result);
            })
    }, [axiosPublic])

    useEffect(() => {
        axiosPublic.get(`/wishlists?email=${email}`)
            .then(res => {
                setWishedProduct(res.data)
            })
    }, [axiosPublic, email])

    return (
        <div className="grid grid-cols-5">
            <div className="col-span-3 bg-[#E6E8D9] min-h-fit m-5 rounded-lg p-5 grid grid-cols-3 gap-3">
                {
                    listedProduct?.map(product => <WishedProductSingle key={product._id} product={product} />)
                }
            </div>
            <div className="col-span-2 bg-[#E6E8D9] h-[370px] m-5 rounded-lg flex items-center justify-center p-5">
                <Stats totalProduct={totalProduct} listedProduct={listedProduct} />
            </div>
        </div>
    );
};

export default Wishlist;