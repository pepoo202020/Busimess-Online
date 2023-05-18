/** @format */

import React from 'react'
import Landing from '../components/Landing'
import Services from '../components/Services'
import Videos from '../components/Videos'
import Questions from '../components/Questions'

const Home = () => {
	return (
		<div className='overflow-x-hidden'>
			<Landing />
			<Services />
			<Videos />
			<Questions />
		</div>
	)
}

export default Home
