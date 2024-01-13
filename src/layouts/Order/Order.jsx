import Cover from "../../components/Cover/Cover";
import orderpic from "../../assets/img/order.jpg"
import Container from "../../components/Container/Container";
import CategoriesData from "../../components/Category data/CategoriesData";
import CategorySingle from "./CategorySingle";
const Order = () => {
    return (
        <Container>
            <Cover img={orderpic} title={"Our Shop"} />
            <div className="pt-4 flex items-center justify-center gap-10">
                {
                    CategoriesData.map((category, index) => <CategorySingle key={index} category={category} />)
                }
            </div>
        </Container>
    );
};

export default Order;