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
            <div className='md:pt-[30px] md:pb-[50px] lg:pt-[50px] lg:pb-[100px]'>
                <SectionTitle sectionTitle="Products" />
            </div>

            <Marquee pauseOnHover speed={70} delay={1.1}>
                <div className='flex gap-5 mb-10'>
                    <img className='w-[150px] md:w-[200px] lg:w-[20%] md:mx-auto' src={formal} alt="" />
                    <img className='w-[150px] md:w-[200px] lg:w-[20%] md:mx-auto' src={bag} alt="" />
                    <img className='w-[150px] md:w-[200px] lg:w-[20%] md:mx-auto' src={sandal} alt="" />
                    <img className='w-[150px] md:w-[200px] mr-2 md:mr-4 lg:mr-0 lg:w-[20%] md:mx-auto' src={belt} alt="" />
                </div>
            </Marquee>
        </Container>
    );
};

export default CategorySec;