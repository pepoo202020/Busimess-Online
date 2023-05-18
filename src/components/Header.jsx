/** @format */

import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import '../styles/styles.css'
import { FaSearch } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
const Header = () => {
	return (
		<header className='h-48 w-screen flex lg:flex-row flex-col px-24 fixed bg-[#00000050] z-50 items-center justify-between'>
			<Link to={'/'}>
				<img
					src={logo}
					alt='logo'
				/>
			</Link>

			<div className='flex h-full items-center gap-12'>
				<NavLink
					to={'/'}
					className='login font-medium text-2xl text-white'
				>
					Login
				</NavLink>
				<Link to={'/'}>
					<FaSearch className='font-bold text-2xl text-white' />
				</Link>
				<Link to={'/'}>
					<FiMenu className='font-bold text-2xl text-white' />
				</Link>
			</div>
		</header>
	)
}

export default Header
