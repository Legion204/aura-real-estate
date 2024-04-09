import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import EstateDetails from "../Pages/EstateDetails";
import PrivetRoute from "./PrivetRoute";
import UpdateProfile from "../Pages/UpdateProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader:()=>fetch('/RealEstates.json'),
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/estate/:id',
                element:<PrivetRoute><EstateDetails></EstateDetails></PrivetRoute>,
                loader:()=>fetch('/RealEstates.json')
            },
            {
                path:'/update_profile',
                element:<UpdateProfile></UpdateProfile>
            }
        ]
    }
]);

export default router;