import BannerSec from "./BannerSec";
import CategorySec from "./CategorySec";
import ContactUs from "./ContactUs";
import FeaturedItem from "./FeaturedItem";
import ProductSample from "./ProductSample";
import Review from "./Review";


const Home = () => {
    return (
        <div>
            <BannerSec />
            <CategorySec />
            <ProductSample />
            <FeaturedItem />
            <Review />
            <ContactUs />
        </div>
    );
};

export default Home;