import Image from "next/image";
import logo from "@/app/assets/logo-black.png";
import { auth, signOut, signIn } from "@/auth";
import Link from "next/link";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className='flex justify-between items-center px-5 py-2 bg-secondary-200'>
            <div>
                <Image src={logo} alt='' className='w-24 h-auto' />
            </div>
            {session && session.user ?
                <div className='flex justify-around items-center text-black w-1/3'>
                    <Link href='/dashboard' className='link'>
                        Dashboard
                    </Link>
                    <Link href='#pricing' className='link'>
                        Pricing
                    </Link>
                    <Link href={`/user/${session.user.name}`} className='link'>
                        Profile
                    </Link>
                    <form
                        action={async () => {
                            "use server";
                            await signOut({ redirectTo: "/" });
                        }}>
                        <button type='submit' className='link'>
                            Logout
                        </button>
                    </form>
                </div>
            :   <form
                    action={async () => {
                        "use server";
                        await signIn("google");
                    }}>
                    <button type='submit' className='link'>
                        Login
                    </button>
                </form>
            }
        </header>
    );
};

export default Navbar;
