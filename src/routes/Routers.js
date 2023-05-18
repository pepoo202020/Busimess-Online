/** @format */

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const Routers = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Navigate to={'/home'} />}
			/>
			<Route
				path='/home'
				element={<Home />}
			/>
		</Routes>
	)
}

export default Routers
