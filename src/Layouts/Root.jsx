import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from "react-toastify";
AOS.init();


const Root = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;