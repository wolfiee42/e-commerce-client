import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container/Container"
import SectionTitle from "../../components/Section Title/SectionTitle"
import { productSample } from "../../utilities/http";
import ProductSampleSingle from "./ProductSampleSingle";


const ProductSample = () => {

    const { data: products } = useQuery({
        queryKey: ['sample-product'],
        queryFn: productSample,
    });

    return (
        <Container>
            <SectionTitle sectionTitle="Product Sample" />
            <div className="grid grid-cols-2 gap-10 mb-10">
                {
                    products && products.map((product, index) => <ProductSampleSingle key={index} product={product} />)
                }
            </div>
        </Container>
    );
};

export default ProductSample;