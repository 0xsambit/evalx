import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Login = () => {
	const [role, setRole] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleRoleSelection = (selectedRole) => {
		setRole(selectedRole);
	};

	const handleBackClick = () => {
		setRole("");
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			const userDoc = await getDoc(doc(db, role, user.uid));
			if (userDoc.exists()) {
				alert("Logged in successfully");
				if (role === "recruiter") {
					navigate("/recruiter");
				} else {
					navigate("/student");
				}
			} else {
				alert("User not found");
			}
		} catch (error) {
			alert("Login failed");
			setEmail("");
			setPassword("");
		}
	};
	return (
		<section className='w-full h-screen bg-primary font-poppins'>
			<div className='text-white flex justify-center items-center h-screen flex-col'>
				{!role ? (
					<>
						<p className='font-bold text-5xl text-[#bebebe] my-10'>
							Who are you !!
						</p>
						<div className='flex w-full justify-center items-center gap-10'>
							<button
								className='px-4 py-2 bg-gray-300 rounded-lg text-black font-semibold'
								onClick={() => handleRoleSelection("recruiter")}>
								Recruiter/Interviewer
							</button>
							<button
								className='px-4 py-2 bg-gray-300 rounded-lg text-black font-semibold'
								onClick={() => handleRoleSelection("student")}>
								Student/Interviewee
							</button>
						</div>
					</>
				) : role === "recruiter" ? (
					<section className='flex justify-around items-center w-full'>
						<div>
							<img
								src='https://static.vecteezy.com/system/resources/previews/025/340/141/original/user-support-abstract-concept-illustration-set-job-interview-choosing-a-candidate-prepare-for-interview-recruiter-flat-modern-illustration-vector.jpg'
								alt=''
								className='w-[450px] h-[450px] object-cover rounded-full'
							/>
						</div>
						<div className='flex flex-col items-center'>
							<h2 className='font-bold text-3xl text-[#bebebe] my-2'>
								Recruiter/Interviewer Login
							</h2>
							<p className='text-center text-gray-400 font-poppins'>
								Welcome Back
							</p>
							<form
								className='flex flex-col gap-4 w-full justify-center items-center my-10'
								onSubmit={handleLogin}>
								<input
									type='email'
									placeholder='Enter your email'
									className='px-4 py-2 w-full rounded-3xl text-black text-[14px] outline-none'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									type='password'
									placeholder='Password'
									className='px-4 py-2 rounded-3xl text-black w-full text-[14px] outline-none'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									security
								/>
								<button className='px-4 py-2 bg-gray-400 hover:bg-gray-600 duration-300 hover:text-white rounded-3xl text-black font-medium w-full'>
									Login
								</button>
							</form>
							<p className='text-sm text-gray-300'>
								Don't have a account?
								<Link to='/interviewsignup' className='ml-2 font-semibold'>
									Sign Up
								</Link>
							</p>
							<button
								className='text-sm mt-4 px-4 py-2 bg-red-500 duration-300 hover:bg-red-600 rounded-3xl font-medium w-2/3'
								onClick={handleBackClick}>
								Back to Role Selection
							</button>
						</div>
					</section>
				) : (
					<section className='flex justify-around items-center w-full'>
						<div>
							<img
								src='https://static.vecteezy.com/system/resources/previews/025/340/141/original/user-support-abstract-concept-illustration-set-job-interview-choosing-a-candidate-prepare-for-interview-recruiter-flat-modern-illustration-vector.jpg'
								alt=''
								className='w-[450px] h-[450px] object-cover rounded-full'
							/>
						</div>
						<div className='flex flex-col items-center'>
							<h2 className='font-bold text-3xl text-[#bebebe] my-2'>
								Student/ Interviewee Login
							</h2>
							<p className='text-center text-gray-400 font-poppins'>
								Welcome Back
							</p>
							<form
								className='flex flex-col gap-4 w-full justify-center items-center my-10'
								onSubmit={handleLogin}>
								<input
									type='email'
									placeholder='Enter your email'
									className='px-4 py-2 w-full rounded-3xl text-black text-[14px] outline-none'
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									type='password'
									placeholder='Password'
									className='px-4 py-2 rounded-3xl text-black w-full text-[14px] outline-none'
									required
									security
									onChange={(e) => setPassword(e.target.value)}
								/>
								<button className='px-4 py-2 bg-gray-400 hover:bg-gray-600 duration-300 hover:text-white rounded-3xl text-black font-medium w-full'>
									Login
								</button>
							</form>
							<p className='text-sm text-gray-300'>
								Don't have a account?
								<Link to='/studentsignup' className='ml-2 font-semibold'>
									Sign Up
								</Link>
							</p>
							<button
								className='mt-4 px-4 py-2 bg-red-500 duration-300 hover:bg-red-600 rounded-3xl font-medium w-2/3 text-sm'
								onClick={handleBackClick}>
								Back to Role Selection
							</button>
						</div>
					</section>
				)}
			</div>
		</section>
	);
};

export default Login;