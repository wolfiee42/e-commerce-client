// eslint-disable-next-line react/prop-types
const SectionTitle = ({ sectionTitle }) => {
    return (
        <div className="pt-[15px] pb-[25px] md:pt-[30px] md:pb-[50px] lg:pt-[50px] lg:pb-[100px]">
            <div className={`max-w-fit border-y-4 mx-auto border-dashed border-[#9BDEAC]`}>
                <h1 className=" text-xl md:text-3xl lg:text-5xl font-semibold md:py-2 lg:py-3 text-center text-[#6BB37A]">{sectionTitle}</h1>
            </div>
        </div >
    );
};

export default SectionTitle;