import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../layouts/Home/Home";
import Registration from "../layouts/Registration/Registration";
import Login from "../layouts/Login/Login";
import Products from "../layouts/Products/Products";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> },
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
]);

export default router;