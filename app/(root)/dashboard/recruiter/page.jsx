import Image from "next/image";
import Link from "next/link";
import image from "@/app/assets/image.jpeg";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/app/components/ui/dialog";
import Footer from "@/app/components/Footer";
const Recruiter = () => {
    return (
        <section className='w-full min-h-screen text-white font-roboto px-10'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-2xl'>Upcoming Interviews</h1>
                {/* <Link href='/dashboard/recruiter/schedule-interviews'>
                    <button className='button text-black'>
                        Schedule Interviews
                    </button>
                </Link> */}
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-between items-center space-x-4 w-full'>
                    <div className='flex items-center space-x-4'>
                        <Image
                            src={image}
                            alt='pfp'
                            className='size-16 rounded-full'
                        />
                        <div>
                            <h1>John Doe</h1>
                            <p className='text-primary-100'>
                                Full Stack Developer
                            </p>
                        </div>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className='text-3xl'> ... </button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Are you absolutely sure?
                                </DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will
                                    permanently delete your account and remove
                                    your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className='flex flex-col justify-center items-start my-10'>
                <h1 className='font-semibold text-2xl my-5'>
                    Interview History
                </h1>
                <div className='flex justify-between items-center space-x-4 w-full'>
                    <div className='flex items-center space-x-4'>
                        <Image
                            src={image}
                            alt='pfp'
                            className='size-16 rounded-full'
                        />
                        <div>
                            <h1>John Doe</h1>
                            <p className='text-primary-100'>
                                Full Stack Developer
                            </p>
                        </div>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className='text-3xl'> ... </button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Are you absolutely sure?
                                </DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will
                                    permanently delete your account and remove
                                    your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className='flex justify-center items-center w-full m-auto'>
                <Link href='/schedule-interview'>
                    <button className='button text-black'>
                        Schedule Interviews
                    </button>
                </Link>
            </div>
            {/* <div className='w-full'>
                <h1 className='font-semibold text-2xl my-5'>Feedback</h1>
                <div className='w-full flex justify-between items-center space-x-4'>
                    <div className='flex flex-col justify-center items-center w-1/4'>
                        <h1 className='text-4xl font-bold'>4.5</h1>
                        <div>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className='text-white text-2xl'>
                                    {star <= 4.5 ? "★" : "☆"}
                                </span>
                            ))}
                        </div>
                        <h1 className='text-primary-100 text-lg'>2 reviews</h1>
                    </div>
                    <div className='w-full'>
                        <div className='w-full flex justify-center items-center space-x-4'>
                            <div className='h-2 w-full bg-white rounded-full'>
                                <div className='h-full w-3/4 bg-primary-200 rounded-full'></div>
                            </div>
                            <p className='font-bold text-lg'>5</p>
                        </div>
                        <div className='w-full flex justify-center items-center space-x-4'>
                            <div className='h-2 w-full bg-white rounded-full'>
                                <div className='h-full w-2/3 bg-primary-200 rounded-full'></div>
                            </div>
                            <p className='font-bold text-lg'>4</p>
                        </div>
                        <div className='w-full flex justify-center items-center space-x-4'>
                            <div className='h-2 w-full bg-white rounded-full'>
                                <div className='h-full w-11/12 bg-primary-200 rounded-full'></div>
                            </div>
                            <p className='font-bold text-lg'>3</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <hr className='w-[90%] mt-10 flex justify-center items-center m-auto border-gray-400' />
            <Footer />
        </section>
    );
};

export default Recruiter;
