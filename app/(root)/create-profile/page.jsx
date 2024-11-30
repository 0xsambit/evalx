"use client";

import { getEmail } from "@/app/action";
import Image from "next/image";
import { useState, useEffect } from "react";

const Profile = () => {
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchEmail = async () => {
            const email = await getEmail();
            setEmail(email);
        };
        fetchEmail();
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className='flex flex-col justify-center item-center w-full h-full bg-primary text-white font-roboto'>
            <div className=' flex flex-col justify-center items-center py-3 gap-2'>
                <h1 className='font-semibold text-4xl my-3'>Create Profile</h1>
                <p className='text-lg font-semibold'>
                    Choose your role to get started -{" "}
                    <button
                        className={` rounded-xl px-4 ${
                            role == "Recruiter"
                                ? "bg-orange-500 text-white"
                                : "bg-white text-black"
                        }`}
                        onClick={() => setRole("Recruiter")}>
                        Recruiter
                    </button>{" "}
                    or{" "}
                    <button
                        className={`bg-white text-black rounded-xl px-4 ${
                            role == "Candidate"
                                ? "bg-orange-500 text-white"
                                : "bg-white text-black"
                        }`}
                        onClick={() => setRole("Candidate")}>
                        Candidate
                    </button>
                </p>
            </div>
            <div className='bg-primary-300 m-7 rounded-xl py-5'>
                <h1 className='text-2xl font-semibold flex justify-center items-center'>
                    Personal Details
                </h1>
                <div className='flex justify-center items-center w-full'>
                    <form className='px-10 flex flex-col justify-center item-start gap-4 w-full'>
                        <label htmlFor='name' className='font-medium text-lg'>
                            Full name
                        </label>

                        <input
                            type='text'
                            className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl w-1/2 text-gray-300'
                            placeholder='Enter your Full name'
                            required
                        />
                        <label htmlFor='email' className='font-medium text-lg'>
                            Email Address
                        </label>

                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl w-1/2 text-gray-300'
                            required
                        />
                        <label htmlFor='name' className='font-medium text-lg'>
                            Mobile Number
                        </label>

                        <input
                            type='number'
                            className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl w-1/2 text-gray-300'
                            placeholder='Enter your mobile number'
                            required
                        />
                    </form>
                    <div className='flex flex-col items-center'>
                        <form>
                            <label
                                htmlFor='avatar'
                                className='text-lg font-medium mb-2'>
                                Your Profile picture
                            </label>
                            <input
                                type='file'
                                accept='image/*'
                                onChange={handleImageUpload}
                                className='mb-4'
                            />
                        </form>
                        {image && (
                            <div className='w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300'>
                                <Image
                                    src={image}
                                    alt='Profile'
                                    className='w-full h-full object-cover'
                                    width={100}
                                    height={100}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
