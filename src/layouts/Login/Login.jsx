import Container from "../../components/Container/Container";
import { RiLoginCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import useAuth from "../../utilities/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Lottie from "react-lottie"
import loginPic from "../../assets/login.json"
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../utilities/useAxiosPublic";



const Login = () => {
    const { loginUser, loginWithGoogle, loginWithFacebook } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit
    } = useForm()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginPic,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    // form login
    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;

        loginUser(email, password)
            .then(res => {
                res.user && toast.success('User Logged in Successfully!')
                navigate('/')
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
                const profilePicture = res.user.photoURL;
                const role = "User";
                const date = new Date();
                const user = { name, email, role, date, profilePicture };

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
            <div className="min-h-screen flex flex-row-reverse justify-center items-center">
                <div className="w-1/2">
                    <Lottie options={defaultOptions} />
                </div>
                <div className=" w-1/2">
                    <h3 className="text-center text-4xl font-semibold ">Login <span className="text-[#6BB379]">Form</span></h3>

                    {/* form sewction */}
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <input {...register("email")} type="email" placeholder="Your Email Address" className="max-w-full min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-4" required />
                        </div>
                        <div className="form-control">
                            <input {...register("password")} type="password" placeholder="Write Your Password" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-4" required />
                            <label className="label">
                                <p href="#" className="label-text-alt">Don't have an account? please <Link className="hover:underline hover:font-bold text-[#6BB379]" to='/registration'>register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#6BB379] lg:bg-[#6BB379] text-white lg:text-white border-b-2 lg:border-b-2 border-[#9BDEAC] lg:border-[#9BDEAC] lg:hover:bg-[#9BDEAC] hover:border-none lg:hover:border-none">Login <RiLoginCircleFill className="text-xl" /> </button>
                        </div>
                    </form>
                    {/* social login */}
                    <div className="flex justify-around">
                        <div className="flex justify-center items-center gap-1" onClick={googleLogin}>
                            <p className="font-semibold">Login with Google</p>
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

export default Login;