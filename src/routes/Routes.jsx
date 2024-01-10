import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../layouts/Home/Home";
import Registration from "../layouts/Registration/Registration";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '/', element: <Home /> }
        ]
    },
    {
        path: '/registration',
        element: <Registration />,
    }
]);

export default router;