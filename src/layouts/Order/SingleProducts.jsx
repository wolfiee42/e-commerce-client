/* eslint-disable react/prop-types */


const SingleProducts = ({ product }) => {
    const { name, price, image, desc } = product;
    return (
        <div className="w-[350px] bg-[#E0F5EB] py-5 rounded-md hover:shadow-lg">
            <img src={image} className="w-[300px] h-[300px] mx-auto rounded-md" alt="" />
            <div className="flex item-center justify-between text-xl font-semibold px-8 pt-2">
                <h3>{name}</h3>
                <h3>$ {price}</h3>
            </div>
            <p className="px-8 py-2">{desc}</p>
            <div className="flex items-center justify-center mt-5">
                <button className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#636940] lg:bg-[#636940] text-white lg:text-white border-b-2 lg:border-b-2 border-[#474A2C] lg:border-[#474A2C] lg:hover:bg-[#555A36] hover:border-none lg:hover:border-none">Add to Cart</button>
            </div>
        </div>
    );
};

export default SingleProducts;