import { auth, signIn } from "@/auth";
import Link from "next/link";
import bgImage from "@/app/assets/maxresdefault.jpg";
import Coming from "@/app/assets/coming-soon.jpeg";
import Image from "next/image";
import { CardContent, Testimonials, logo, FAQ } from "@/app/content";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion";
import Footer from "../components/Footer";
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
                            <Link href='/create-profile'>
                                <button
                                    type='button'
                                    className='button !px-4 !py-1 !my-5 !rounded-3xl text-black'>
                                    Go to Dashboard
                                </button>
                            </Link>
                            <Link
                                href='/user-manual'
                                className='button !px-4 !py-1 !my-5 !rounded-3xl text-black'>
                                Instructions to use
                            </Link>
                        </div>
                    ) : (
                        <form
                            action={async () => {
                                "use server";
                                await signIn("google");
                            }}>
                            <button
                                type='submit'
                                className='button !px-4 !py-1 !my-5 !rounded-3xl text-black'>
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
                    <span className='text-gray-300 text-lg font-medium'>
                        Everything you need to hire an developer
                    </span>
                </div>
                <div className='flex items-center justify-center m-auto flex-wrap'>
                    {CardContent.map((card) => (
                        <div
                            key={card.id}
                            className='bg-white rounded-xl shadow-lg p-5 m-4 w-96 text-center text-black'>
                            <div className='flex items-center justify-center mb-2'>
                                {card.icon}
                            </div>
                            <h1 className='text-2xl font-semibold mb-2'>
                                {card.title}
                            </h1>
                            <p className='text-sm font-regular'>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <hr className='w-[90%] mt-10 flex justify-center items-center m-auto border-gray-400' /> */}
            <div className='flex justify-center items-center px-16 flex-col my-10'>
                <h1 className='font-bold text-4xl mt-10'>Testimonials</h1>
                <Carousel
                    className=' flex flex-col justify-center items-center  h-60 bg-[#141414] border border-gray-500 rounded-xl px-5 my-10 pb-5 hover:bg-[#1a1a1f] duration-300 ease-in-out hover:cursor-default'
                    opts={{ loop: true }}>
                    <CarouselPrevious className='bg-black border-none' />

                    <CarouselNext className='bg-black border-none' />

                    <CarouselContent>
                        {Testimonials.map((item) => (
                            <CarouselItem key={item.id}>
                                <div className='flex flex-col items-center justify-center gap-5'>
                                    <h1 className='font-bold text-2xl'>
                                        {item.tagline}
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
            <div className='w-full px-20 flex flex-col justify-center items-center my-20 gap-7 font-roboto'>
                <h1 className='font-medium text-4xl'>
                    Easily integrated with popular tools
                </h1>
                <div className='flex justify-center items-center m-auto gap-5'>
                    <Image
                        src={logo.github}
                        alt='github logo'
                        className='w-20'
                    />
                    <Image
                        src={logo.google}
                        alt='github logo'
                        className='w-20'
                    />
                    <Image
                        src={logo.slack}
                        alt='github logo'
                        className='w-20'
                    />
                </div>
            </div>
            <hr className='w-[90%] mt-10 flex justify-center items-center m-auto border-gray-500' />
            <div className='flex flex-col justify-center items-center m-auto my-10'>
                <h1 className='font-medium text-4xl font-roboto'>
                    Demo Workflow
                </h1>
                <Image src={Coming} alt='coming soon' className='w-[600px]' />
            </div>
            <hr className='w-[90%] mt-10 flex justify-center items-center m-auto border-gray-500' />
            <div className='flex flex-col justify-center items-center m-auto my-10 w-full'>
                <h1 className='font-medium text-4xl font-roboto '>
                    FAQ - Frequently Asked Questions
                </h1>
                <Accordion type='single' collapsible className='w-1/2 mt-5'>
                    {FAQ.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={`item-${item.id}`}
                            className='my-3'>
                            <AccordionTrigger className='text-xl'>
                                {item.tagline}
                            </AccordionTrigger>
                            <AccordionContent className='text-base'>
                                {item.desc}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <hr className='w-full mt-10 flex justify-center items-center m-auto border-gray-500' />
            <Footer />
        </section>
    );
};

export default Home;
