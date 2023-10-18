import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="container mx-auto flex justify-center items-center h-48">
            <span className="loading loading-spinner text-neutral loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to={"/login"} state={location.pathname ? location.pathname : ''} />
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}