// eslint-disable-next-line react/prop-types
const ProductSampleSingle = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { image, price, name, desc } = product;
    
    return (
        <div className="flex justify-around md:justify-between items-center lg:items-start  lg:w-[550px] lg:h-[130px] p-1 md:p-3 lg:p-5 bg-[#E0F5EB] rounded-lg md:mx-auto">
            <img src={image} className="w-16 h-16 lg:w-24 lg:h-24 rounded-lg" alt="" />
            <div className="flex flex-col justify-center items-start max-w-[200px] md:max-w-[200px] lg:max-w-xs">
                <h1 className="font-medium md:font-semibold lg:text-xl">{name}</h1>
                <p className="text-xs lg:text-base">{desc}</p>
            </div>
            <p className="text-sm md:text-base font-medium md:font-semibold lg:font-bold">${price}</p>
        </div>
    );
};

export default ProductSampleSingle;