import Container from "../../components/Container/Container"
import bannerIMG from "../../assets/bannerIMG.png"
import toast, { Toaster } from "react-hot-toast";



const BannerSec = () => {
    const handlebtn = () => {
        toast.success("Sup Brother!")
    }
    return (
        <Container>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 md:px-10 min-h-[70vh]  rounded-md">
                <div className=" space-y-1 md:space-y-2 lg:space-y-3">
                    <h2 className="text-xl md:text-3xl lg:text-5xl">New Arrivals</h2>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium md:font-semibold lg:font-bold uppercase">Big Sale!</h1>
                    <h4 className="text-[#6BB37A] text-lg lg:text-2xl border-2 md:border-4 border-[#6BB37A] max-w-fit px-5 py-2 space-x-5 uppercase">Up to 50% OFF</h4>
                    <p className="max-w-xs lg:max-w-md  text-xs md:text-base md:py-1 lg:py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ut. Hic esse enim fugiat natus ratione quasi illo modi doloribus. Voluptates, incidunt.</p>
                    <button onClick={handlebtn} className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#636940] lg:bg-[#636940] text-white lg:text-white border-b-2 lg:border-b-2 border-[#474A2C] lg:border-[#474A2C] lg:hover:bg-[#555A36] hover:border-none lg:hover:border-none">Shop Now</button>
                </div>
                <div className="w-1/2 md:w-fit">
                    <img src={bannerIMG} alt="" />
                </div>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </Container>
    );
};

export default BannerSec;