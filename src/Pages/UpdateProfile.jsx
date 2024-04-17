import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {

    const { user,setUser } = useContext(AuthContext);

    const handelUpdateProfile = e => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        updateProfile(auth.currentUser, { displayName: name, photoURL: image });
        setUser({displayName:name,photoURL:image});
        toast.success('Profile Updated. please reload the page.')
    }


    return (
        <div>
            <Helmet>
                <title>Aura Ventures | Update Profile</title>
            </Helmet>
            <div className=" bg-[url('https://i.postimg.cc/m2ptyQL3/gest-House.jpg')] bg-no-repeat bg-cover bg-center">
                <div className=" flex flex-col-reverse md:flex-row items-center justify-center md:gap-10 backdrop-blur-sm">
                    {/* from */}
                    <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col max-w-md md:h-dvh p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800  justify-center ">
                        <div className="mb-8 text-center">
                            <h1 className="my-3 text-2xl md:text-4xl font-bold text-white">Update Your Profile</h1>
                        </div>
                        <form onSubmit={handelUpdateProfile} className="space-y-12 md:w-[330px]">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-white mb-2 text-sm">Your name</label>
                                    <input type="text" name="name" id="name" placeholder="Name" defaultValue={user?.displayName} onFocus={(e) => e.target.value = ""} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                </div>
                                <div>
                                    <label htmlFor="Image URL" className="block text-white mb-2 text-sm">Image URL</label>
                                    <input type="text" name="image" onFocus={(e) => e.target.value = ""} id="image" defaultValue={user?.photoURL} placeholder="Image URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#EFAB00] hover:text-white">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* profile */}
                    <div data-aos="fade-left" data-aos-duration="1000"  className=" flex flex-col items-center justify-center max-w-md sm:flex gap-5 sm:space-x-6 text-white mt-10 text-center ">
                        <div className="flex-shrink-0 h-32 w-32 mb-0">
                            <img src={user.photoURL ? user.photoURL : "https://i.postimg.cc/TYTdGph6/man.png"} alt="" className="object-cover object-center w-full h-full rounded" />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div>
                                <h2 className="text-2xl font-semibold">Name: {user?.displayName}</h2>
                            </div>
                            <div className="space-y-1">
                                <h1 className="text-2xl space-x-2 text-white">Email: {user?.email}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;