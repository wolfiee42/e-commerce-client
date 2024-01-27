import { Link } from "react-router-dom";


const PreFooter = () => {
    return (
        <div className="mt-40">
            <h1 className="text-4xl text-center mb-4 font-medium text-zinc-700"> Online Shopping. Trends. Discounted Deals.</h1>
            <p className="text-center my-10 max-w-3xl mx-auto">We’re a diverse and passionate team that takes ownership of your design and empower you to execute the roadmap. We stay light on our feet and truly enjoy delivering great work.</p>
            <div className="flex flex-row gap-5 justify-center items-center mb-10 text-xl font-semibold text-white">
                <Link to="/products"><button className="bg-[#6BB379] border-b-4 border-b-[#59A96A] hover:border-none hover:bg-[#59A96A] w-28 h-14 rounded-full hover:shadow-2xl"> Products</button></Link>
                <Link to="/order?category=Formal"><button className="bg-[#6BB379] border-b-4 border-b-[#59A96A] hover:border-none hover:bg-[#59A96A] w-28 h-14 rounded-full hover:shadow-2xl"> Order</button></Link>
            </div>
        </div>
    );
};

export default PreFooter;