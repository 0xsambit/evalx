import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const InterviewerSignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			await setDoc(doc(db, "recruiter", user.uid), {
				email: user.email,
				role: "recruiter",
			});

			alert("Signup successful");
			navigate("/recruiter");
		} catch (error) {
			alert("Signup failed: " + error.message);
			setEmail("");
			setPassword("");
			setConfirmPassword("");
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
					<div className='flex flex-col items-center'>
						<h2 className='font-bold text-3xl text-[#bebebe] my-2'>
							Recruiter/Interviewer Signup
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
							<input
								type='password'
								placeholder='Confirm Password'
								className='px-4 py-2 rounded-3xl text-black w-full text-[14px] outline-none'
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
								security
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