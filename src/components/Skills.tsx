import React, { createRef, LegacyRef, MutableRefObject, useRef, useState } from 'react'
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

	const [technologies, setTechnologies] = useState(importTechnologies)
	const [softSkills, setSoftSkills] = useState(importSoftSkills)
	return (
		<section id='Skills' className='section_skills relative'>
			<animated.div style={rigthDiv} className='section_skills--left flex flex-col justify-between relative'>
				<div ref={ref}>
					<h2 className='text-3xl text-center md:text-left'>soft skills</h2>
					<div id='soft' className='md:justify-start justify-center'>
						{softSkills.map((image: ImagesInterface, index: number) => {
							return <Images key={index} src={image.src} description={image.description} />
						})}
					</div>
				</div>
				<div className='section_skills--right-skill'>
					<h2 className='text-center md:text-left'>technologies</h2>
					<div className='flex  max-w-full flex-wrap sm:gap-4 sm:p-4 pl-0 md:justify-start justify-center'>
						{technologies.map((image: ImagesInterface, index: number) => {
							return <Images key={index} src={image.src} description={image.description} />
						})}
					</div>
				</div>
			</animated.div>
			<div ref={divRef} className='absolute top-0 bottom-0 h-full w-full md:h-[2000px]'></div>
			<animated.div style={leftDiv} className='section_skills--right relative'>
				<div className='section_skills--right_certifications flex-wrap flex-col md:flex-row'>
					<div className='md:w-[45%] relative'>
						<a href='' className='certification-wrap md:w-full blur-[2px]' target='_blank'>
							<h3>backend developer</h3>
							<h4>coderhouse</h4>
							<p>2022</p>
							<p>click me to view certificate</p>
						</a>
						<p className='absolute top-0 flex justify-center items-center coming-soon'>Coming soon.</p>
					</div>

					<a href='https://us.coderhouse.com/certificados/61affac7e6561800282a5b3a' className='certification-wrap  w-auto md:w-[45%]' target='_blank'>
						<h3>frontend react</h3>
						<h4>coderhouse</h4>
						<p>2021</p>
						<p>click me to view certificate</p>
					</a>
					<a href='https://us.coderhouse.com/certificados/61609dc933d8ab0055dac7df' className='certification-wrap  w-auto md:w-[45%]' target='_blank'>
						<h3>javascript</h3>
						<h4>coderhouse</h4>
						<p>2021</p>
						<p>click me to view certificate</p>
					</a>
					<a href='https://us.coderhouse.com/certificados/61215a6b9fae6803410babf1' className='certification-wrap  w-auto md:w-[45%]' target='_blank'>
						<h3>web development (html/css)</h3>
						<h4>coderhouse</h4>
						<p>2021</p>
						<p>click me to view certificate</p>
					</a>
				</div>
			</animated.div>
		</section>
	)
})

export default Skills
