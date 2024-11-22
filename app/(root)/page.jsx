import { auth, signIn } from "@/auth";
import Link from "next/link";
import bgImage from "@/app/assets/maxresdefault.jpg";
import Image from "next/image";
import { CardContent, Testimonials } from "@/app/content";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel";
import ComingSoon from "@/app/components/ComingSoon";
const Home = async () => {
    const session = await auth();

    return (
        <section className='flex flex-col items-start justify-center w-full h-full bg-black -z-0 text-white'>
            <div className='bg-container z-10 py-36'>
                <Image
                    src={bgImage}
                    alt='background image'
                    className='bg-image'
                />
                <div className='overlay-content flex flex-col justify-center items-center gap-2 text-center m-auto'>
                    <h1 className=' text-5xl font-bold'>Welcome to EvalX</h1>
                    <p className=' text-xl font-semibold mt-5 mb-10'>
                        Your ultimate platform to conduct seamless technical
                        interviews
                    </p>
                    {session ? (
                        <div className='flex justify-center items-center gap-5 '>
                            <Link href={`/dashboard/${session.user.name}`}>
                                <button
                                    type='button'
                                    className='button text-black'>
                                    Get Started
                                </button>
                            </Link>
                            <Link
                                href='/user-manual'
                                className='button text-black'>
                                Instructions to use
                            </Link>
                        </div>
                    ) : (
                        <form
                            action={async () => {
                                "use server";
                                await signIn("google");
                            }}>
                            <button type='submit' className='button text-black'>
                                Get Started
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <div className='flex flex-col items-center justify-around m-auto'>
                <div className='flex justify-center items-end gap-4 my-10'>
                    <h1 className='font-bold text-3xl'>
                        What&apos;s in EvalX?
                    </h1>
                    <span className='text-gray-300 text-lg'>
                        Everything you need to hire an developer
                    </span>
                </div>
                <div className='flex items-center justify-center m-auto'>
                    {CardContent.map((card) => (
                        <div
                            key={card.id}
                            className='bg-white rounded-lg shadow-lg p-5 m-5 w-96 text-center text-black'>
                            <div className='flex items-center justify-center mb-3'>
                                {card.icon}
                            </div>
                            <h1 className='text-xl font-semibold mb-2'>
                                {card.title}
                            </h1>
                            <p className='text-sm font-regular'>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='w-[90%] mt-10 flex justify-center items-center m-auto border-gray-400' />
            <div className='flex justify-center items-center px-16 flex-col '>
                <h1 className='font-bold text-4xl mt-10'>Testimonials</h1>
                <Carousel
                    className='w-1/2 bg-[#141414] border border-gray-500 rounded-xl px-5 my-10 pb-5 hover:bg-[#1a1a1f] duration-300 ease-in-out hover:cursor-default'
                    opts={{ loop: true }}>
                    <CarouselPrevious className='bg-black border-none' />

                    <CarouselNext className='bg-black border-none' />

                    <CarouselContent>
                        {Testimonials.map((item) => (
                            <CarouselItem key={item.id}>
                                <div className='flex flex-col items-center justify-center gap-5'>
                                    <h1 className='font-bold text-2xl'>
                                        {item.title}
                                    </h1>
                                    <p className='text-justify'>{item.desc}</p>
                                    <span className='font-semibold text-lg'>
                                        - {item.name}
                                    </span>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <hr className='w-[90%] mt-10 flex justify-center items-center m-auto border-gray-400' />
            <div className='w-full flex justify-center items-center flex-col'>
                <h1 className='font-bold text-4xl text-center my-10'>
                    Workflow of our product
                </h1>
                <ComingSoon />
            </div>
        </section>
    );
};

export default Home;
