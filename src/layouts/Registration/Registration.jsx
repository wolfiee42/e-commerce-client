import Lottie from "react-lottie"
import registration from "../../assets/registration.json"
import Container from "../../components/Container/Container";
import { RiLoginCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../utilities/useAxiosPublic";
import useAuth from "../../utilities/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { FaFacebookF, FaGoogle } from "react-icons/fa";


const Registration = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: registration,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const imgKey = import.meta.env.VITE_imgKey;
    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgKey}`;
    const axiosPublic = useAxiosPublic();
    const { register: signup, addProfileNameAndPicture, loginWithGoogle, loginWithFacebook } = useAuth();
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        // some random syntax which i must follow 
        const img = { image: data.image[0] };

        // uploading to imgbb
        const res = await axiosPublic.post(imgHostingApi, img, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });


        const profilePicture = res.data.data.display_url;
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const role = "User"
        const user = { name, email, role }
        signup(email, password)
            .then(() => {
                addProfileNameAndPicture(name, profilePicture)
                axiosPublic.post('/users', user)
                    .then(res => {
                        if (res.data.insertedId) {
                            navigate('/')
                            res.user && toast.success('User Created Successfully!');
                        }
                    })
            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    const googleLogin = () => {
        loginWithGoogle()
            .then(res => {
                const name = res.user.displayName;
                const email = res.user.email;
                const role = "User"
                const user = { name, email, role };
                
                axiosPublic.post('/users', user)
                    .then(res => {
                        res.data && toast.success('User Logged in Successfully!')
                        navigate('/')
                    })
            })
    }


    const FacebookLogin = () => {
        loginWithFacebook()
            .then(res => {
                res.user && toast.success('User Logged in Successfully!')
                navigate('/')
            })
    }

    return (
        <Container>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-1/2">
                    <Lottie options={defaultOptions} />
                </div>
                <div className=" w-1/2">
                    <h3 className="text-center text-4xl font-semibold ">Registration <span className="text-[#6BB379]">Form</span></h3>

                    {/* form sewction */}
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <input {...register("name")} type="text" placeholder="Your Name" className="max-w-full min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-4" required />
                        </div>
                        <div className="form-control">
                            <input {...register("image")} type="file" className="file-input file-input-ghost  max-w-full min-h-12 px-5 rounded-lg border-t-0 border-r-0 border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-4" />
                        </div>
                        <div className="form-control">
                            <input {...register("email")} type="email" placeholder="Your Email Address" className="max-w-full min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-4" required />
                        </div>
                        <div className="form-control">
                            <input {...register("password")} type="password" placeholder="Write Your Password" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-4" required />
                        </div>
                        <label className="label">
                            <p href="#" className="label-text-alt">Don't have an account? please <Link className="hover:underline hover:font-bold text-[#6BB379]" to='/login'>login</Link></p>
                        </label>
                        <div className="form-control mt-6">
                            <button className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#6BB379] lg:bg-[#6BB379] text-white lg:text-white border-b-2 lg:border-b-2 border-[#9BDEAC] lg:border-[#9BDEAC] lg:hover:bg-[#9BDEAC] hover:border-none lg:hover:border-none">Register <RiLoginCircleFill className="text-xl" /> </button>
                        </div>
                    </form>

                    {/* social login */}
                    <div className="flex justify-center gap-2">
                        <div className="flex justify-center items-center gap-1" onClick={googleLogin}>
                            <p className="text-xl font-semibold">Login with Google</p>
                            <button className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#6BB379] lg:bg-[#6BB379] text-white lg:text-white border-b-2 lg:border-b-2 border-[#9BDEAC] lg:border-[#9BDEAC] lg:hover:bg-[#9BDEAC] hover:border-none lg:hover:border-none">google <FaGoogle className="text-xl" /></button>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <p className="font-semibold">Login with Facebook</p>
                            <button onClick={FacebookLogin} className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#6BB379] lg:bg-[#6BB379] text-white lg:text-white border-b-2 lg:border-b-2 border-[#9BDEAC] lg:border-[#9BDEAC] lg:hover:bg-[#9BDEAC] hover:border-none lg:hover:border-none">Facebook <FaFacebookF className="text-xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Registration;