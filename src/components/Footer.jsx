/** @format */

import React from 'react'
import '../styles/styles.css'
import { Link } from 'react-router-dom'
import FooterBg from './FooterBack'
import { BsFacebook, BsTelegram, BsGithub } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillGooglePlusCircle } from 'react-icons/ai'
const Footer = () => {
	return (
		<div className='w-screen overflow-hidden lg:h-[690px] h-full  flex flex-wrap items-start justify-between relative'>
			<div className='lg:pt-60 flex lg:w-fit w-full flex-col lg:items-start items-center lg:pl-24'>
				<div className=' text-white lg:mt-10 mt-5 heading text-5xl lg:mb-36 mb-10'>
					Contact Us
				</div>
				<div className='flex lg:w-fit w-full lg:flex-row flex-col lg:items-start items-center lg:mb-0 mb-10 lg:gap-28 gap-10'>
					<div className='flex flex-col lg:items-start gap-2 lg:w-fit w-full items-center'>
						<h1 className='heading font-light text-sm text-white'>
							Our Address
						</h1>
						<h1 className='heading font-light text-sm text-white'>
							5 Abu Seada St.
							<br /> Asyut, Egypt.
						</h1>
					</div>
					<div className='flex flex-col lg:items-start gap-2 items-center'>
						<h1 className='heading font-light text-sm text-white'>
							Our Contacts
						</h1>
						<Link
							to={'mailto:poposhosh23@gmail.com'}
							className='heading font-light text-sm text-white hover:underline hover:underline-offset-1'
						>
							poposhosh23@gmail.com
						</Link>
						<Link
							to={'tel:+201126884803'}
							className='heading font-light text-sm text-white hover:underline hover:underline-offset-1'
						>
							+20 112 688 4803
						</Link>
					</div>
				</div>
			</div>

			<div className='flex flex-col  lg:w-96 w-full mx-10 lg:mr-24  gap-9 text-white'>
				<div className='w-full h-[484px] flex flex-col drop-shadow rounded items-center justify-center bg-white '>
					<form className='w-full h-full flex flex-col items-center justify-center px-8 py-8'>
						<div class='relative w-full  z-0 mb-7'>
							<input
								type='text'
								name='name'
								class='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
								placeholder=' '
							/>
							<label class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500'>
								Name
							</label>
						</div>
						<div class='relative w-full  z-0 mb-7'>
							<input
								type='email'
								name='email'
								class='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
								placeholder=' '
							/>
							<label class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500'>
								Email
							</label>
						</div>
						<div class='relative w-full  z-0 mb-7'>
							<input
								type='text'
								name='phone'
								class='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
								placeholder=' '
							/>
							<label class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500'>
								Phone
							</label>
						</div>
						<div class='relative  w-full z-0 col-span-2'>
							<textarea
								name='message'
								rows='3'
								class='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
								placeholder=' '
							></textarea>
							<label class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500'>
								Your message
							</label>
						</div>
						<button
							type='submit'
							class='mt-5 rounded-md bg-black hover:bg-white hover:text-black hover:border hover:border-black hover:scale-110  px-10 py-2 text-white'
						>
							Send Message
						</button>
					</form>
				</div>
				<div className='flex lg:flex-row flex-col w-full items-center justify-between'>
					<div className='lg:flex items-center hidden gap-2'>
						<h1 className='heading font-light text-sm text-white'>Follow Us</h1>
						<span className='h-[2px] w-10 bg-white rounded'></span>
					</div>
					<div className='flex lg:w-fit w-full lg:justify-start justify-center  items-center gap-4 flex-wrap mb-4 text-white'>
						<Link to='https://www.facebook.com/abanob.shosh/?locale=ar_AR'>
							<BsFacebook className='text-4xl text-white  hover:scale-x-110 transition-all' />
						</Link>
						<Link to='https://wa.me/01126884803'>
							<IoLogoWhatsapp className='text-4xl text-white  hover:scale-x-110 transition-all' />
						</Link>
						<Link to='https://t.me/popo01126'>
							<BsTelegram className='text-4xl text-white  hover:scale-x-110 transition-all' />
						</Link>
						<Link to='https://github.com/pepoo202020'>
							<BsGithub className='text-4xl text-white  hover:scale-x-110 transition-all' />
						</Link>
						<Link to='mailto:poposhosh23@gmail.com'>
							<AiFillGooglePlusCircle className='text-4xl text-white  hover:scale-x-110 transition-all' />
						</Link>
					</div>
				</div>

				<div className='lg:hidden   flex justify-center items-center  pb-10 lg:px-0 px-10 text-center  bg-black w-full text-white heading text-sm'>
					© 2023 COPYRIGHT Abanob Shenoda-2020. PRIVACY POLICY | TERMS OF
					SERVICE
				</div>
			</div>

			<FooterBg />
		</div>
	)
}

export default Footer
