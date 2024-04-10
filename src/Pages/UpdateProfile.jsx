import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";




const UpdateProfile = () => {

    const { user } = useContext(AuthContext);
    const refreshPage = () => {
        window.location.reload(false);
    }

    const handelUpdateProfile = e => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        updateProfile(auth.currentUser, { displayName: name, photoURL: image })
            .then(result => {
                console.log(result.user);
                refreshPage()

            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className=" bg-[url('https://i.postimg.cc/m2ptyQL3/gest-House.jpg')] bg-no-repeat bg-cover bg-center">
            <div className=" flex flex-col-reverse md:flex-row items-center justify-center md:gap-10 backdrop-blur-sm">
                {/* from */}
                <div className="flex flex-col max-w-md h-dvh p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800  justify-center ">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-2xl md:text-4xl font-bold text-white">Update Your Profile</h1>
                    </div>
                    <form onSubmit={handelUpdateProfile} className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-white mb-2 text-sm">Your name</label>
                                <input type="text" name="name" id="name" placeholder="Name" defaultValue={user?.displayName} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="Image URL" className="block text-white mb-2 text-sm">Image URL</label>
                                <input type="text" name="image" id="image" defaultValue={user?.photoURL} placeholder="Image URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button onClick={refreshPage} type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#EFAB00] hover:text-white">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* profile */}
                <div className=" flex flex-col items-center justify-center max-w-md sm:flex gap-5 sm:space-x-6 text-white mt-10 ">
                    <div className="flex-shrink-0 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={user?.photoURL} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="text-white">{user?.email}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;