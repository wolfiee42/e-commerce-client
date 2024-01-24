import toast, { Toaster } from "react-hot-toast";
import animation from "../../../../../public/addproduct.json";
import Lottie from 'react-lottie';
import { useForm } from "react-hook-form";
import { FaCirclePlus } from "react-icons/fa6";
import useAxiosPublic from "../../../../utilities/useAxiosPublic";




const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const imgHostingkey = import.meta.env.VITE_imgKey;
    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingkey}`;



    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(imgHostingApi, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        const priceint = parseInt(data.price);

        const product = {
            name: data.name,
            price: priceint,
            classification: data.category,
            image: res.data.data.display_url,
            desc: data.desc
        }
        if (res.data.data.display_url) {
            axiosPublic.post("/addingproduct", product)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success("Product Uploaded In the Database Successfully!");
                        reset();
                    }
                })
        }

    }


    return (
        <div className="flex flex-col items-center h-screen justify-center">
            <h1 className="text-4xl font-semibold text-zinc-600">Add A <span className="text-[#CED0C4]">Product</span></h1>
            <div className="flex flex-row justify-center items-center bg-white">
                <div className="w-1/3">
                    <Lottie options={defaultOptions} />
                </div>
                <div>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control mt-2">
                            <label className="pl-4">
                                <p>Product name</p>
                            </label>
                            <input {...register("name")} type="text" placeholder="Product Name" className="min-w-[480px] mx-auto min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#E6E8D9] border-l-4 border-l-[#E6E8D9] mt-1 bg-slate-50" required />
                        </div>



                        <div className="flex flex-row gap-3 justify-between">

                            <div className="form-control mt-2">
                                <label className="pl-4">
                                    <p>Price</p>
                                </label>
                                <input  {...register("price")} type="text" placeholder="Product Price" className="min-w-[220px] mx-auto min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#E6E8D9] border-l-4 border-l-[#E6E8D9] mt-1 bg-slate-50" required />
                            </div>

                            <div className="form-control mt-2">
                                <label className="pl-4">
                                    <p>Category</p>
                                </label>
                                <select {...register("category")} className="select w-full min-w-[220px] mx-auto min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#E6E8D9] border-l-4 border-l-[#E6E8D9] mt-1 bg-slate-50">
                                    <option disabled selected>Select Category</option>
                                    <option value={"Formal"}>Formal Shoes</option>
                                    <option value={"Bag"}>Bags</option>
                                    <option value={"Casual"}>Casual Shoes</option>
                                    <option value={"Belt"}>Lether Belts</option>
                                </select>
                            </div>

                        </div>

                        <div className="form-control mt-2">
                            <label className="pl-4">
                                <p>Product Image</p>
                            </label>
                            <input  {...register("image")} type="file" placeholder="Your Name" className=" min-w-[480px] mx-auto min-h-12 pt-2 px-5 rounded-lg border-b-[2px] border-b-[#E6E8D9] border-l-4 border-l-[#E6E8D9] mt-1 bg-slate-50" required />
                        </div>

                        <div className="form-control mt-2">
                            <label className="pl-4">
                                <p>Product Description</p>
                            </label>
                            <textarea {...register("desc")} type="text" placeholder="Write Product Description." className="min-w-[480px] mx-auto min-h-36 px-5 py-2 rounded-lg border-b-[2px] border-b-[#E6E8D9] border-l-4 border-l-[#E6E8D9] mt-1 bg-slate-50" required />
                        </div>
                        <div className="form-control mt-6 flex  items-center">
                            <button className="w-[300px] uppercase btn  bg-[#E6E8D9] text-zinc-500 hover:text-white border-b-2 border-b-[#D2D3C7] lg:hover:bg-[#A9AAA4] hover:border-none">Add product <FaCirclePlus className="text-lg" /> </button>
                        </div>
                    </form>
                </div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        </div>
    );
};

export default AddProduct;