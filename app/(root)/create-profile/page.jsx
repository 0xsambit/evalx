"use client";

import { getEmail } from "@/app/action";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { skills } from "@/app/content";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/app/components/Footer";
const Profile = () => {
    const [role, setRole] = useState("Candidate");
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
                        className={` rounded-xl px-4 ${
                            role == "Candidate"
                                ? "bg-orange-500 text-white"
                                : "bg-white text-black"
                        }`}
                        onClick={() => setRole("Candidate")}>
                        Candidate
                    </button>
                </p>
            </div>
            <div className='section flex flex-col justify-center items-center m-auto'>
                <h1 className='text-3xl font-semibold text-center'>
                    Personal Details
                </h1>
                <div className='flex justify-around items-center w-full'>
                    <form className='px-10 flex flex-col justify-center item-start gap-4 w-1/2'>
                        <label htmlFor='name' className='font-medium text-lg'>
                            Full name
                        </label>

                        <input
                            type='text'
                            className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl w-3/4 text-gray-300'
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
                            className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl w-3/4 text-gray-300'
                            required
                        />
                        <label htmlFor='name' className='font-medium text-lg'>
                            Mobile Number
                        </label>

                        <input
                            type='tel'
                            className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl w-3/4 text-gray-300'
                            placeholder='Enter your mobile number'
                            required
                        />
                    </form>
                    {/*Image Upload */}

                    <div className='flex justify-center items-center gap-10'>
                        <h1 className='text-2xl font-medium'>
                            Profile Picture --{" "}
                        </h1>
                        <label htmlFor='avatar' className='cursor-pointer'>
                            <div className='w-32 h-32 bg-gray-300 text-black rounded-full flex items-center justify-center overflow-hidden border border-dashed border-gray-500'>
                                {image ? (
                                    <Image
                                        src={image}
                                        alt='Profile'
                                        className='w-full h-full object-cover'
                                        width={128}
                                        height={128}
                                    />
                                ) : (
                                    <span className='text-sm font-medium'>
                                        Upload Image
                                    </span>
                                )}
                            </div>
                        </label>
                        <input
                            id='avatar'
                            type='file'
                            accept='image/*'
                            onChange={handleImageUpload}
                            className='hidden'
                        />
                    </div>
                </div>
            </div>
            {role == "Candidate" ? (
                <>
                    <div className='section'>
                        <h1 className='text-3xl font-semibold text-center my-3'>
                            Profile Details
                        </h1>
                        <form className='flex flex-col justify-center items-start px-10'>
                            <h1 className='text-xl font-medium'>
                                Skills / Expertise
                            </h1>
                            {skills.map((skill) => (
                                <div
                                    className='flex  justify-center items-center gap-5 h-10'
                                    key={skill.id}>
                                    <Checkbox
                                        label={skill.code}
                                        className='bg-white'
                                    />
                                    <label htmlFor='skills'>{skill.name}</label>
                                </div>
                            ))}
                            <input
                                type='text'
                                placeholder='Others ..'
                                className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl text-gray-300 mt-5'
                            />
                            <div className='flex justify-center items-center gap-5'>
                                <h1 className='text-xl font-medium mt-6 mb-4'>
                                    Experience
                                </h1>
                                <input type='radio' />
                                <label htmlFor='experience'>Fresher</label>
                                <input type='radio' />
                                <label htmlFor='experience'>1-2 years</label>
                                <input type='radio' />
                                <label htmlFor='experience'>3-5 years</label>
                                <input type='radio' />
                                <label htmlFor='experience'>5+ years</label>
                            </div>
                            <div className='flex justify-start items-center gap-10 w-full my-5'>
                                <label
                                    htmlFor='linkedin'
                                    className='font-medium text-lg w-1/4'>
                                    LinkedIn Profile URL
                                </label>
                                <input
                                    type='url'
                                    id='linkedin'
                                    name='linkedin'
                                    placeholder='Enter your LinkedIn profile URL'
                                    className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl text-gray-300 w-1/2'
                                />
                            </div>
                            <div className='flex justify-start items-center gap-10 w-full my-5'>
                                <label
                                    htmlFor='github'
                                    className='font-medium text-lg w-1/4'>
                                    Github Profile URL
                                </label>
                                <input
                                    type='url'
                                    id='github'
                                    name='github'
                                    placeholder='Enter your Github profile URL'
                                    className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl text-gray-300 w-1/2'
                                />
                            </div>
                            <div className='flex justify-start items-center gap-10 w-full my-5'>
                                <label
                                    htmlFor='portfolio'
                                    className='font-medium text-lg w-1/4'>
                                    Portfolio URL
                                </label>
                                <input
                                    type='url'
                                    id='portfolio'
                                    name='portfolio'
                                    placeholder='Enter your Portfolio URL'
                                    className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl text-gray-300 w-1/2'
                                />
                            </div>
                        </form>
                    </div>
                    <div className='section'>
                        <h1 className='font-semibold text-3xl text-center mb-5'>
                            Additional Information
                        </h1>
                        <p className='mx-10 font-medium text-xl'>
                            {" "}
                            Describe Yourself
                        </p>
                        <Textarea
                            placeholder='Describe abit about yourself'
                            className='w-2/3 m-auto'
                        />
                    </div>
                    <div className='flex justify-center items-center m-auto w-full my-10'>
                        <Button className='bg-white text-black font-medium text-lg rounded-xl w-2/3 hover:bg-black hover:text-white duration-200 ease-linear'>
                            Submit your details
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <div className='section'>
                        <h1 className='text-3xl font-semibold text-center my-3'>
                            Company Details
                        </h1>
                        <form className='flex flex-col justify-center items-start px-10'>
                            <div className='flex justify-start items-center gap-10 w-full my-5'>
                                <label
                                    htmlFor='portfolio'
                                    className='font-medium text-lg w-1/4'>
                                    Company Name
                                </label>
                                <input
                                    type='url'
                                    id='company'
                                    name='company'
                                    placeholder='Your Company Name'
                                    className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl text-gray-300 w-1/2'
                                />
                            </div>
                            <div className='flex justify-start items-center gap-10 w-full my-5'>
                                <label
                                    htmlFor='portfolio'
                                    className='font-medium text-lg w-1/4'>
                                    Job Role / Position
                                </label>
                                <input
                                    type='url'
                                    id='job'
                                    name='job'
                                    placeholder='Specify the Job Role requirement for the candidate'
                                    className='bg-inherit border border-white outline-none px-5 py-2 rounded-xl text-gray-300 w-1/2'
                                />
                            </div>
                        </form>
                    </div>
                </>
            )}
            <Footer />
        </section>
    );
};

export default Profile;
