import { useQuery } from "@tanstack/react-query"
import Cover from "../../components/Cover/Cover";
import orderpic from "../../assets/img/order.jpg"
import Container from "../../components/Container/Container";
import CategoriesData from "../../components/Category data/CategoriesData";
import CategorySingle from "./CategorySingle";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Order = () => {

    const [params, setParams] = useSearchParams();

    const selectedTab = params.get("category");

    const { data: product, refetch } = useQuery({
        queryKey: ["order"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:8000/allproducts?category=${selectedTab}`);
            return res.data
        }
    })
    refetch()
    console.log(product);


    return (
        <Container>
            <Cover img={orderpic} title={"Our Shop"} />
            <div className="pt-4 flex items-center justify-center gap-10">
                {
                    CategoriesData.map((category, index) => <CategorySingle selected={selectedTab === category.label} key={index} category={category} />)
                }
            </div>
        </Container>
    );
};

export default Order;