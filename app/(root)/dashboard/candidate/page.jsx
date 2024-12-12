import { auth } from "@/auth";
import Image from "next/image";
import card from "@/app/assets/card.png";
import { BriefcaseBusiness } from "lucide-react";
import { interviews } from "@/app/content";

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
                        <button className='button text-black'>
                            View feedback
                        </button>
                    </div>
                </div>
            ))}

            <div className='w-full flex justify-center items-center m-auto'>
                <button className='button text-black w-1/2'>
                    Get started with our prep guide
                </button>
            </div>
        </section>
    );
};

export default Candiate;
