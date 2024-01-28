import { useQuery } from "@tanstack/react-query"
import Cover from "../../components/Cover/Cover";
import orderpic from "../../assets/img/order.jpg"
import Container from "../../components/Container/Container";
import CategoriesData from "../../components/Category data/CategoriesData";
import CategorySingle from "./CategorySingle";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SingleProducts from "./SingleProducts";

const Order = () => {

    const [params, setParams] = useSearchParams();

    const selectedTab = params.get("category");

    const { data: products, refetch } = useQuery({
        queryKey: ["order"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:8000/allproducts?category=${selectedTab}`);
            return res.data
        }
    })
    refetch();


    return (
        <div>
            <Cover img={orderpic} title={"Our Shop"} />
            <Container>
                <div className="pt-10 flex items-center justify-center gap-10">
                    {
                        CategoriesData.map((category, index) => <CategorySingle selected={selectedTab === category.label} key={index} category={category} />)
                    }
                </div>

                <div className="grid grid-cols-3 my-20 gap-10">
                    {
                        products && products.map(product => <SingleProducts key={product._id} product={product} />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Order;