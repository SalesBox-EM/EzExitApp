'use client';

import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import FeaturesBg from '@/public/images/features-bg.png';
import FeaturesElement from '@/public/images/features-element.png';
import LogoImage from '../public/videos/My_Movie_1.mp4';
import MoneyIcon from '../public/images/icon-money-f259f42ee9542864cf857bbd8870bf63e4de2243c9de56b39a7179be98c0ef8a.png';
import Tablet from '../public/images/portrait-of-a-young-businessman-using-a-digital-ta-2022-10-04-23-26-24-utc.webp';
export default function Features() {
	const [tab, setTab] = useState<number>(1);

	const tabs = useRef<HTMLDivElement>(null);

	const heightFix = () => {
		if (tabs.current && tabs.current.parentElement)
			tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
	};

	useEffect(() => {
		heightFix();
	}, []);

	return (
		<section className='relative'>
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className='absolute inset-0 bg-gray-100 pointer-events-none '
				aria-hidden='true'></div>
			<div className='absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2'></div>

			<div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='pt-12 md:pt-20'>
					{/* Section header */}
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
						<h1 className='h2 mb-4'>
							Losing an employee is{' '}
							<span className='text-blue-600'>expensive</span>.
							Learning why it shouldn't be.
						</h1>
						{/* <p className='text-xl text-gray-600'>
							Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur
							excepteur sint occaecat cupidatat.
						</p> */}
					</div>

					{/* Section content */}
					<div className='md:grid md:grid-cols-12 md:gap-6'>
						{/* Content */}
						<div
							className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 '
							data-aos='fade-right'>
							{/* Tabs buttons */}
							<div className='mb-8 md:mb-0'>
								<a
									className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 1
											? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
											: 'bg-blue-600 text-white border-transparent'
									}`}
									href='#0'
									onClick={(e) => {
										e.preventDefault();
										setTab(1);
									}}>
									<div>
										<div className='font-bold leading-snug tracking-tight mb-1'>
											VIEW DEMO
										</div>
									</div>
									<div className='flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											xmlnsXlink='http://www.w3.org/1999/xlink'
											version='1.1'
											width='256'
											height='256'
											viewBox='0 0 256 256'
											xmlSpace='preserve'>
											<defs></defs>
											<g transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'>
												<path
													d='M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 62.251 46.633 L 37.789 60.756 c -1.258 0.726 -2.829 -0.181 -2.829 -1.633 V 30.877 c 0 -1.452 1.572 -2.36 2.829 -1.634 l 24.461 14.123 C 63.508 44.092 63.508 45.907 62.251 46.633 z'
													style={{
														stroke: 'none',
														strokeWidth: 1,
														fill: 'rgb(0,0,0)',
														fillRule: 'nonzero',
														opacity: 1,
													}}
													transform=' matrix(1 0 0 1 0 0) '
													strokeLinecap='round'
												/>
											</g>
										</svg>
									</div>
								</a>
								<a
									className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 2
											? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
											: 'bg-blue-600 text-white border-transparent'
									}`}
									href='#0'
									onClick={(e) => {
										e.preventDefault();
										setTab(2);
									}}>
									<div>
										<div className='font-bold leading-snug tracking-tight mb-1'>
											HOW MUCH DOES IT REALLY COST TO
											REPLACE AN EMPLOYEE?
										</div>
									</div>
									<div className='flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3'>
										<svg
											width='12'
											height='16'
											viewBox='0 0 12 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M10.32 8C9.76069 7.53115 9.04964 7.28228 8.32002 7.3H3.63002C3.41618 7.3054 3.20345 7.26759 3.00457 7.18885C2.80568 7.11011 2.62473 6.99204 2.47255 6.84172C2.32036 6.6914 2.20007 6.51193 2.11888 6.31403C2.03768 6.11613 1.99726 5.90389 2.00002 5.69C1.9948 5.60675 1.9948 5.52325 2.00002 5.44C2.06307 5.0578 2.26348 4.71177 2.56361 4.46688C2.86374 4.22199 3.24294 4.09509 3.63002 4.11H8.25002C8.62688 4.10967 8.99161 4.2432 9.27916 4.4868C9.56671 4.73039 9.75839 5.06821 9.82002 5.44H11.32C11.2572 4.66893 10.9066 3.94973 10.3377 3.42539C9.76894 2.90104 9.02363 2.60996 8.25002 2.61H6.67002V0.309998H5.42002V2.61H3.63002C2.8564 2.60996 2.11109 2.90104 1.54228 3.42539C0.973471 3.94973 0.622809 4.66893 0.560016 5.44C0.555027 5.52326 0.555027 5.60674 0.560016 5.69C0.560016 6.09316 0.639424 6.49237 0.793706 6.86484C0.947988 7.23731 1.17412 7.57574 1.4592 7.86082C2.03493 8.43655 2.8158 8.76 3.63002 8.76H8.37002C8.58216 8.75466 8.79323 8.79184 8.99077 8.86935C9.18832 8.94686 9.36836 9.06314 9.52026 9.21132C9.67217 9.3595 9.79288 9.53659 9.87527 9.73215C9.95767 9.92771 10.0001 10.1378 10 10.35C10.0104 10.4631 10.0104 10.5769 10 10.69C9.92062 11.0419 9.72394 11.3563 9.44228 11.5816C9.16062 11.8069 8.81072 11.9298 8.45002 11.93H3.75002C3.38932 11.9298 3.03941 11.8069 2.75775 11.5816C2.47609 11.3563 2.27942 11.0419 2.20002 10.69H0.690016C0.775954 11.4414 1.13532 12.1348 1.69963 12.6383C2.26395 13.1417 2.99376 13.42 3.75002 13.42H5.42002V15.69H6.67002V13.42H8.37002C9.12627 13.42 9.85609 13.1417 10.4204 12.6383C10.9847 12.1348 11.3441 11.4414 11.43 10.69V10.35C11.4288 9.90083 11.3287 9.45744 11.1369 9.0513C10.9451 8.64516 10.6662 8.28623 10.32 8Z'
												fill='black'
											/>
										</svg>
									</div>
								</a>
								<a
									className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 3
											? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
											: 'bg-blue-600 text-white border-transparent'
									}`}
									href='#0'
									onClick={(e) => {
										e.preventDefault();
										setTab(3);
									}}>
									<div>
										<div className='font-bold leading-snug tracking-tight mb-1'>
											INTEGRATE WITH YOUR HRIS, ATS OR USE
											OUR SYSTEM YOURSELF
										</div>
									</div>
									<div className='flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3'>
										<svg
											className='w-3 h-3 fill-current'
											viewBox='0 0 12 12'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z'
												fill='#191919'
												fillRule='nonzero'
											/>
										</svg>
									</div>
								</a>
								<a
									className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 4
											? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
											: 'bg-blue-600 text-white border-transparent'
									}`}
									href='#0'
									onClick={(e) => {
										e.preventDefault();
										setTab(4);
									}}>
									<div>
										<div className='font-bold leading-snug tracking-tight mb-1'>
											Questions ?
										</div>
									</div>
									<div className='flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3'>
										<svg
											className='w-6 h-6 fill-current'
											width='208'
											height='208'
											viewBox='0 0 208 208'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M104 0C83.4307 0 63.3234 6.09949 46.2207 17.5272C29.118 28.9548 15.788 45.1974 7.91651 64.2009C0.0450006 83.2044 -2.01455 104.115 1.99832 124.289C6.01118 144.463 15.9162 162.994 30.4609 177.539C45.0055 192.084 63.5366 201.989 83.7106 206.002C103.885 210.015 124.796 207.955 143.799 200.083C162.803 192.212 179.045 178.882 190.473 161.779C201.9 144.677 208 124.569 208 104C207.971 76.4264 197.004 49.9905 177.507 30.4931C158.009 10.9956 131.574 0.0291182 104 0ZM104 168C101.627 168 99.3065 167.296 97.3331 165.978C95.3598 164.659 93.8217 162.785 92.9134 160.592C92.0052 158.399 91.7675 155.987 92.2306 153.659C92.6936 151.331 93.8365 149.193 95.5147 147.515C97.1929 145.836 99.3311 144.694 101.659 144.231C103.987 143.768 106.399 144.005 108.592 144.913C110.785 145.822 112.659 147.36 113.978 149.333C115.296 151.307 116 153.627 116 156C116 159.183 114.736 162.235 112.485 164.485C110.235 166.736 107.183 168 104 168ZM112 119.28V120C112 122.122 111.157 124.157 109.657 125.657C108.157 127.157 106.122 128 104 128C101.878 128 99.8434 127.157 98.3431 125.657C96.8428 124.157 96 122.122 96 120V112C96 109.878 96.8428 107.843 98.3431 106.343C99.8434 104.843 101.878 104 104 104C117.23 104 128 95 128 84C128 73 117.23 64 104 64C90.77 64 80 73 80 84V88C80 90.1217 79.1571 92.1566 77.6568 93.6569C76.1565 95.1571 74.1217 96 72 96C69.8783 96 67.8434 95.1571 66.3431 93.6569C64.8428 92.1566 64 90.1217 64 88V84C64 64.15 81.94 48 104 48C126.06 48 144 64.15 144 84C144 101.38 130.24 115.93 112 119.28Z'
												fill='black'
											/>
										</svg>
									</div>
								</a>
							</div>
						</div>

						{/* Tabs items */}
						<div className='max-w-xl md:max-w-none  md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'>
							<div className='transition-all'>
								<div
									className='relative flex flex-col  text-center lg:text-right'
									data-aos='zoom-y-out'
									ref={tabs}>
									{/* Item 1 */}
									<Transition
										show={tab === 1}
										appear={true}
										className='w-full'
										enter='transition ease-in-out duration-700 transform order-first'
										enterFrom='opacity-0 translate-y-16'
										enterTo='opacity-100 translate-y-0'
										leave='transition ease-in-out duration-300 transform absolute'
										leaveFrom='opacity-100 translate-y-0'
										leaveTo='opacity-0 -translate-y-16'
										beforeEnter={() => heightFix()}
										unmount={false}>
										<div className='relative inline-flex flex-col'>
											<video
												controls
												className='w-full h-full rounded-md '>
												<source
													src={LogoImage}
													type='video/mp4'
												/>
												Your browser does not support
												the video tag.
											</video>
										</div>
									</Transition>
									{/* Item 2 */}
									<Transition
										show={tab === 2}
										appear={true}
										className='w-full'
										enter='transition ease-in-out duration-700 transform order-first'
										enterFrom='opacity-0 translate-y-16'
										enterTo='opacity-100 translate-y-0'
										leave='transition ease-in-out duration-300 transform absolute'
										leaveFrom='opacity-100 translate-y-0'
										leaveTo='opacity-0 -translate-y-16'
										beforeEnter={() => heightFix()}
										unmount={false}>
										<div className='relative inline-flex flex-col'>
											<article className='text-start line-clamp-[20]'>
												<b className='text-3xl'>
													The Cost of Employee
													Turnover
												</b>{' '}
												<br />
												Studies on the cost of employee
												turnover are all over the board.
												Some studies (The Society for
												Human Resource Management
												(SMHR)) predict that every time
												a business replaces a salaried
												employee, it costs 6-9 months’
												salary on average. For a manager
												making $40,000 a year, that’s
												$20,000 to $30,000 in recruiting
												costs and training expenses. But
												others predict the cost is even
												more – that losing a salaried
												employee can cost as 2x their
												annual salary, especially for a
												high-earner or executive level
												employee. Turnover seems to vary
												by wage and role of employee.
												For example, a CAP Study (link
												below) found average costs to
												replace an employee are: 16% of
												annual salary for high-turnover,
												low-paying jobs (earning under
												$30,000 a year). For example,
												the cost to replace a $10/hour
												retail employee would $3,328.
												20% of annual salary for
												mid-range positions (earning
												$30,000 to $50,000 a year). For
												example, the cost to replace a
												$40k manager would be $8,000. Up
												to 213% of annual salary for
												highly educated executive
												positions. For example, the cost
												to replace a $100k CEO is
												$213,000. What makes it so hard
												to predict the true cost of
												employee turnover are the many
												intangible and, often, untracked
												costs associated with employee
												turnover. So, what is the real
												cost of losing an employee? In a
												recent article on employee
												retention, Josh Bersin, of
												Bersin by Deloitte, outlined
												factors a business should
												consider in the calculating
												“real” costs of losing an
												employee. Those factors include:
												The cost of hiring a new
												employee including the
												advertising, interviewing,
												screening and hiring. The cost
												of onboarding a new position
												including training and
												management time. Lost
												productivity… it may take a new
												employee 1-2 years to reach the
												productivity of an existing
												employee. Lost engagement… other
												employees who see high turnover
												and tend to disengage and become
												less productive. Customer
												service and errors; for example,
												new employees take longer and
												are often less adept at solving
												problems. Training cost. Over
												2-3 years, a business is likely
												to invest 10-20% of an
												employee’s salary or more in
												training. Cultural impact…
												Whenever someone leaves, others
												take time to ask “why?”. One of
												the reasons the real cost of
												employee turnover is an unknown
												is most companies don’t have
												systems in place to track exit
												costs, recruiting, interviewing,
												hiring, orientation and
												training, lost productivity,
												potential customer
												dissatisfaction, reduced or lost
												business, administrative costs,
												lost expertise, etc. This takes
												collaboration among departments
												(HR, Finance, Operations) to
												measure these costs and
												reporting mechanisms. Best
												practices on employee retention
												So, what can you do about
												employee retention? We recently
												outlined seven tips fo employee
												retention (see link below). Some
												of these employee retention tips
												include: Benchmark your employee
												retention rate. Use proven
												retention strategies, not
												guesswork. Don’t assume
												employees are happy (create a
												high-feedback environment).
												Implement a health benefits
												program such as traditional
												health plan or defined
												contribution health benefits
												(see link below). Provide
												different benefits for different
												employees (focusing on the
												high-value, expensive to replace
												employees). Conduct exit
												interviews. References: CAP
												(Center for American Progress)
												Study “There are Significant
												Business Costs to Replacing
												Employees:
												https://www.americanprogress.org/issues/economy/reports/2012/11/16/44464/there-are-significant-business-costs-to-replacing-employees/
												Josh Bersin – “Employee
												Retention Now a Big Issue: Why
												the Tide Has Turned”:
												https://www.linkedin.com/pulse/20130816200159-131079-employee-retention-now-a-big-issue-why-the-tide-has-turned
												Zane Benefits “Seven Tips for
												Employee Retention”:
												https://www.zanebenefits.com/education/small-business-retention-ideas
												Defined contribution health
												benefits: “What Are Defined
												Contribution Health Plans?”:
												https://www.zanebenefits.com/education/defined-contribution-health-plans-overvie
											</article>
											<a
												href=''
												className='text-blue-500 mt-6 font-bold'>
												Read More
											</a>
										</div>
									</Transition>
									{/* Item 3 */}
									<Transition
										show={tab === 3}
										appear={true}
										className='w-full'
										enter='transition ease-in-out duration-700 transform order-first'
										enterFrom='opacity-0 translate-y-16'
										enterTo='opacity-100 translate-y-0'
										leave='transition ease-in-out duration-300 transform absolute'
										leaveFrom='opacity-100 translate-y-0'
										leaveTo='opacity-0 -translate-y-16'
										beforeEnter={() => heightFix()}
										unmount={false}>
										<div className='relative items-center justify-center inline-flex flex-col'>
											<article className='text-start line-clamp-[20]'>
												<b className='text-3xl'>
													While EZexitinterview.com
													can be used “manually”,
												</b>{' '}
												<br />
												it was designed to be used in
												conjunction with a company’s
												Applicant Tracking System (ATS)
												or Human Resource Information
												System (HRIS). In today’s “Plug
												and Play” world, system
												integrations are almost
												mandatory for large companies.
												EZexitinterview.com can be
												easily integrated with any
												platform. For more information,
												contact us at
												client.support@ezexitinterview.com.
											</article>
										</div>
									</Transition>
									<Transition
										show={tab === 4}
										appear={true}
										className='w-full '
										enter='transition ease-in-out duration-700 transform order-first'
										enterFrom='opacity-0 translate-y-16'
										enterTo='opacity-100 translate-y-0'
										leave='transition ease-in-out duration-300 transform absolute'
										leaveFrom='opacity-100 translate-y-0'
										leaveTo='opacity-0 -translate-y-16'
										beforeEnter={() => heightFix()}
										unmount={false}>
										<div className='relative items-center justify-end inline-flex flex-col'>
											<h1 className='text-6xl text-start text-blue-500'>
												Contact Us
											</h1>

											<button className='rounded-sm btn-sm pl-6 pr-6 text hover:bg-blue-600 transition-all duration-200 ease-in cursor-pointer hover:text-white'>
												Book a meeting
											</button>
										</div>
									</Transition>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
