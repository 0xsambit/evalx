import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ element }) => {
	const { isAuthenticated } = useContext(AuthContext);

	return isAuthenticated ? element : <Navigate to='/login' />;
};

export default ProtectedRoute;
