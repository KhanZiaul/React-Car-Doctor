import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Login from "../Pages/Register-Login/Login/Login";
import Register from "../Pages/Register-Login/Register/Register";
import Error from "../Pages/Shared/Error/Error";
import PrivateProvider from "../Provider/PrivateProvider";
import Order from "../Pages/Order/Order";
import CheckOut from "../Pages/Checkout/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        // errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"order/:id",
                element:<PrivateProvider> <Order></Order> </PrivateProvider>,
                loader:({params})=> fetch(`https://react-car-doctor.vercel.app/services/${params.id}`)
            },
            {
                path:"checkout",
                element:<PrivateProvider><CheckOut></CheckOut></PrivateProvider> 
            }
        ]
    },
]);

export default router;