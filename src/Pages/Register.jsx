import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="flex items-center lg:m-10 flex-col md:flex-row">
            <div className="font-Playfair text-center md:text-left">
                <h1 className="text-5xl font-bold">
                    Welcome to <span className="text-[#EFAB00]">Aura Real Estate</span> Register Now!</h1>
                <p className="py-6">Welcome to Aura Real Estate, where luxury meets comfort and every stay is an unforgettable experience. Join our exclusive community today by signing up for your personal account. By becoming a member, you all gain access to special offers, personalized recommendations, and seamless booking experiences.</p>
            </div>
            <div className="flex flex-col w-full p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Register</h1>
                    <p className="text-sm dark:text-gray-600">Register to your account</p>
                </div>
                <form className="space-y-12">
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
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#EFAB00] dark:text-gray-50">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600"> Have an account?
                            <Link to={'/login'} className="hover:underline font-bold text-violet-600">Log In</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;