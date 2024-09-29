import { icon } from "../constants/index";
const Loader = () => {
	return (
		<section className='min-h-screen flex flex-col justify-center items-center'>
			<div className='flex justify-center items-center'>
				<img
					src={icon.left}
					alt=''
					className='w-24 animate__animated animate__fadeInLeft'
				/>
				<img
					src={icon.center}
					alt=''
					className='w-24 h-24 animate__animated animate__zoomIn'
				/>
				<img
					src={icon.right}
					alt=''
					className='w-24 animate__animated animate__fadeInRight'
				/>
			</div>
			<h1 className='font-poppins font-semibold text-5xl animate__animated animate__flipInX mt-5'>
				Codemate
			</h1>
		</section>
	);
};

export default Loader;
