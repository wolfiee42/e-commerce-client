import Container from "../../components/Container/Container"
import bannerIMG from "../../assets/img/banner.jpg"
import toast, { Toaster } from "react-hot-toast";
import { TypeAnimation } from 'react-type-animation';


const BannerSec = () => {
    const handlebtn = () => {
        toast.success("Sup Brother!")
    }
    return (
        <div className=" bg-top bg-cover" style={{ backgroundImage: `url(${bannerIMG})` }}>
            <Container>
                <div className="flex flex-col md:flex-row justify-start items-center md:gap-10 md:px-10 min-h-[70vh]  rounded-md">
                    <div className=" space-y-1 md:space-y-2 lg:space-y-3">
                        <h2 className="text-xl md:text-3xl lg:text-5xl">
                            <TypeAnimation
                                sequence={[
                                    'New',
                                    500,
                                    'New Arrivals', //  Continuing previous Text
                                    500,
                                    'New',
                                    500,
                                    '',
                                    500,
                                ]}
                                repeat={Infinity}
                                speed={75}
                            />
                        </h2>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium md:font-semibold lg:font-bold uppercase">
                            <TypeAnimation
                                sequence={[
                                    'Big',
                                    500,
                                    'Big Sale!',
                                    500,
                                    'Big',
                                    500,
                                    '',
                                    500,
                                ]}
                                repeat={Infinity}
                            />
                        </h1>
                        <h4 className="text-[#6BB37A] text-lg lg:text-2xl border-2 md:border-4 border-[#6BB37A] max-w-fit px-5 py-2 space-x-5 uppercase mt-3">Up to 50% OFF</h4>
                        <p className="max-w-xs lg:max-w-md  text-xs md:text-base md:py-1 lg:py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ut. Hic esse enim fugiat natus ratione quasi illo modi doloribus. Voluptates, incidunt.</p>
                        <button onClick={handlebtn} className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#636940] lg:bg-[#636940] text-white lg:text-white border-b-2 lg:border-b-2 border-[#474A2C] lg:border-[#474A2C] lg:hover:bg-[#555A36] hover:border-none lg:hover:border-none">Shop Now</button>
                    </div>
                </div>
                <Toaster position="top-right" reverseOrder={false} />
            </Container>
        </div>
    );
};

export default BannerSec;

