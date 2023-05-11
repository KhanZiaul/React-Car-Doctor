import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Login from "../Pages/Register-Login/Login/Login";
import Register from "../Pages/Register-Login/Register/Register";
import Error from "../Pages/Shared/Error/Error";
import Checkout from "../Pages/Checkout/Checkout";
import CartDetails from "../Pages/CartDetails/CartDetails";

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
                path:"booking/:id",
                element:<Checkout></Checkout>,
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