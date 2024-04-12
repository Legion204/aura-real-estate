import { Helmet } from "react-helmet-async";


const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>Aura Ventures | About Us</title>
            </Helmet>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://i.postimg.cc/t4PnRsbh/tropical-Villa.jpg" alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                        <div className="space-y-2">
                            <h1 className="inline-block text-4xl font-semibold sm:text-3xl">About Us</h1>
                        </div>
                        <div className="text-gray-800">
                            <p>Welcome to Aura Ventures, your gateway to unforgettable vacation experiences. At Aura Real Estate, we believe that every journey should be filled with excitement, relaxation, and cherished memories.

                                As a premier vacation hotels agency, we specialize in curating exceptional travel experiences tailored to meet the unique desires of each of our clients. Whether you dream of a romantic getaway, a family adventure, or a solo expedition to exotic locales, we are dedicated to crafting the perfect vacation package just for you.

                                What sets us apart is our commitment to personalized service and attention to detail. Our team of experienced travel experts takes the time to understand your preferences, interests, and budget to design bespoke itineraries that exceed your expectations. From luxury beachfront resorts to cozy boutique hotels nestled in charming towns, we handpick accommodations that reflect your style and aspirations.

                                But our service does not stop at booking your stay. We are with you every step of the way, providing expert guidance, insider tips, and round-the-clock support to ensure a seamless and stress-free travel experience. Whether you need assistance with planning excursions, arranging transportation, or making dining reservations, we are here to make your journey as smooth as possible.

                                At Aura Real Estate, we believe that travel has the power to transform lives and create lasting memories. Let us be your trusted partner in turning your travel dreams into reality. Embark on your next adventure with confidence, knowing that you have the expertise and support of Aura Real Estate behind you every step of the way.

                                Discover the world with Aura Real Estate and unlock a world of possibilities. Your dream vacation awaits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;