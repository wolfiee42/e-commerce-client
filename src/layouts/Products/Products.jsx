import Container from "../../components/Container/Container"
import Cover from "../../components/Cover/Cover";
import Productbanner from "../../assets/img/productBan.jpg"
import SectionTitle from "../../components/Section Title/SectionTitle"
import useProducts from "../../utilities/useProducts";

const Products = () => {

    const product = useProducts();
    console.log(product);

    return (
        <Container>
            <Cover img={Productbanner} title={"Our Products"} />
            <SectionTitle sectionTitle="Todays Offer"/>

        </Container>
    );
};

export default Products;