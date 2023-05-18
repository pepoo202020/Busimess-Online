/** @format */

import React from 'react'
import '../styles/styles.css'
import video01 from '../assets/video01.png'
import video02 from '../assets/video02.png'
import video03 from '../assets/video03.png'
import video04 from '../assets/video04.png'
import VideoCard from './VideoCard'
const Videos = () => {
	const videoData = [
		{ video: video01, title: 'Setting Up Profile' },
		{ video: video02, title: 'Setting Up Courses' },
		{ video: video03, title: 'Live Streaming' },
		{ video: video04, title: 'Taking your Content to the Next Level' },
	]
	return (
		<div className='w-screen overflow-hidden flex flex-col items-center justify-center py-10'>
			<h1 className='heading font-light text-3xl mb-3'>Video Tutorial</h1>
			<p className='heading text-2xl text-center mb-20'>
				Learn how to work as a instructor through videos we have on our website
			</p>
			<div className='flex lg:flex-row flex-col items-center flex-wrap gap-20 justify-between lg:mx-10'>
				{videoData.map((v, i) => (
					<VideoCard
						key={i}
						image={v.video}
						title={v.title}
					/>
				))}
			</div>
		</div>
	)
}

export default Videos
