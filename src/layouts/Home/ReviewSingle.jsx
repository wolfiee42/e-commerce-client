import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


// eslint-disable-next-line react/prop-types
const ReviewSingle = ({ testimonial }) => {
    // eslint-disable-next-line react/prop-types
    const { image, name, review, rating } = testimonial;
    return (
        <div className="relative max-w-sm mb-10 mx-auto">
            <div className="max-w-[250px] md:max-w-sm border-4 border-[#9BDEAC] hover:bg-[#E0F5EB] hover:duration-200 hover:shadow-xl rounded-s-3xl md:rounded-tr-[150px] min-h-[100px] md:min-h-[200px] flex flex-col justify-center px-4 py-2 z-0 space-y-3">
                <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                <p className="max-w-xs text-xs md:text-base">{review}</p>
                <h3 className="text-xl font-semibold">{name}</h3>
            </div>
            <img className="w-12 md:w-24 h-12 md:h-24 rounded-[50%] absolute -bottom-4 -right-4 z-1" src={image} alt="" />
        </div>
    );
};

export default ReviewSingle;