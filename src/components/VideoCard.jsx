/** @format */

import React from 'react'

const VideoCard = ({ image, title }) => {
	return (
		<div className='w-60 h-56 relative'>
			<div className='w-full h-full absolute top-0'>
				<img
					src={image}
					alt={title}
					className='w-full h-full bg-cover'
				/>
			</div>

			<div className='w-full absolute bottom-0 z-10 bg-[#00000070] flex justify-center items-center h-20 px-8'>
				<h1 className='text-white heading text-sm font-medium text-center'>
					{title}
				</h1>
			</div>
		</div>
	)
}

export default VideoCard
