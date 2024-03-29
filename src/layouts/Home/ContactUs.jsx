import Container from "../../components/Container/Container"
import emailpic from "../../assets/email.json"
import Lottie from 'react-lottie';
import SectionTitle from "../../components/Section Title/SectionTitle";
import emailjs from '@emailjs/browser';
import { useRef } from "react";



const ContactUs = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: emailpic,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_service, import.meta.env.VITE_template, form.current, import.meta.env.VITE_private)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();

    }


    return (
        <Container>
            <div className="md:pt-[30px] md:pb-[50px] lg:pt-[50px] lg:pb-[100px]">
                <SectionTitle sectionTitle="How to reach me" />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center md:-mt-14">
                <div className="w-1/2">
                    <Lottie options={defaultOptions} />
                </div>
                <form className="card-body" ref={form} onSubmit={handleSubmit}>
                    <div className="form-control">
                        <input type="name" placeholder="Your Name" name="user_name" className="max-w-full min-h-12 px-5 rounded-lg border-b-[2px] border-l-4 border-l-[#6BB379] mt-4" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="user_email" placeholder="Your Email Address" className="max-w-full min-h-12 px-5 rounded-lg border-b-[2px] border-l-4 border-l-[#6BB379] mt-4" required />
                    </div>
                    <div className="form-control">
                        <textarea name="message" type="message" placeholder="Write Your Message" className="max-w-full min-h-28 px-5 py-2 rounded-lg border-b-[2px] border-l-4 border-l-[#6BB379] mt-4" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="uppercase btn btn-xs md:btn-sm lg:btn bg-[#6BB379] lg:bg-[#6BB379] text-white lg:text-white border-b-4 lg:border-b-4 border-b-[#59A96A] lg:border-b-[#59A96A] lg:hover:bg-[#59A96A] hover:border-none lg:hover:border-none hover:shadow-xl">Send</button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default ContactUs;