import Container from "../../components/Container/Container"
import salesImg from "../../assets/sales.jpg"
import SectionTitle from "../../components/Section Title/SectionTitle";
import { useEffect, useState } from "react";
const FeaturedItem = () => {
    const [time, setTime] = useState(new Date());
    const backgroundIMage = {
        backgroundImage: `url(${salesImg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
    };


    useEffect(() => {
        const intervalid = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalid);
    }, [])

    const formattedDate = time.toLocaleDateString('en-US', {
        month: 'short', // Full month name
        day: 'numeric', // Day of the month
        year: 'numeric', // Full year
      });


    return (
        <Container>
            <div style={backgroundIMage} className="min-h-fit">
                <div>
                    <SectionTitle sectionTitle="Order Now" />
                    <div className="flex justify-center items-center gap-10 p-20">
                        <div className="w-1/2">
                            <img src={salesImg} alt="" />
                        </div>
                        <div className="w-1/2 text-white space-y-5">
                            <h4>{formattedDate}</h4>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati soluta doloribus minima voluptate rem porro incidunt quibusdam fugit? Illo, voluptas.</h4>
                            <button className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#636940] lg:bg-[#636940] text-white lg:text-white border-b-2 lg:border-b-2 border-[#474A2C] lg:border-[#474A2C] lg:hover:bg-[#555A36] hover:border-none lg:hover:border-none">Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FeaturedItem;