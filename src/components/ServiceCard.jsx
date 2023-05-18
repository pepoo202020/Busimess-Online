/** @format */

import React from 'react'

const ServiceCard = ({ image, desc }) => {
	return (
		<div className='flex flex-col items-center justify-start my-24'>
			<img
				src={image}
				alt='service_image'
				className='w-20 h-20 mb-9'
			/>
			<p className='heading text-xs font-light text-center max-w-[146px]'>
				{desc}
			</p>
		</div>
	)
}

export default ServiceCard
