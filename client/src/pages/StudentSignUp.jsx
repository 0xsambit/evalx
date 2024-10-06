import React, { useState } from "react";
import { Link } from "react-router-dom";
const InterviewerSignUp = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}
	};
	return (
		<section className='w-full h-screen bg-primary font-poppins'>
			<div className='text-white flex justify-center items-center h-screen flex-col'>
				<section className='flex justify-around items-center w-full'>
					<div>
						<img
							src='https://static.vecteezy.com/system/resources/previews/025/340/141/original/user-support-abstract-concept-illustration-set-job-interview-choosing-a-candidate-prepare-for-interview-recruiter-flat-modern-illustration-vector.jpg'
							alt=''
							className='w-[450px] h-[450px] object-cover rounded-full'
						/>
					</div>
					<div className='flex flex-col items-center w-1/3'>
						<h2 className='font-bold text-3xl text-[#bebebe] my-2'>
							Student Signup
						</h2>

						<form
							className='flex flex-col gap-4 w-full justify-center items-center my-10'
							onSubmit={handleSubmit}>
							<input
								type='text'
								placeholder='Enter your full name'
								className='px-4 py-2 w-full rounded-3xl text-black text-[14px] outline-none'
								required
							/>
							<input
								type='email'
								placeholder='Enter your email'
								className='px-4 py-2 w-full rounded-3xl text-black text-[14px] outline-none'
								required
							/>
							<input
								type='password'
								placeholder='Password'
								className='px-4 py-2 rounded-3xl text-black w-full text-[14px] outline-none'
								required
								security
								onChange={(e) => setPassword(e.target.value)}
							/>
							<input
								type='password'
								placeholder='Confirm Password'
								className='px-4 py-2 rounded-3xl text-black w-full text-[14px] outline-none'
								required
								security
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>

							<label className='text-[12px] flex justify-center items-center gap-2'>
								<input type='checkbox' required />
								By signing up , you agree to our terms and conditions
							</label>

							<button className=' font-poppins px-4 py-2 bg-red-500 hover:bg-red-700 duration-300 rounded-3xl font-medium w-full'>
								Signup
							</button>
						</form>
						<p className='text-sm text-gray-300'>
							Already have your account!! {""}
							<Link
								to='/login'
								className='ml-3 font-semibold hover:text-blue-400 duration-200'>
								Login here
							</Link>
						</p>
					</div>
				</section>
			</div>
		</section>
	);
};

export default InterviewerSignUp;
