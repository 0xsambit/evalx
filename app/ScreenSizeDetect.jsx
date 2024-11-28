const ScreenSizeDetect = () => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black text-white text-center p-4'>
            <div>
                <h1 className='text-2xl font-bold mb-4'>Screen Too Small</h1>
                <p>Please use a larger screen for a better experience.</p>
            </div>
        </div>
    );
};

export default ScreenSizeDetect;
