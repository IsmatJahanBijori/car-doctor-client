import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ServicesDetails from "../pages/ServicesDetails/ServicesDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";



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
        
            {
                path: '/services/:id',
                element: <ServicesDetails/>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <CheckOut/>,
                loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/bookings',
                element: <Bookings/>,
                loader:()=>fetch('http://localhost:5000/bookings')
            },
            
            
        ]
    },
]);

export default router

{/**{
                path: '/servicesDetails/:id',
                element: <ServicesDetails/>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            }, */}