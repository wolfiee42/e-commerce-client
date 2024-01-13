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
            <div className="md:pt-[30px] md:pb-[50px] lg:pt-[50px] lg:pb-[100px]">
                <SectionTitle sectionTitle="Product Sample" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-10 mb-10 m-2 md:m-3 lg:m-0">
                {
                    products && products.map((product, index) => <ProductSampleSingle key={index} product={product} />)
                }
            </div>
        </Container>
    );
};

export default ProductSample;