/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const Checkout = ({ products }) => {
    const [price, setPrice] = useState([]);


    useEffect(() => {
        const prices = products && products.map(product => product.price);
        setPrice(prices)
    }, [products]);


    const totalPrice = price?.reduce((acc, due) => acc + due, 0);
    const totalDue = totalPrice?.toFixed(2);
    return (
        <div className="flex flex-col justify-center items-center gap-5 my-10 ">
            <h1 className="text-3xl font-semibold uppercase">Subtotal</h1>
            <div className="bg-white w-[350px] h-[150px] rounded-md flex flex-col justify-center items-center gap-5">
                <p className="text-xl font-medium">$ {totalDue}</p>
                <button className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#636940] lg:bg-[#636940] text-white lg:text-white border-b-2 lg:border-b-2 border-[#474A2C] lg:border-[#474A2C] lg:hover:bg-[#555A36] hover:border-none lg:hover:border-none"> Proceed</button>
            </div>
        </div>
    );
};

export default Checkout;