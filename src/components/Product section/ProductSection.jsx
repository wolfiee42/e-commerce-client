/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProductSampleSingle from "../../layouts/Home/ProductSampleSingle";
import Cover from "../Cover/Cover";
import { Link } from "react-router-dom"

const ProductSection = ({ items, img, title }) => {
    const [route, setroute] = useState()
    useEffect(() => {
        items && items.map(item => setroute(item.classification))
    });
    
    return (
        <div>
            {title && <Cover img={img} title={title} />}
            <div className="grid grid-cols-2 gap-2 my-10 max-w-7xl mx-auto">
                {
                    items && items.map((item, ind) => <ProductSampleSingle key={ind} product={item} />)
                }
            </div>
            {!title ? "" : <div className=" w-[150px] mx-auto my-5">
                <button className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#636940] lg:bg-[#636940] text-white lg:text-white border-b-2 lg:border-b-2 border-[#474A2C] lg:border-[#474A2C] lg:hover:bg-[#555A36] hover:border-none lg:hover:border-none"><Link to={`/order?category=${route}`}>Order Now</Link></button>
            </div>

            }
        </div>
    );
};

export default ProductSection;