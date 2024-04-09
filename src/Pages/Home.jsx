import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import EstateCard from "../Components/EstateCard";

const Home = () => {
    const estates=useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            {/* estates section */}
            <div className="mt-24">
                <h1 className="text-3xl font-Playfair ml-4">Select your next <span className="text-[#EFAB00]">vacation</span> spot</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-10">
                    {
                        estates.map((estate,idx)=><EstateCard
                        key={idx}
                        estate={estate}
                        ></EstateCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;