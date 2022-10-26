import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Images from './functions/Images'

import { ImagesInterface } from '../Interfaces/Images'

import { importTechnologies, importSoftSkills } from './ImportImages'
import { animated, useSpring } from 'react-spring'
import { useIntersection } from '../Functions/customHooks'

const Skills = React.forwardRef((props, ref: any) => {
	const divRef = React.createRef<any>()
	const dataRef = useIntersection(divRef, '-200px')
	const rigthDiv = useSpring({
		config: { duration: 500 },
		to: { opacity: dataRef ? 1 : 0, left: dataRef ? '0px' : '-200px' },
	})

	const leftDiv = useSpring({
		config: { duration: 500 },
		to: { opacity: dataRef ? 1 : 0, right: dataRef ? '0px' : '-200px' },
	})

	const certifications = [
		{
			id: 1,
			href: 'https://us.coderhouse.com/certificados/634a04ad06b873000e9edce0',
			title: 'fullstack developer',
			from: 'coderhouse',
			year: '2022',
		},
		{
			id: 2,
			href: 'https://us.coderhouse.com/certificados/634a04ad06b873000e9edcdd',
			title: 'backend developer',
			from: 'coderhouse',
			year: '2022',
		},
		{
			id: 3,
			href: 'https://us.coderhouse.com/certificados/61affac7e6561800282a5b3a',
			title: 'frontend react',
			from: 'coderhouse',
			year: '2021',
		},
		{
			id: 4,
			href: 'https://us.coderhouse.com/certificados/61609dc933d8ab0055dac7df',
			title: 'javascript',
			from: 'coderhouse',
			year: '2021',
		},
		{
			id: 5,
			href: 'https://us.coderhouse.com/certificados/61215a6b9fae6803410babf1',
			title: 'web development (html/css)',
			from: 'coderhouse',
			year: '2021',
		},
	]

	const [technologies, setTechnologies] = useState(importTechnologies)
	const [softSkills, setSoftSkills] = useState(importSoftSkills)
	return (
		<section id='Skills' className='section_skills relative'>
			<animated.div
				style={rigthDiv}
				className='section_skills--left flex flex-col justify-between relative'
			>
				<div ref={ref}>
					<h2 className='text-3xl text-center md:text-left'>soft skills</h2>
					<div id='soft' className='md:justify-start justify-center'>
						{softSkills.map((image: ImagesInterface, index: number) => {
							return (
								<Images key={index} src={image.src} description={image.description} />
							)
						})}
					</div>
				</div>
				<div className='section_skills--right-skill'>
					<h2 className='text-center md:text-left'>technologies</h2>
					<div className='flex  max-w-full flex-wrap sm:gap-4 sm:p-4 pl-0 md:justify-start justify-center'>
						{technologies.map((image: ImagesInterface, index: number) => {
							return (
								<Images
									key={index}
									src={image.src}
									href={image.href}
									description={image.description}
								/>
							)
						})}
					</div>
				</div>
			</animated.div>
			<div
				ref={divRef}
				className='absolute top-0 bottom-0 h-full w-full md:h-[2000px]'
			></div>
			<animated.div style={leftDiv} className='section_skills--right relative'>
				<div className='section_skills--right_certifications flex-wrap flex-col md:flex-row'>
					{certifications.map((certification) => {
						return (
							<motion.a
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								href={certification.href}
								target='_blank'
								className='certification-wrap w-auto md:w-[45%]'
								key={certification.id}
							>
								<h3>{certification.title}</h3>
								<h4>{certification.from}</h4>
								<p>{certification.year}</p>
								<p>click me to view certificate</p>
							</motion.a>
						)
					})}
				</div>
			</animated.div>
		</section>
	)
})

export default Skills
