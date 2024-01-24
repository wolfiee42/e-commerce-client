import { useForm } from "react-hook-form";
import { IoSend } from "react-icons/io5";
import useAuth from "../../../../utilities/useAuth";
import useAxiosPublic from "../../../../utilities/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const Review = () => {

    const { user } = useAuth();
    const { displayName, email } = user;
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: displayName,
            email: email
        }
    });

    const onSubmit = (data) => {
        axiosPublic.post('/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res.data);
                    toast.success("Thank You For Your Feedback.")
                }
            })
            .catch(error => {
                toast.error(error.message);
            })
    }


    return (
        <div>
            <div>

            </div>
            <div className=" w-[600px] h-[800px] bg-[#E6E8D9] m-10">
                <h1 className="card-body flex-row font-semibold text-4xl">Give Us Your <span className="text-[#6BB379]"> Feedback</span></h1>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control mt-2">
                        <label className="pl-8">
                            <p>Name</p>
                        </label>
                        <input  {...register("name")} type="text" placeholder="Your Name" className="min-w-[480px] mx-auto min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-1 bg-slate-200" required disabled />
                    </div>
                    <div className="form-control mt-2">
                        <label className="pl-8">
                            <p>Email</p>
                        </label>
                        <input  {...register("email")} type="email" placeholder="Your Email Address" className="min-w-[480px] mx-auto min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-1 bg-slate-200" required disabled />
                    </div>
                    <div className="form-control mt-2">
                        <label className="pl-8">
                            <p>Advice</p>
                        </label>
                        <input {...register("advice")} type="text" placeholder="Do you have any thoughts or advice you could offer us?" className="min-w-[480px] mx-auto min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-1" required />
                    </div>
                    <div className="form-control mt-2">
                        <label className="pl-8">
                            <p>Feedback</p>
                        </label>
                        <textarea {...register("feedback")} type="text" placeholder="Please share your Experience briefly." className="min-w-[480px] mx-auto min-h-36 px-5 py-2 rounded-lg border-b-[2px] border-b-[#6BB379] border-l-4 border-l-[#6BB379] mt-1" required />
                    </div>
                    <div className="form-control mt-6 flex  items-center">
                        <button className="w-[300px] uppercase btn btn-xs md:btn-sm lg:btn bg-[#6BB379] lg:bg-[#6BB379] text-white lg:text-white border-b-2 lg:border-b-2 border-[#9BDEAC] lg:border-[#9BDEAC] lg:hover:bg-[#9BDEAC] hover:border-none lg:hover:border-none">Send Feedback <IoSend className="text-lg" /> </button>
                    </div>
                </form>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        </div>
    );
};

export default Review;