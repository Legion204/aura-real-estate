import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Root = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;