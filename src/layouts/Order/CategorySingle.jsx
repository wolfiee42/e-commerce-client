import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from 'query-string';


/* eslint-disable react/prop-types */
const CategorySingle = ({ category, selected }) => {

    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const { label, icon: Icon } = category;


    // tab section
    const CategoryButtonClicked = () => {
        let currentQuery = {};
        if (params) {
            currentQuery = queryString.parse(params.toString());
        }
        const updatedQuery = { ...currentQuery, category: label }
        const url = queryString.stringifyUrl({
            url: '/order',
            query: updatedQuery,
        })
        navigate(url)
    }


    return (
        <div onClick={CategoryButtonClicked} className={`flex flex-row-reverse items-center justify-center gap-2 p-3 hover:border-b-2 hover:border-[#59a96a] hover:text-[#59a96a] transition cursor-pointer ${selected ? "border-b-2 border-[#59a96a] text-[#59a96a] transition" : ""} `}>
            <Icon size={26} />
            <div className='text-base font-medium uppercase'> {label}</div>
        </div>
    );
};

export default CategorySingle;