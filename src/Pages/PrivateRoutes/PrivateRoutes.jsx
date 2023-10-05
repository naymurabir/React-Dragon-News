import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return <div className="text-center">
            <span className="loading loading-spinner text-success w-12"></span>
        </div>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;