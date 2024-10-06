import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Login from "./pages/Login";
import "animate.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import InterviewerSignUp from "./pages/InterviewerSignUp";
import StudentSignUp from "./pages/StudentSignUp";
import Recruiter from "./pages/Recruiter";
import Student from "./pages/Student";

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
					<Route path='/' element={<Navigate to='/login' />} />
					<Route
						path='/recruiter'
						element={<ProtectedRoute element={<Recruiter />} />}
					/>
					<Route
						path='/student'
						element={<ProtectedRoute element={<Student />} />}
					/>
					<Route path='/login' element={<Login />} />
					<Route path='/interviewsignup' element={<InterviewerSignUp />} />
					<Route path='/studentsignup' element={<StudentSignUp />} />
					<Route path='*' element={<Login />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
};

export default App;
