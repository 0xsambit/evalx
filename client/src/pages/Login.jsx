import React, { useState } from "react";
import { images } from "../constants";
import { Link } from "react-router-dom";
const Login = () => {
	const [role, setRole] = useState("");

	const handleRoleSelection = (selectedRole) => {
		setRole(selectedRole);
	};

	const handleBackClick = () => {
		setRole("");
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
							<form className='flex flex-col gap-4 w-full justify-center items-center my-10'>
								<input
									type='email'
									placeholder='Enter your email'
									className='px-4 py-2 w-full rounded-3xl text-black text-[14px] outline-none'
								/>
								<input
									type='password'
									placeholder='Password'
									className='px-4 py-2 rounded-3xl text-black w-full text-[14px] outline-none'
								/>
								<button className='px-4 py-2 bg-gray-300 hover:bg-gray-600 duration-300 hover:text-white rounded-3xl text-black font-medium w-full'>
									Login
								</button>
							</form>
							<p className='text-sm text-gray-300'>
								Don't have a account? Sign Up
							</p>
							<button
								className='mt-4 px-4 py-2 bg-red-300 duration-300 hover:bg-red-400 rounded-3xl text-black font-medium'
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
							<form className='flex flex-col gap-4 w-full justify-center items-center my-10'>
								<input
									type='email'
									placeholder='Enter your email'
									className='px-4 py-2 w-full rounded-3xl text-black text-[14px] outline-none'
								/>
								<input
									type='password'
									placeholder='Password'
									className='px-4 py-2 rounded-3xl text-black w-full text-[14px] outline-none'
								/>
								<button className='px-4 py-2 bg-gray-300 hover:bg-gray-600 duration-300 hover:text-white rounded-3xl text-black font-medium w-full'>
									Login
								</button>
							</form>
							<p className='text-sm text-gray-300'>
								Don't have a account? Sign Up
							</p>
							<button
								className='mt-4 px-4 py-2 bg-red-300 duration-300 hover:bg-red-400 rounded-3xl text-black font-medium'
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
