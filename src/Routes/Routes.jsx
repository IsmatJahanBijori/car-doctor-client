import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
// import ServicesDetails from "../pages/ServicesDetails/ServicesDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
// import LoginLayout from "../Layout/LoginLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register/>
            },
            
        ]
    },
]);

export default router

{/**{
                path: '/servicesDetails',
                element: <ServicesDetails/>
            }, */}