import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "animate.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<ProtectedRoute element={<Home />} />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
};

export default App;
