import Image from "next/image";
import logo from "@/app/assets/logo-black.png";
import { auth, signOut, signIn } from "@/auth";
import Link from "next/link";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className='flex justify-between items-center px-3 bg-secondary'>
            <div>
                <Image src={logo} alt='' className='w-32 h-auto' />
            </div>
            {session && session.user ? (
                <div className='flex justify-between items-center gap-5 text-black'>
                    <Link href='/dashboard'>Dashboard</Link>
                    <form
                        action={async () => {
                            "use server";
                            await signOut({ redirectTo: "/" });
                        }}>
                        <button type='submit'>Logout</button>
                    </form>
                </div>
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
