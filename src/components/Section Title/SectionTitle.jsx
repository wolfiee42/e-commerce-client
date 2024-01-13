// eslint-disable-next-line react/prop-types
const SectionTitle = ({ sectionTitle }) => {
    return (
        <div className="py-[25px]">
            <div className={`max-w-fit border-y-4 mx-auto border-dashed border-[#9BDEAC]`}>
                <h1 className=" text-xl md:text-3xl lg:text-5xl font-semibold md:py-2 lg:py-3 text-center text-[#6BB37A]">{sectionTitle}</h1>
            </div>
        </div >
    );
};

export default SectionTitle;