import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../layouts/Home/Home";
import Registration from "../layouts/Registration/Registration";
import Login from "../layouts/Login/Login";
import Products from "../layouts/Products/Products";
import Order from "../layouts/Order/Order";
import Dashboard from "../layouts/Dashboard/Dashboard"
import User from "../layouts/Dashboard/UserDash/User/User"
import Cart from "../layouts/Dashboard/UserDash/Cart/Cart"
import Wishlist from "../layouts/Dashboard/UserDash/Wishlist/Wishlist"
import Review from "../layouts/Dashboard/UserDash/Review/Review"
import History from "../layouts/Dashboard/UserDash/History/History"



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> },
            { path: '/order', element: <Order /> },
        ]
    },
    {
        path: '/registration',
        element: <Registration />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            // user
            {
                path: '/dashboard/user',
                element: <User />
            },
            {
                path: '/dashboard/cart',
                element: <Cart />
            },
            {
                path: '/dashboard/wishlist',
                element: <Wishlist />
            },
            {
                path: '/dashboard/review',
                element: <Review />
            },
            {
                path: '/dashboard/history',
                element: <History />
            },


            // admin
            // {
            //     path: '/dashboard/wishlist',
            //     element: 
            // },
            // {
            //     path: '/dashboard/wishlist',
            //     element: 
            // },
            // {
            //     path: '/dashboard/wishlist',
            //     element: 
            // },
            // {
            //     path: '/dashboard/wishlist',
            //     element: 
            // },
        ]
    }
]);

export default router;