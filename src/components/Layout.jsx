/** @format */

import React from 'react'
import Header from './Header'
import Routers from '../routes/Routers'
import Footer from './Footer'
const Layout = () => {
	return (
		<div className='overflow-x-hidden'>
			<Header />
			<Routers />
			<Footer />
		</div>
	)
}

export default Layout
