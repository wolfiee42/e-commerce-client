// eslint-disable-next-line react/prop-types
const ProductSampleSingle = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { image, price, title, description } = product
    return (
        <div className="flex justify-between items-start w-[550px] h-[130px] p-5 bg-red-50 rounded-lg">
            <img src={image} className="w-24 h-24 rounded-lg" alt="" />
            <div className="flex flex-col justify-between max-w-xs">
                <h1 className="font-semibold text-xl">{title}</h1>
                <p>{description}</p>
            </div>
            <p className="font-bold">${price}</p>
        </div>
    );
};

export default ProductSampleSingle;