import VideoThumb from '@/public/images/hero-image.png';
import ModalVideo from '@/components/modal-video';
import LandingImage from '../public/images/EZExit 1-01.png';
import Image from 'next/image';
export default function Hero() {
	return (
		<section className='relative'>
			{/* Illustration behind hero content */}
			<div
				className='absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1'
				aria-hidden='true'></div>

			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				{/* Hero content */}
				<div className='pt-32 pb-12 md:pt-40 md:pb-20'>
					{/* Section header */}
					<div className='text-center pb-12 md:pb-16'>
						<div className='flex items-center justify-center'>
							<Image
								src={LandingImage}
								alt='Description of the image'
								width={500}
								height={300}
							/>
						</div>
						<h1
							className='text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4'
							data-aos='zoom-y-out'>
							Want to know why your <br></br> employees are
							leaving?
						</h1>
						<h1
							className='text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'
							data-aos='zoom-y-out'>
							<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-teal-800'>
								Ask them.
							</span>
						</h1>
					</div>

					{/* Hero image */}
					{/* <ModalVideo
						thumb={VideoThumb}
						thumbWidth={768}
						thumbHeight={432}
						thumbAlt='Modal video thumbnail'
						video='/videos/video.mp4'
						videoWidth={1920}
						videoHeight={1080}
					/> */}
				</div>
			</div>
		</section>
	);
}
