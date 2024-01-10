import Lottie from "react-lottie"
import registration from "../../assets/registration.json"
import Container from "../../components/Container/Container";
import { RiLoginCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form"

const Registration = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: registration,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <Container>
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-1/2">
                    <Lottie options={defaultOptions} />
                </div>
                <div className=" w-1/2">
                    <h3 className="text-center text-4xl font-semibold">Registration form</h3>

                    {/* form sewction */}
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <input {...register("name")} type="text" placeholder="Your Name" className="max-w-full min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-4" required />
                        </div>
                        {/* <div className="form-control">
                            <input type="name" placeholder="Your Name" name="user_name" className="max-w-full min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-4" required />
                        </div> */}
                        <div className="form-control">
                            <input {...register("email")} type="email" placeholder="Your Email Address" className="max-w-full min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-4" required />
                        </div>
                        <div className="form-control">
                            <input {...register("password")} type="password" placeholder="Write Your Password" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-4" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#6BB379] lg:bg-[#6BB379] text-white lg:text-white border-b-2 lg:border-b-2 border-[#9BDEAC] lg:border-[#9BDEAC] lg:hover:bg-[#9BDEAC] hover:border-none lg:hover:border-none">Register <RiLoginCircleFill className="text-xl" /> </button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Registration;