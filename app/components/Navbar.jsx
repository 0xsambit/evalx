import Image from "next/image";
import logo from "@/app/assets/logo-black.png";
import { auth, signOut, signIn } from "@/auth";
import Link from "next/link";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className='flex justify-between items-center px-3 bg-secondary'>
            <div className=''>
                <Image src={logo} alt='' className='w-32 h-auto' />
            </div>
            {session && session.user ? (
                <>
                    <nav>
                        <Link href='/user/profile'>
                            <button>Profile</button>
                        </Link>
                        <form
                            action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/" });
                            }}>
                            <button type='submit'>Logout</button>
                        </form>
                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </nav>
                </>
            ) : (
                <form
                    action={async () => {
                        "use server";
                        await signIn("google");
                    }}>
                    <button type='submit'>Login</button>
                </form>
            )}
        </header>
    );
};

export default Navbar;
