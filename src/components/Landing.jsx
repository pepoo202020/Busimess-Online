/** @format */

import React from 'react'
import '../styles/styles.css'
import landingBg from '../assets/landingBg.png'
import { Link } from 'react-router-dom'
const Landing = () => {
	return (
		<div className='w-screen overflow-hidden relative h-screen'>
			<div className='w-full -z-10 h-full absolute top-0'>
				<img
					src={landingBg}
					alt='landing_image'
					className='w-full h-full bg-cover'
				/>
			</div>

			<div className='lg:mx-24 z-10 h-full w-full flex flex-col lg:items-start items-center justify-center '>
				<h1 className='heading text-white font-light text-sm mb-4'>
					UTILIZE EVERY CHANNEL
				</h1>
				<h1 className='heading text-white font-medium text-4xl text-center mb-2'>
					Welcome to the Dojo.com.
				</h1>
				<h1 className='heading text-white font-medium text-base mb-6'>
					Start your virtual Dojo in minutes.
				</h1>
				<Link
					to={'/'}
					className='px-8 py-4 w-fit transition-all text-white bg-transparent border border-white rounded-lg heading font-medium text-2xl hover:text-black hover:scale-110 hover:bg-white'
				>
					Start Now
				</Link>
			</div>
		</div>
	)
}

export default Landing
