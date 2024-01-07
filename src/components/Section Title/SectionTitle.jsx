// eslint-disable-next-line react/prop-types
const SectionTitle = ({ sectionTitle }) => {
    return (
        <div className="pt-[50px] pb-[100px]">
            <div className={`max-w-fit border-y-4 mx-auto border-dashed border-[#636940]`}>
                <h1 className="text-5xl font-semibold py-3 text-center">{sectionTitle}</h1>
            </div>
        </div >
    );
};

export default SectionTitle;