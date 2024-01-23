import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '../../public/images/Logo.png';

export default function Logo() {
	return (
		<Link
			href='/'
			className='block'
			aria-label='Cruip'>
			<Image
				src={LogoImage}
				alt=''
				className='w-[170px] p-2'
			/>
		</Link>
	);
}
