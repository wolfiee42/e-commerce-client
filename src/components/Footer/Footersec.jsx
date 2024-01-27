import Container from "../Container/Container";
import logo from '../../assets/img/logoNON-removebg-preview (1).png'
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


const Footersec = () => {
    return (
        <Container>
            <div>
                <footer className="items-center flex flex-row justify-between px-5 py-2 bg-[#6BB379] rounded-t-lg">
                    <aside>
                        <img src={logo} className="w-16" alt="" />
                    </aside>
                    <p className="text-white">© 2024 Velvet Voyage. All Rights Reserved. </p>
                    <div className="flex flex-row gap-4">
                        <Link className="border-2 p-3 rounded-full hover:bg-[#59A96A]" to="https://github.com/wolfiee42" ><FiGithub className="text-xl text-white" /></Link>
                        <Link className="border-2 p-3 rounded-full hover:bg-[#59A96A]" to="https://www.linkedin.com/in/saaiful-islam/"><FaLinkedinIn className="text-xl text-white" /></Link>
                        <Link className="border-2 p-3 rounded-full hover:bg-[#59A96A]" to="https://www.facebook.com/saif.alislam.3388630"><FaFacebookF className="text-xl text-white" /></Link>
                    </div>
                </footer></div>
        </Container>
    );
};

export default Footersec;