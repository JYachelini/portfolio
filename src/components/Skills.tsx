import React, { useState } from 'react'
import skills from './images.json'
import Images from './functions/Images'

import { ImagesInterface } from '../Interfaces/Images'

const Skills = React.forwardRef((props, ref: any) => {
	const [softSkills, setSoftSkills] = useState<ImagesInterface[]>(skills.soft)
	const [technologies, setTechnologies] = useState<ImagesInterface[]>(skills.technologies)
	return (
		<section id='Skills' className='section_skills'>
			<div className='section_skills--left flex flex-col justify-between'>
				<div ref={ref}>
					<h2 className='text-3xl'>soft skills</h2>
					<div id='soft'>
						{softSkills.map((image: ImagesInterface, index:number) => {
							return <Images key={index} src={image.src} description={image.description} />
						})}
					</div>
				</div>
				<div className='section_skills--right-skill'>
					<h2>technologies</h2>
					<div className='flex  max-w-full flex-wrap sm:gap-4 sm:p-4 pl-0'>
						{technologies.map((image: ImagesInterface, index:number) => {
							return <Images key={index} src={image.src} description={image.description} />
						})}
					</div>
				</div>
			</div>
			<div className='section_skills--right'>
				<div className='section_skills--right_certifications flex-wrap flex-col md:flex-row'>
					<div className='md:w-[45%]'>
						<a href='' className='certification-wrap md:w-full' target='_blank'>
							<h3>backend developer</h3>
							<h4>coderhouse</h4>
							<p>2022</p>
							<p>click me to view certificate</p>
						</a>
					</div>

					<a
						href='https://us.coderhouse.com/certificados/61affac7e6561800282a5b3a'
						className='certification-wrap  w-auto md:w-[45%]'
						target='_blank'
					>
						<h3>frontend react</h3>
						<h4>coderhouse</h4>
						<p>2021</p>
						<p>click me to view certificate</p>
					</a>
					<a
						href='https://us.coderhouse.com/certificados/61609dc933d8ab0055dac7df'
						className='certification-wrap  w-auto md:w-[45%]'
						target='_blank'
					>
						<h3>javascript</h3>
						<h4>coderhouse</h4>
						<p>2021</p>
						<p>click me to view certificate</p>
					</a>
					<a
						href='https://us.coderhouse.com/certificados/61215a6b9fae6803410babf1'
						className='certification-wrap  w-auto md:w-[45%]'
						target='_blank'
					>
						<h3>web Development (html/css)</h3>
						<h4>coderhouse</h4>
						<p>2021</p>
						<p>click me to view certificate</p>
					</a>
				</div>
			</div>
		</section>
	)
})

export default Skills
