import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Login from "../Pages/Register-Login/Login/Login";
import Register from "../Pages/Register-Login/Register/Register";
import Error from "../Pages/Shared/Error/Error";
import PrivateProvider from "../Provider/PrivateProvider";
import CartDetails from "../Pages/CartDetails/CartDetails";
import Order from "../Pages/Order/Order";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
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
                loader:({params})=> fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path:"cart",
                element:<CartDetails></CartDetails>
            }
        ]
    },
]);

export default router;