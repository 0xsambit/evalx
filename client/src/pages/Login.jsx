import React, { useState } from "react";

const Login = () => {
	const [role, setRole] = useState("");

	const handleRoleSelection = (selectedRole) => {
		setRole(selectedRole);
	};

	const handleBackClick = () => {
		setRole("");
	};

	return (
		<section className='w-full h-screen bg-primary'>
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
					<div className='flex flex-col items-center'>
						<h2 className='font-bold text-3xl text-[#bebebe] my-10'>
							Recruiter/Interviewer Login
						</h2>
						<form className='flex flex-col gap-4 w-full justify-center items-center'>
							<input
								type='text'
								placeholder='Username'
								className='px-4 py-2 w-full rounded-lg text-black'
							/>
							<input
								type='password'
								placeholder='Password'
								className='px-4 py-2 rounded-lg text-black w-full'
							/>
							<button className='px-4 py-2 bg-gray-300 rounded-lg text-black font-semibold  '>
								Login
							</button>
						</form>
						<button
							className='mt-4 px-4 py-2 bg-red-300 rounded-lg text-black font-semibold'
							onClick={handleBackClick}>
							Back to Role Selection
						</button>
					</div>
				) : (
					<div className='flex flex-col items-center'>
						<h2 className='font-bold text-3xl text-[#bebebe] my-10'>
							Student/Interviewee Login
						</h2>
						<form className='flex flex-col gap-4 w-full justify-center items-center'>
							<input
								type='text'
								placeholder='Username'
								className='px-4 py-2 rounded-lg text-black w-full'
							/>
							<input
								type='password'
								placeholder='Password'
								className='px-4 py-2 rounded-lg text-black w-full'
							/>
							<button className='px-4 py-2 bg-gray-300 rounded-lg text-black font-semibold'>
								Login
							</button>
						</form>
						<button
							className='mt-4 px-4 py-2 bg-red-300 rounded-lg text-black font-semibold'
							onClick={handleBackClick}>
							Back to Role Selection
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Login;
