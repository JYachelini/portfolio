import React from 'react'
import { motion } from 'framer-motion'
import { animated, useSpring } from 'react-spring'
import reactProject from '../assets/projects/react_project.png'
import memex from '../assets/projects/memex.png'
import javascriptProject from '../assets/projects/javascript_project.png'
import firstProject from '../assets/projects/first_project.png'

import { useIntersection } from '../Functions/customHooks'
import Project from './Project'

const Projects = React.forwardRef((props, ref: any) => {
	const divRef = React.createRef<any>()

	const projects = [
		{
			id: 1,
			title: 'memex',
			stack: ['nodejs', 'typescript', 'express', 'postgresql', 'reactjs', 'redux'],
			description:
				'Self-manageable social network. The images of the posts are uploaded to firebase. Authentication can be done with google or you can also register in the platform. I made all the backend API and frontend functionalities.',
			website: 'https://s413t.vercel.app/',
			github: 'https://github.com/No-Country/S4-13-T-Node-React',
			image: memex,
			status: 'Live',
		},
		{
			id: 2,
			title: 'e-commerce pharmacy',
			stack: ['reactjs', 'scss', 'firebase'],
			description:
				'I made it for the frontend react course. Has a functional order system.',
			website: 'https://farmaciayachelini.netlify.app/',
			github: 'https://github.com/JYachelini/Farmacia_Ecommerce-React-',
			image: reactProject,
			status: 'Live',
		},
		{
			id: 3,
			title: 'e-commerce pharmacy simulation',
			stack: ['javascript', 'scss', 'html'],
			description:
				'I made it for the javascript course. It does not have a functional order system.',
			website: 'https://jyachelini.github.io/Proyecto_Farmacia/',
			github: 'https://github.com/JYachelini/Proyecto_Farmacia',
			image: javascriptProject,
			status: 'Live',
		},
		{
			id: 4,
			title: 'Verux Mu',
			stack: ['html', 'css'],
			description: 'This is my first project, I made it for the web development course.',
			website: 'https://jyachelini.github.io/Proyecto_VeruxMu/',
			github: 'https://github.com/JYachelini/Proyecto_VeruxMu',
			image: firstProject,
			status: 'Live',
		},
	]

	const dataRef = useIntersection(divRef, '-100px')
	const section = useSpring({
		config: { duration: 700 },
		to: { opacity: dataRef ? 1 : 0 },
	})

	return (
		<>
			<motion.section
				whileInView={{ opacity: 1 }}
				// style={section}
				ref={ref}
				id='Projects'
				className='section_projects opacity-0 relative overflow-hidden flex flex-col gap-5'
			>
				<h1 className='md:text-5xl text-4xl sm:text-7xl font-semibold'>my projects</h1>
				<div className='flex 2xl:justify-evenly flex-wrap flex-col 2xl:flex-row gap-5'>
					{projects.map((project) => {
						return <Project project={project} key={project.id} />
					})}
					<div ref={divRef} className='absolute md:w-full h-full'></div>
				</div>
			</motion.section>
		</>
	)
})

export default Projects
