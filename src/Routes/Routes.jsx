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
import PrivateRoute from "../providers/PrivateRoute";



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
                loader:({params})=>fetch(`https://car-doctor-server-iota-nine.vercel.app/services/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut/></PrivateRoute>,
                loader:({params})=>fetch(`https://car-doctor-server-iota-nine.vercel.app/service/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings/></PrivateRoute>,
               
            },
            
            
        ]
    },
]);

export default router
