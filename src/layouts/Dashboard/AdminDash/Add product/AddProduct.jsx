import { Toaster } from "react-hot-toast";
import animation from "../../../../../public/addproduct.json";
import Lottie from 'react-lottie';
import { useForm } from "react-hook-form";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";




const AddProduct = () => {
    const [selectedvalue, setSelectedValue] = useState('');
    const { register, handleSubmit } = useForm();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const handleCategory = (e) => {
        setSelectedValue(e.target.value)
    }
    console.log(selectedvalue);
    const onSubmit = data => {
        console.log(data);
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
                                <select value={selectedvalue} onChange={handleCategory} className="select w-full min-w-[220px] mx-auto min-h-12 px-5 rounded-lg border-b-[2px] border-b-[#E6E8D9] border-l-4 border-l-[#E6E8D9] mt-1 bg-slate-50">
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