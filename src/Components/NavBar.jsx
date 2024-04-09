import { Link, NavLink } from "react-router-dom";
import logo from '.././assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const NavBar = () => {


    const navLinks = <div className=" flex flex-col md:flex-row gap-5 text-xl font-Work">
        <NavLink to={'/'}><li className="hover:text-[#EFAB00]">Home</li></NavLink>
        <NavLink to={'/update_profile'}><li className="hover:text-[#EFAB00]">Update Profile</li></NavLink>
        <NavLink to={'booking'}><li className="hover:text-[#EFAB00]">Booking</li></NavLink>
    </div>

    const { user, userLogout } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost md:text-4xl font-Playfair font-bold"><span className="flex items-center"><img className="w-10 md:w-16" src={logo} alt="" />Aura Real Estate</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className="flex items-center gap-3">
                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="w-10 rounded-full">
                                <img className="rounded-full" alt="Tailwind CSS Navbar component" src={user.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to={'/update_profile'}>{user?.displayName}</Link></li>
                            </ul>
                        </div>
                        <Link onClick={userLogout} className="btn bg-[#EFAB00]">Logout</Link>
                    </div> :
                    <Link to={'/login'} className="btn bg-[#EFAB00]">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;