import { Helmet } from "react-helmet-async";
import Map from "../Components/Map";


const ContactUs = () => {
    return (

        <div> 
            <Helmet>
                <title>Aura Ventures | Contact Us</title>
            </Helmet>
            <section className="bg-[url('https://i.postimg.cc/h4ySkckc/wild-Lodge.jpg')] bg-no-repeat bg-cover bg-center py-6  bg-gray-200 bg-blend-darken text-white flex flex-col items-center gap-5">
                <div className="grid max-w-6xl grid-cols-1 px-6  lg:px-8 md:grid-cols-2 md:divide-x items-center justify-center flex-grow ">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Plot #27 Road No. 17, Dhaka 1213</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>aura@business.com</span>
                            </p>
                        </div>
                    </div>
                    <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" placeholder="Your Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-default-600 bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input type="email" placeholder="Email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-default-600 bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-default-600 bg-gray-100"></textarea>
                        </label>
                        <button type="button" className="btn bg-[#EFAB00]">Submit</button>
                    </form>
                </div>
                <div className=" w-96 md:w-[600px] items-center">
                    <Map></Map>
                </div>
            </section>
        </div>

    );
};

export default ContactUs;