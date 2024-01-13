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

    const product = useProducts();
    console.log(product);

    // the product which i got from useProduct hook will be filtered here and product section would get diffrent filtered element. but for now i am using dummy products.


    return (
        <Container>
            <Cover img={Productbanner} title={"Our Products"} />
            <SectionTitle sectionTitle="Todays Offer" />
            <ProductSection items={product} />
            <ProductSection items={product} img={formalBan} title={"Formal Shoes"}/>
        </Container>
    );
};

export default Products;