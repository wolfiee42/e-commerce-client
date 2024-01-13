/* eslint-disable react/prop-types */
const CategorySingle = ({ category }) => {
    const { label, icon: Icon } = category;
    return (
        <div className='flex flex-row-reverse items-center justify-center gap-2 p-3 hover:border-b-2 hover:border-[#59a96a] hover:text-[#59a96a] transition cursor-pointer '>
            <Icon size={26} />
            <div className='text-base font-medium'> {label}</div>
        </div>
    );
};

export default CategorySingle;