/** @format */

import React, { useState } from 'react'
import '../styles/styles.css'
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react'

function Icon({ id, open }) {
	return (
		<svg
			viewBox='0 0 1024 1024'
			className={`${
				id === open ? 'rotate-180' : ''
			} h-5 w-5 transition-transform`}
			fill='currentColor'
			height='1em'
			width='1em'
		>
			<defs>
				<style />
			</defs>
			<path d='M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z' />
			<path d='M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z' />
		</svg>
	)
}
const Questions = () => {
	const [open, setOpen] = useState(0)

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value)
	}

	const accordionData = [
		{
			title: 'What is THEDojo.com?',
			body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ullam fugiat adipisci corrupti incidunt. Rem, culpa quidem maiores, est error reprehenderit fugit qui, aspernatur neque magni tempore accusantium asperiores quam? Maxime doloribus ea nam quisquam aspernatur fugit! Numquam, iure necessitatibus.',
		},
		{
			title:
				'What is the revenue share between THEDojo.com and channel owners?',
			body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ullam fugiat adipisci corrupti incidunt. Rem, culpa quidem maiores, est error reprehenderit fugit qui, aspernatur neque magni tempore accusantium asperiores quam? Maxime doloribus ea nam quisquam aspernatur fugit! Numquam, iure necessitatibus.',
		},
		{
			title: 'How many channels can I subscribed to?',
			body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ullam fugiat adipisci corrupti incidunt. Rem, culpa quidem maiores, est error reprehenderit fugit qui, aspernatur neque magni tempore accusantium asperiores quam? Maxime doloribus ea nam quisquam aspernatur fugit! Numquam, iure necessitatibus.',
		},
	]
	return (
		<div className='w-screen overflow-hidden flex flex-col items-center my-10  lg:mx-0 px-10'>
			<div className='lg:max-w-4xl flex flex-col items-center'>
				<h1 className='heading mb-20 font-light text-3xl text-center'>
					Frequently Asked Questions (FAQs)
				</h1>
				<div className='w-full bg-white rounded'>
					{accordionData.map((a, i) => (
						<Accordion
							open={open === i + 1}
							icon={
								<Icon
									id={i + 1}
									open={open}
								/>
							}
						>
							<AccordionHeader onClick={() => handleOpen(i + 1)}>
								{a.title}
							</AccordionHeader>
							<AccordionBody>{a.body}</AccordionBody>
						</Accordion>
					))}
				</div>
			</div>
		</div>
	)
}

export default Questions
