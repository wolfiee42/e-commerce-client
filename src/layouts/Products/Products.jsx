import Container from "../../components/Container/Container"
import Cover from "../../components/Cover/Cover";
import Productbanner from "../../assets/img/productBan.jpg"
import SectionTitle from "../../components/Section Title/SectionTitle"
import useProducts from "../../utilities/useProducts";
import ProductSection from "../../components/Product section/ProductSection";
import formalBan from "../../assets/img/formalBan.jpg"
import casualBan from "../../assets/img/casualBan.jpg"
import beltBan from "../../assets/img/beltBan.jpg"
import bagBan from "../../assets/img/bagBan.jpg"




const Products = () => {


    const material = useProducts();

    const categorizedData = (category) => {
        return material?.filter(product => product.classification === category);
    }
    const formalProduct = categorizedData("Formal");
    const bagProduct = categorizedData("Bag");
    const casualProduct = categorizedData("Casual");
    const beltProduct = categorizedData("Belt");

    

    return (
        <Container>
            <Cover img={Productbanner} title={"Our Products"} />
            <SectionTitle sectionTitle="Todays Offer" />

            <ProductSection items={formalProduct} img={formalBan} title={"Formal Shoes"} />
            <ProductSection items={bagProduct} img={bagBan} title={"Bags"} />
            <ProductSection items={casualProduct} img={casualBan} title={"Sport Shows"} />
            <ProductSection items={beltProduct} img={beltBan} title={"Leather  belts"} />
        </Container>
    );
};

export default Products;