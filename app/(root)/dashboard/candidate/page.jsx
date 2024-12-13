import { auth } from "@/auth";
import Image from "next/image";
import card from "@/app/assets/card.png";
import { BriefcaseBusiness } from "lucide-react";
import { insights, interviews } from "@/app/content";
import Chart from "@/app/components/Chart";
import Footer from "@/app/components/Footer";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/app/components/ui/dialog";

const Candiate = async () => {
    const session = await auth();
    const date = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <section className='w-full h-full bg-primary text-white px-10 font-roboto'>
            <div className='py-5 text-xl text-primary-100'>
                <h1 className='font-semibold '>
                    Welcome,
                    <span className='font-bold'> {session.user.name} !!</span>
                </h1>
            </div>
            <h1 className='text-xl font-medium mb-10'>
                Your upcoming interviews ....
            </h1>
            <div className='upcoming bg-primary-200 py-5 text-white flex justify-center items-center m-auto gap-10 rounded-xl '>
                <div className='flex flex-col justify-center'>
                    <p>{date}</p>
                    <h1 className='font-semibold text-3xl'>
                        Design a credit card checkout flow
                    </h1>
                    <p>
                        You&apos;ll have 1 hour to complete the task. You can
                        use your own design tool and upload your final design to
                        EvalX
                    </p>
                    <button className='button w-40 text-black'>
                        Join interview
                    </button>
                </div>
                <div>
                    <Image src={card} alt='interview' />
                </div>
            </div>
            <h1 className='text-2xl font-bold my-5'>Your recent interviews</h1>
            {interviews.map((e) => (
                <div
                    className='my-5 bg-black rounded-xl w-2/3 m-auto'
                    key={e.id}>
                    <div className='flex justify-between items-center gap-10 px-5'>
                        <div className='flex justify-center items-center gap-5'>
                            <BriefcaseBusiness
                                className='bg-primary-100 p-2 rounded-lg'
                                size={40}
                            />
                            <div>
                                <h1 className='font-medium'>{e.title}</h1>
                                <p className='text-primary-100'>{e.date}</p>
                            </div>
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className='button text-black'>
                                    View Feedback
                                </button>
                            </DialogTrigger>
                            <DialogContent className='sm:max-w-md bg-black text-white'>
                                <DialogHeader>
                                    <DialogTitle className='font-bold text-2xl text-primary-100 mb-2'>
                                        Interview Feedback
                                    </DialogTitle>
                                    <div className='text-white font-extralight leading-7'>
                                        <div>
                                            Great job on the interview! You
                                            demonstrated strong problem-solving
                                            skills and a good understanding of
                                            design principles. However, there
                                            are a few areas for improvement:
                                        </div>
                                        <ul className='list-disc list-inside'>
                                            <li>
                                                Consider improving the user flow
                                                to make it more intuitive.
                                            </li>
                                            <li>
                                                Pay attention to the alignment
                                                and spacing of elements.
                                            </li>
                                            <li>
                                                Try to use more consistent color
                                                schemes.
                                            </li>
                                        </ul>
                                        <p>
                                            Overall, we were impressed with your
                                            performance and look forward to
                                            seeing more of your work in the
                                            future.
                                        </p>
                                    </div>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            ))}
            <h1 className='text-2xl font-bold my-5'>Performance Insights</h1>
            <Chart />
            <div className='flex items-center justify-center m-auto flex-wrap'>
                {insights.map((card) => (
                    <div
                        key={card.id}
                        className='bg-black rounded-xl shadow-lg p-5 m-4 w-96 text-center'>
                        <h1 className='text-base font-medium mb-2'>
                            {card.title}
                        </h1>
                        <p className='text-3xl font-bold'>{card.value}</p>
                    </div>
                ))}
            </div>
            <div className='w-full flex justify-center items-center m-auto'>
                <button className='button text-black w-1/2'>
                    Get started with our prep guide
                </button>
            </div>
            <hr className='w-[90%] mt-10 flex justify-center items-center m-auto border-gray-400' />
            <Footer />
        </section>
    );
};

export default Candiate;
