import { auth, signIn } from "@/auth";
import Link from "next/link";
import bgImage from "@/app/assets/maxresdefault.jpg";
import Image from "next/image";
import { CardContent } from "@/app/content";
const Home = async () => {
    const session = await auth();

    return (
        <section className='flex flex-col items-start justify-center m-auto w-full min-h-screen bg-primary -z-0'>
            <div className='bg-container z-10 py-10'>
                <Image
                    src={bgImage}
                    alt='background image'
                    className='bg-image'
                />
                <div className='overlay-content my-5 flex flex-col justify-center items-center gap-2 text-center py-10'>
                    <h1 className='text-white text-4xl font-bold'>
                        Welcome to EvalX
                    </h1>
                    <p className='text-white text-lg font-semibold'>
                        Your ultimate platform to conduct seamless technical
                        interviews
                    </p>
                    {session ? (
                        <Link href={`/dashboard/${session.user.name}`}>
                            <button type='button' className='button'>
                                Get Started
                            </button>
                        </Link>
                    ) : (
                        <form
                            action={async () => {
                                "use server";
                                await signIn("google");
                            }}>
                            <button type='submit' className='button'>
                                Get Started
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <div className='flex items-center justify-around m-auto'>
                {CardContent.map((card) => (
                    <div
                        key={card.id}
                        className='bg-white rounded-lg shadow-lg p-5 m-5 w-96 text-center'>
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
        </section>
    );
};

export default Home;
