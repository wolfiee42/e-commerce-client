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
            <SectionTitle sectionTitle="Testimonials" />
            <div className='grid grid-cols-3 gap-10 mb-10'> 
                {
                    testimonials && testimonials.map((testimonial, index) => <ReviewSingle key={index} testimonial={testimonial} />)
                }
            </div>
        </Container>
    );
};

export default Review;