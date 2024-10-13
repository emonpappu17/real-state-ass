import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import PropertyDetail from "../Pages/PropertyDetail";
import Register from "../Pages/Register";
import PrivateRoute from "../Pages/PrivateRoute";
import UpdateProfile from "../Pages/Shared/UpdateProfile";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/property/:id',
                element: <PrivateRoute><PropertyDetail></PropertyDetail></PrivateRoute>,
                loader: () => fetch('data.json')
            },
            {
                path: 'updateProfile',
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    }
])

export default route;