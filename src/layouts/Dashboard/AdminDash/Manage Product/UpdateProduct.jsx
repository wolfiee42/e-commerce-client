import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import useAxiosPublic from "../../../../utilities/useAxiosPublic";
import { useForm } from "react-hook-form";
import { FaCirclePlus } from "react-icons/fa6";
import updateproduct from "../../../../../public/updateproduct.json"
import Lottie from 'react-lottie';




const UpdateProduct = () => {



    const axiosPublic = useAxiosPublic();
    const [params, setParams] = useSearchParams();
    const id = params.get("id");


    const { data: productInfo, isLoading, refetch } = useQuery({
        queryKey: ["singleProduct"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/product?id=${id}`);
            return res.data;
        }
    });


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: updateproduct,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: productInfo?.name,
            price: productInfo?.price,
            category: productInfo?.classification,
            desc: productInfo?.desc,
            image: productInfo?.image,
        }
    });
    const onSubmit = data => console.log(data);



    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h1 className="text-4xl font-semibold text-zinc-600 mb-10">Update <span className="text-[#CED0C4]">Product</span></h1>
            <div className="flex flex-row items-center">
                <div className="w-1/2">
                    <Lottie options={defaultOptions} />
                </div>
                <form className="w-[250px]" onSubmit={handleSubmit(onSubmit)}>
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
                    <div className="form-control mt-6 flex items-center">
                        <button className="w-[300px] uppercase btn  bg-[#E6E8D9] text-zinc-500 hover:text-white border-b-2 border-b-[#D2D3C7] lg:hover:bg-[#A9AAA4] hover:border-none">Update product <FaCirclePlus className="text-lg" /> </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;