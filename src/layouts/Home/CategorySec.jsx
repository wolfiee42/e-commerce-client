import SectionTitle from '../../components/Section Title/SectionTitle';
import Container from "../../components/Container/Container"
import bag from "../../assets/bag.png"
import belt from "../../assets/belt.png"
import sandal from "../../assets/sandal.png"
import formal from "../../assets/formal.png"
import Marquee from "react-fast-marquee";


const CategorySec = () => {
    return (
        <Container>
            <SectionTitle sectionTitle="Products" />
            <Marquee pauseOnHover speed={70} delay={1.1}>
                <div className='flex gap-5 mb-10'>
                    <img className='w-[20%] mx-auto' src={formal} alt="" />
                    <img className='w-[20%] mx-auto' src={bag} alt="" />
                    <img className='w-[20%] mx-auto' src={sandal} alt="" />
                    <img className='w-[20%] mx-auto' src={belt} alt="" />
                </div>
            </Marquee>
        </Container>
    );
};

export default CategorySec;