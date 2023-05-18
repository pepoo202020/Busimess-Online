/** @format */

import React from 'react'
import '../styles/styles.css'
import service01 from '../assets/service01.png'
import service02 from '../assets/service02.png'
import service03 from '../assets/service03.png'
import service04 from '../assets/service04.png'
import service05 from '../assets/service05.png'
import service06 from '../assets/service06.png'
import ServiceCard from './ServiceCard'
const Services = () => {
	const servicesData = [
		{ name: 'Create and organize your courses and curriculum', img: service01 },
		{
			name: 'Interactive Livestream for Group and Private lessons',
			img: service02,
		},
		{
			name: 'Charge by monthly subscription or onetime payment',
			img: service03,
		},
		{
			name: 'Create certification for students that complete your courses and test them via livestream or written exam',
			img: service04,
		},
		{
			name: 'mReceive 90% of all revenue you make from your channel',
			img: service05,
		},
		{
			name: 'Decide which content you want to charge for and what you want to make free',
			img: service06,
		},
	]
	return (
		<div className='w-screen flex flex-col items-center py-24'>
			<h1 className='heading font-light text-4xl mb-3'>Our Services</h1>
			<p className='heading font-normal text-2xl mb-12'>Explore our Services</p>
			<div className='flex lg:flex-row flex-col flex-wrap items-center lg:px-20 px-10 lg:max-w-6xl'>
				{servicesData.map((service, index) => (
					<div
						key={index}
						className='border w-80 h-80'
					>
						<ServiceCard
							desc={service.name}
							image={service.img}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Services
