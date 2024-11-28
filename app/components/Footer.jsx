import Image from "next/image";
import logo from "@/app/assets/logo-white.png";
const Footer = () => {
    return (
        <div className='px-16 my-5 flex justify-around items-start m-auto w-full'>
            <Image src={logo} alt='logo' className='w-32' />
            <div>
                <h1 className='text-xl mb-5 font-semibold'>Resources</h1>
                <ul className='text-sm text-gray-300'>
                    <li>Documentation</li>
                    <li>FAQ</li>
                    <li>Support</li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl mb-5 font-semibold'>Company</h1>
                <ul className='text-sm text-gray-300'>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                </ul>
            </div>
            <div className='w-80'>
                <h1 className='text-xl font-semibold mb-5'>
                    Subscribe to our Newsletter
                </h1>
                <p className='text-sm text-gray-300'>
                    Stay updated on new releases and features, guides, and case
                    studies.
                </p>

                {/* This is implemented later*/}

                <form className='flex border justify-between items-center rounded-xl overflow-hidden my-5 border-secondary-200'>
                    <input
                        type='email'
                        placeholder='you@domain.com'
                        className='flex p-2 bg-black text-white outline-none'
                    />
                    <button
                        type='submit'
                        className='bg-[#212121] text-white p-2 hover:bg-[#363636] duration-300'>
                        Subscribe
                    </button>
                </form>

                {/*This will bee server side */}
            </div>
        </div>
    );
};

export default Footer;
