import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaDotCircle } from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import { FaArrowRightLong, FaMapLocationDot } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";

const EstateDetails = () => {

    const { id } = useParams()
    const estates = useLoaderData()

    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = estates.find(estate => estate.id == id);


    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
                    <div className="flex space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <h1 className="font-Playfair text-2xl font-bold bg-[#EFAB00] p-2 rounded-md">{estate_title}</h1>
                            <h1 className="font-Playfair text-2xl font-bold">Segment: <span className="font-Work text-xl font-normal">{segment_name}</span></h1>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <h1 className="font-Playfair text-2xl font-bold underline">DESCRIPTION</h1>
                            <p className="font-Work">{description}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <h2 className="font-Playfair text-xl font-bold underline">Facility</h2>
                            <div className="grid grid-cols-2 gap-2">
                                {
                                    facilities.map((facility, idx) => <p key={idx} className="flex items-center gap-2 font-Work"><FaDotCircle className="text-[#EFAB00]" />{facility}</p>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <h2 className="font-Playfair text-xl font-bold underline">Status</h2>
                            <p className="font-Work flex items-center gap-2"><MdBedroomParent className="text-[#EFAB00] text-2xl" />{status}</p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="font-Playfair text-xl font-bold underline">Location</h2>
                            <p className="font-Work flex items-center gap-2"><FaMapLocationDot className="text-[#EFAB00] text-2xl" />{location}</p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="font-Playfair text-xl font-bold underline">Area</h2>
                            <p className="font-Work flex items-center gap-2"><FaChartArea className="text-[#EFAB00] text-2xl" />{area}</p>
                        </div>
                    </div>
                    <div className="flex justify-between space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <h1 className="font-Playfair text-xl font-bold underline">Price</h1>
                            <p className="font-Playfair text-[#EFAB00] text-xl">{price}</p>
                        </div>
                        <Link to={'/'} className="btn btn-ghost hover:bg-[#EFAB00] text-xl mt-4">Book Now<FaArrowRightLong /></Link>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src={image} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EstateDetails;