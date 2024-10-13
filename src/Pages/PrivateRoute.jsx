import { useContext } from "react";
import { AuthContext } from "./Shared/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;