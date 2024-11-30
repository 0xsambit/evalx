import Image from "next/image";
import logo from "@/app/assets/logo-white.png";
const ScreenSizeDetect = () => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black text-white text-center p-4 small-screen-message flex-wrap'>
            <div className='flex flex-col flex-wrap justify-center items-center'>
                <Image src={logo} alt='logo' className='w-2/3 ' />
                <h1 className='text-4xl font-bold mb-4'>Screen Too Small</h1>
                <p className='text-2xl'>
                    Please use a larger screen for a better experience.
                </p>
            </div>
        </div>
    );
};

export default ScreenSizeDetect;
