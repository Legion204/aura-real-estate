import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Error = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <section className="bg-[url('https://i.postimg.cc/RZ7v8YLr/bgimg.jpg')] bg-no-repeat bg-cover bg-center font-Playfair flex items-center h-full p-16 bg-gray-500 bg-blend-darken text-[#EFAB00]">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold text-white md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 text-white">But do not worry, you can find plenty of other things on our homepage.</p>
                        <Link to={'/'}  className="px-8 py-3 font-semibold rounded bg-[#EFAB00] text-white">Back to homepage</Link>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Error;