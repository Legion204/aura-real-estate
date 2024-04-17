import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import EstateCard from "../Components/EstateCard";
import Review from "../Components/Review";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const estates = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>Aura Ventures | Home</title>
            </Helmet>
            {/* banner section */}
            <Banner></Banner>
            {/* estates section */}
            <div className="mt-10 lg:mt-24">
                <h1 data-aos="fade-right" data-aos-duration="1000" className=" text-4xl lg:text-5xl font-Playfair font-medium mx-4">Select your next <span className="text-[#EFAB00]">vacation</span> spot</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-y-10 mt-10">
                    {
                        estates.map((estate, idx) => <EstateCard
                            key={idx}
                            estate={estate}
                        ></EstateCard>)
                    }
                </div>
            </div>
            {/* about section */}
            <div>
                <section className="bg-[url('https://i.postimg.cc/XvSNsLT5/seaside-GH.jpg')] bg-no-repeat bg-cover bg-center bg-blend-darken bg-gray-400 mt-24">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between text-white">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay='1' className="text-5xl font-Playfair font-bold leading-none sm:text-6xl">We can help you feel more comfortable
                            </h1>
                            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay='300' className="mt-6 mb-8 font-Work text-lg sm:mb-12">Embark on Unforgettable Adventures with Us! Discover the worlds most captivating destinations with Aura Real Estate. From exotic beaches to bustling cities, we curate unique travel experiences tailored just for you. Start your journey today!
                            </p>
                            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay='500' className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <Link to={'/about_us'} className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 bg-[#EFAB00]">About Us</Link>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay='700' className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src="https://i.postimg.cc/kXYkRzF6/vacation.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-3xl" />
                        </div>
                    </div>
                </section>
            </div>
            {/* review section */}
            <Review></Review>
        </div>
    );
};

export default Home;