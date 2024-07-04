import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AdminPaths } from "./Admin.routes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
    {
        path: '/admin',
        element: <App></App>,
        children: AdminPaths,
    },
    {
        path: '/faculty',
        element: <App></App>,
        children: AdminPaths,
    },
    {
        path: '/student',
        element: <App></App>,
        children: AdminPaths,
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])

export default router;