import Container from '../../components/Container/Container'
import SectionTitle from "../../components/Section Title/SectionTitle"
import { useQuery } from "@tanstack/react-query";
import { reviews } from '../../utilities/http';
import ReviewSingle from './ReviewSingle';



const Review = () => {

    const { data: testimonials } = useQuery({
        queryKey: ["reviews"],
        queryFn: reviews
    })

    return (
        <Container>
            <div className='md:pt-[30px] md:pb-[50px] lg:pt-[50px] lg:pb-[100px]'>
                <SectionTitle sectionTitle="Testimonials" />
            </div>
            <div className='max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10'>
                {
                    testimonials && testimonials.map((testimonial, index) => <ReviewSingle key={index} testimonial={testimonial} />)
                }
            </div>
        </Container>
    );
};

export default Review;