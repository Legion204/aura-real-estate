import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { Helmet } from "react-helmet-async";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";


const Register = () => {

    const { userRegister,setUser } = useContext(AuthContext);
    const [regError, setRegError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const navigate=useNavigate()

    const handelRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
            return setRegError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long"
            )
        }
        else setRegError('')
        // user registration
        userRegister(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(auth.currentUser, { displayName: name, photoURL: image });
                setUser({displayName:name,photoURL:image})
                toast.success('Registration complete successfully');
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                toast.error('Registration failed! Try again');
            })

    };


    return (
        <div>
            <Helmet>
                <title>Aura Ventures | Register</title>
            </Helmet>
            <div className="flex items-center lg:m-10 flex-col md:flex-row">
                <div data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay='1' className="font-Playfair text-center md:text-left">
                    <h1 className="text-5xl font-bold">
                        Welcome to <span className="text-[#EFAB00]">Aura Ventures</span><br /> Register Now!</h1>
                    <p className="py-6">Welcome to Aura Real Estate, where luxury meets comfort and every stay is an unforgettable experience. Join our exclusive community today by signing up for your personal account. By becoming a member, you all gain access to special offers, personalized recommendations, and seamless booking experiences.</p>
                </div>
                <div className="flex flex-col w-full p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Register</h1>
                    </div>
                    <form onSubmit={handelRegister} className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm">Your name</label>
                                <input type="text" name="name" id="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="Image URL" className="block mb-2 text-sm">Image URL</label>
                                <input type="text" name="image" id="image" placeholder="Image URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="Email" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div className="relative">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                                </div>
                                <input type={showPass ? "text" : "password"} name="password" id="password" placeholder="Password" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                <span className="absolute bottom-3 right-4 text-xl" onClick={() => setShowPass(!showPass)}>{showPass ? <IoMdEyeOff /> : <IoMdEye />}</span>
                            </div>
                            {regError && <small className="text-red-500">{regError}</small>}
                        </div>
                        <div className="space-y-5">
                            <div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#EFAB00] dark:text-gray-50">Register</button>
                            </div>
                            <p className="px-6 text-sm text-center dark:text-gray-600"> Have an account?
                                <Link to={'/login'} className="hover:underline font-bold text-[#EFAB00]">Log In</Link>.
                            </p>
                        </div>
                    </form>
                </div>
                {/* <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                    transition:Bounce /> */}
            </div>
        </div>
    );
};

export default Register;