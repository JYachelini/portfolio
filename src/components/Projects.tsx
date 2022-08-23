import React from 'react'
import reactFarmaciaGif from '../assets/projects/boceto_gif.gif'
import javascriptProject from '../assets/projects/javascript_project.png'
import firstProject from '../assets/projects/first_project.png'

import { animated, useSpring } from 'react-spring'
import { useIntersection } from '../Functions/customHooks'

const Projects = React.forwardRef((props, ref: any) => {
	const divRef = React.createRef<any>()

	const dataRef = useIntersection(divRef, '-100px')
	const section = useSpring({
		config: { duration: 700 },
		to: { opacity: dataRef ? 1 : 0 },
	})

	return (
		<>
			<animated.section style={section} ref={ref} id='Projects' className='section_projects relative overflow-y-hidden'>
				<h1 className='md:text-5xl text-4xl sm:text-7xl font-semibold'>my projects</h1>
				<div className='flex 2xl:justify-between flex-wrap flex-col 2xl:flex-row'>
					<article className='p-4 pl-0 flex flex-col gap-4 max-w-xl'>
						<h2 className='text-3xl underline'>react project</h2>
						<p>This project is based on my family's pharmacy and the continuity of the js project.</p>
						<p>I made it for the frontend react course.</p>
						<p>It lacks some functionalities like the navigation bar but it has a funciontal ordering system.</p>
						<a href='https://farmaciayachelini.netlify.app' target='_blank'>
							<img src={reactFarmaciaGif} alt='' />
							<p className='text-center text-sm pt-3'>click me to view the project online!</p>
						</a>
					</article>
					<div ref={divRef} className='absolute md:w-full h-full'></div>
					<article className='p-4 pl-0 flex flex-col gap-4 max-w-2xl'>
						<h2 className='text-3xl underline'>javascript project</h2>
						<p>This project is based on my family's pharmacy.</p>
						<p>I made it for the javascript course.</p>
						<p>It is a simulation of an e-commerce. It does not have a functional order system.</p>
						<a href='https://jyachelini.github.io/Proyecto_Farmacia/#' target='_blank'>
							<img src={javascriptProject} alt='' />
							<p className='text-center text-sm pt-3'>click me to view the project online!</p>
						</a>
					</article>
					<article className='p-4 pl-0 flex flex-col gap-4 max-w-2xl'>
						<h2 className='text-3xl underline'>first project</h2>
						<p>This project is based on a Mu Online server.</p>
						<p>It was the first project I did. For the html/css course.</p>
						<a href='https://jyachelini.github.io/Proyecto_VeruxMu/' target='_blank'>
							<img src={firstProject} alt='' />
							<p className='text-center text-sm pt-3'>click me to view the project online!</p>
						</a>
					</article>
				</div>
			</animated.section>
		</>
	)
})

export default Projects
