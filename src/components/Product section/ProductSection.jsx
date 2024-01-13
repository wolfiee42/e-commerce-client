/* eslint-disable react/prop-types */
import ProductSampleSingle from "../../layouts/Home/ProductSampleSingle";
import Cover from "../Cover/Cover";

const ProductSection = ({items, img, title}) => {
    return (
        <div>
            {title && <Cover img={img} title={title} />}
            <div className="grid grid-cols-2 gap-2 my-10">
                {
                    items && items.map((item, ind) => <ProductSampleSingle key={ind} product={item} />)
                }
            </div>
        </div>
    );
};

export default ProductSection;