import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);

export default router;